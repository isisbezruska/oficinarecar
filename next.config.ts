import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Há um package-lock.json solto em C:\Users\isis_ que faz o Next inferir a raiz errada.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // O GitHub Pages não executa o otimizador de imagens do Next.js.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
