/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/about', destination: '/sobre/', permanent: true },
      { source: '/services', destination: '/servicos/', permanent: true },
      { source: '/testimonials', destination: '/avaliacoes/', permanent: true },
      { source: '/our-team/:path*', destination: '/equipe/:path*', permanent: true },
      { source: '/request-a-quote', destination: '/orcamento/', permanent: true },
      { source: '/contact', destination: '/contato/', permanent: true },
      { source: '/blog/:path*', destination: '/dicas/:path*', permanent: true },
      { source: '/roofing-services', destination: '/reparos-gerais/', permanent: true },
      { source: '/roof-repairs', destination: '/reparos-hidraulicos/', permanent: true },
      { source: '/tile-and-ridge-tile-repairs', destination: '/reparos-hidraulicos/', permanent: true },
      { source: '/roof-leak-repairs', destination: '/reparos-de-trincas-e-infiltracoes/', permanent: true },
      { source: '/roof-maintenance', destination: '/reparos-gerais/', permanent: true },
      { source: '/flat-roofing', destination: '/reparos-hidraulicos/', permanent: true },
      { source: '/slate-and-tile-roofing', destination: '/reparos-hidraulicos/', permanent: true },
      { source: '/roof-replacements', destination: '/reformas-residenciais/', permanent: true },
      { source: '/gutter-repairs', destination: '/reparos-hidraulicos/', permanent: true },
      { source: '/chimney-repairs', destination: '/reparos-gerais/', permanent: true },
      { source: '/general-plumbing', destination: '/reparos-gerais/', permanent: true },
      { source: '/hot-water-systems', destination: '/reparos-hidraulicos/', permanent: true },
      { source: '/blocked-drains', destination: '/reparos-gerais/', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
