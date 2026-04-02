import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async redirects() {
    // 구글에 인덱싱된 구 URL → 현재 URL 301 영구 리다이렉트
    const deleted = [
      // 삭제된 제품 슬러그 (locale prefix 있는 경우)
      { source: '/:locale(ko|en)/products/wbtu-s',      destination: '/:locale/products/wbtu10',    permanent: true },
      { source: '/:locale(ko|en)/products/wbtb10',      destination: '/:locale/products/wbtu10',    permanent: true },
      { source: '/:locale(ko|en)/products/smartfarm-io',destination: '/:locale/products/ph-ec-board', permanent: true },
      { source: '/:locale(ko|en)/products/wbsc10',      destination: '/:locale/products',           permanent: true },
      // locale prefix 없는 구 URL (as-needed 시절 구글 인덱스)
      { source: '/products/wbtu-s',       destination: '/ko/products/wbtu10',    permanent: true },
      { source: '/products/wbtb10',       destination: '/ko/products/wbtu10',    permanent: true },
      { source: '/products/smartfarm-io', destination: '/ko/products/ph-ec-board', permanent: true },
      { source: '/products/wbsc10',       destination: '/ko/products',           permanent: true },
    ]
    return deleted
  },
}

export default withNextIntl(nextConfig)
