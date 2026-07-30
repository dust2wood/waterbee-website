import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async redirects() {
    return [
      // 구 홈페이지 정책 페이지 쿼리
      {
        source: '/',
        has: [{ type: 'query', key: 'mode', value: 'privacy' }],
        destination: '/ko/privacy',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'mode', value: 'policy' }],
        destination: '/ko/terms',
        permanent: true,
      },
      { source: '/', destination: '/ko', permanent: true },
      // 구 아임웹 숫자 URL을 대응하는 현재 페이지로 통합
      { source: '/31', destination: '/ko', permanent: true },
      { source: '/32', destination: '/ko/contact', permanent: true },
      { source: '/33', destination: '/ko/products/wbsc10', permanent: true },
      { source: '/34', destination: '/ko/products/wbtu10', permanent: true },
      { source: '/35', destination: '/ko/products/wbcl10', permanent: true },
      { source: '/37', destination: '/ko/products/wbec10', permanent: true },
      { source: '/38', destination: '/ko/products/wbph10', permanent: true },
      { source: '/About', destination: '/ko/about', permanent: true },
      // ── 구 CMS(이전 홈페이지) URL → 현재 페이지 301 영구 리다이렉트 ──
      // /PRODUCT, /product, /PRODUCT/* 전체
      { source: '/PRODUCT',          destination: '/ko/products', permanent: true },
      { source: '/PRODUCT/:path*',   destination: '/ko/products', permanent: true },
      { source: '/product',          destination: '/ko/products', permanent: true },
      { source: '/product/:path*',   destination: '/ko/products', permanent: true },
      // 구 게시판 색인 신호를 현재 소식 페이지로 통합
      { source: '/Notice',           destination: '/ko/news',     permanent: true },
      { source: '/Notice/:path*',    destination: '/ko/news',     permanent: true },
      { source: '/notice',           destination: '/ko/news',     permanent: true },
      { source: '/notice/:path*',    destination: '/ko/news',     permanent: true },
      { source: '/board',            destination: '/ko/news',     permanent: true },
      { source: '/board/:path*',     destination: '/ko/news',     permanent: true },
      { source: '/Board',            destination: '/ko/news',     permanent: true },
      { source: '/Board/:path*',     destination: '/ko/news',     permanent: true },
      // 삭제된 제품 슬러그 (locale prefix 있는 경우)
      { source: '/:locale(ko|en)/products/wbtu-s',       destination: '/:locale/products/wbtu10',     permanent: true },
      { source: '/:locale(ko|en)/products/wbtb10',       destination: '/:locale/products/wbtu10',     permanent: true },
      { source: '/:locale(ko|en)/products/smartfarm-io', destination: '/:locale/products/ph-ec-board', permanent: true },
      // 삭제된 제품 슬러그 (as-needed 시절 locale prefix 없는 구 URL)
      { source: '/products/wbtu-s',        destination: '/ko/products/wbtu10',     permanent: true },
      { source: '/products/wbtb10',        destination: '/ko/products/wbtu10',     permanent: true },
      { source: '/products/smartfarm-io',  destination: '/ko/products/ph-ec-board', permanent: true },
    ]
  },
}

export default withNextIntl(nextConfig)
