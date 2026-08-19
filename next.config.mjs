import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
    // O maior container do site é max-w-wrap (1200px); breakpoints acima de 1920
    // nunca deveriam ser pedidos, mas se algum `sizes` sair errado em algum lugar,
    // isso evita que o navegador acabe pedindo uma imagem de até 3840px por engano
    // (foi exatamente isso que deixou a Galeria com fotos em branco).
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
