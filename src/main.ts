import { serve, serveStatic } from "https://deno.land/x/sift@0.4.2/mod.ts";

serve({
  "/": serveStatic("../dist/index.html", {
    baseUrl: import.meta.url,
  }),
  "/blog/:slug": (_request, params) => {
    return new Response(`You visited /${params?.slug}`);
  },
  "/about": serveStatic("../readme.md", {
    baseUrl: import.meta.url,
  }),
  "/:filename+": serveStatic("../dist", {
    baseUrl: import.meta.url,
  }),
  404: (_request) => new Response("Custom 404"),
});