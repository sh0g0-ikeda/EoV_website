import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve(process.cwd());
const host = "127.0.0.1";
const port = Number(process.argv[2] || process.env.PORT || 8917);

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
]);

function resolveFilePath(requestUrl) {
  const url = new URL(requestUrl, `http://${host}:${port}`);
  const pathname = decodeURIComponent(url.pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const fullPath = resolve(join(root, normalize(relativePath)));

  if (fullPath !== root && !fullPath.startsWith(`${root}${sep}`)) {
    return null;
  }

  if (!existsSync(fullPath)) {
    return null;
  }

  const stats = statSync(fullPath);
  if (stats.isDirectory()) {
    const indexPath = resolve(join(fullPath, "index.html"));
    if (!indexPath.startsWith(`${root}${sep}`) || !existsSync(indexPath)) {
      return null;
    }
    return indexPath;
  }

  return fullPath;
}

const server = createServer((request, response) => {
  const filePath = resolveFilePath(request.url || "/");
  if (!filePath) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not Found");
    return;
  }

  const contentType = contentTypes.get(extname(filePath).toLowerCase()) || "application/octet-stream";
  response.writeHead(200, { "Content-Type": contentType });
  createReadStream(filePath).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Preview server running at http://${host}:${port}/`);
});
