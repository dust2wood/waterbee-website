'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowLeft, Check, Download, Mail, Phone } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import type { Product } from '@/lib/products'
import ProductSpecTable from '@/components/products/ProductSpecTable'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ProductDrawings from '@/components/products/ProductDrawings'
import { getProductDrawing } from '@/lib/productDrawings'

const imageSizing: Record<string, string> = {
  wbsc10: 'h-[330px] w-[76%] sm:h-[440px]',
  wbtu10: 'h-[370px] w-[82%] sm:h-[490px]',
  wbfc10: 'h-[370px] w-[82%] sm:h-[490px]',
  wbph10: 'h-[330px] w-[42%] sm:h-[430px]',
  wbec10: 'h-[300px] w-[34%] sm:h-[400px]',
  'wbph-pbs01': 'h-[360px] w-[56%] sm:h-[475px]',
  'wbec-cond': 'h-[360px] w-[56%] sm:h-[475px]',
  'ph-ec-board': 'h-[310px] w-[92%] sm:h-[410px]',
  'sampling-tank': 'h-[360px] w-[82%] sm:h-[470px]',
  'wbtu10-lamp-kit': 'h-[270px] w-[68%] sm:h-[360px]',
  'wbfc10-electrode-kit': 'h-[300px] w-[80%] sm:h-[400px]',
  'wbfc10-ceramic-beads': 'h-[310px] w-[74%] sm:h-[410px]',
}

const seamlessRenderSlugs = new Set([
  'wbtu10-lamp-kit',
  'wbfc10-electrode-kit',
  'wbfc10-ceramic-beads',
])

export default function ProductDetailClient({ product }: { product: Product }) {
  const locale = useLocale()
  const isKo = locale === 'ko'
  const t = useTranslations('products')
  const tNav = useTranslations('nav')
  const [activeImage, setActiveImage] = useState(product.image)
  const isPhoto = product.slug === 'filter-drain'
  const isSeamlessRender = seamlessRenderSlugs.has(product.slug)
  const title = isKo ? product.name : product.nameEn
  const description = isKo ? product.description : product.descriptionEn
  const features = isKo ? product.features : product.featuresEn
  const drawing = getProductDrawing(product.slug)

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <div className="border-b border-[#d7dcda] py-4">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: tNav('home'), href: '/' },
              { label: tNav('products'), href: '/products' },
              { label: title },
            ]}
          />
        </div>
      </div>

      <section className="border-b border-[#d7dcda]">
        <div className="container-custom grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border-[#d7dcda] py-8 lg:border-r lg:py-12 lg:pr-12">
            <div className="relative flex h-[350px] items-center justify-center overflow-hidden bg-[#f1f3f1] sm:h-[540px] [&_img]:max-h-full">
              {isPhoto ? (
                <Image src={activeImage} alt={title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
              ) : (
                <div className={`relative max-h-[90%] ${imageSizing[product.slug] ?? 'h-[340px] w-[76%] sm:h-[450px]'}`}>
                  <Image
                    src={activeImage}
                    alt={title}
                    fill
                    priority
                    unoptimized={activeImage.endsWith('.svg')}
                    className={`object-contain ${isSeamlessRender ? '' : 'mix-blend-multiply'}`}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  {isSeamlessRender && (
                    <span className="pointer-events-none absolute inset-0 shadow-[inset_0_0_38px_32px_#f1f3f1]" />
                  )}
                </div>
              )}
            </div>

            {product.gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {product.gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    aria-label={`${product.model} ${isKo ? '제품 사진' : 'product view'} ${index + 1}`}
                    aria-pressed={activeImage === image}
                    className={`relative h-20 overflow-hidden border bg-[#f1f3f1] ${activeImage === image ? 'border-[#151a19]' : 'border-[#d7dcda]'}`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      unoptimized={image.endsWith('.svg')}
                      className={isPhoto ? 'object-cover' : 'object-contain p-2 mix-blend-multiply'}
                      sizes="160px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center py-10 lg:py-14 lg:pl-14">
            <div className="w-full">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase">
                <span className="text-[#8c7200]">{product.model}</span>
                <span className="text-[#7a8380]">{isKo ? product.category : product.categoryEn}</span>
              </div>
              <h1 className="mt-5 break-keep text-4xl font-bold leading-[1.18] tracking-normal text-[#151a19] lg:text-5xl">{title}</h1>
              <p className="mt-6 text-base leading-8 text-[#68716f]">{isKo ? product.shortDescription : product.shortDescriptionEn}</p>

              <dl className="mt-9 border-t border-[#aeb6b3]">
                {product.specs.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] gap-4 border-b border-[#d7dcda] py-4 text-sm">
                    <dt className="text-[#7a8380]">{isKo ? spec.label : spec.labelEn}</dt>
                    <dd className="font-semibold leading-6 text-[#202725]">{isKo ? spec.value : spec.valueEn}</dd>
                  </div>
                ))}
              </dl>

              {product.group === 'instrumentation' && (
                <div className="mt-5 border-l-2 border-[#c9a72d] pl-4 text-sm leading-6 text-[#596361]">
                  <p className="font-semibold text-[#202725]">{isKo ? '공급 구성' : 'System configuration'}</p>
                  <p className="mt-1">{product.slug === 'wbsc10'
                    ? (isKo ? '1채널 또는 2채널 구성. 연결 센서·출력 배정은 납품 사양 기준.' : 'One- or two-channel configurations. Sensor connections and output assignments follow the supplied specification.')
                    : (isKo ? `${product.model} 센서 + WBSC10 컨트롤러. 신호 출력과 통신은 컨트롤러 구성 기준.` : `${product.model} sensor + WBSC10 controller. Outputs and communication depend on the controller configuration.`)}</p>
                </div>
              )}

              {product.purchasable && (
                <div className="mt-5 border-l-2 border-gold-500 pl-4">
                  <div className="text-xs text-[#7a8380]">{isKo ? product.compatibility : product.compatibilityEn}</div>
                  <div className="mt-1 text-base font-semibold text-[#202725]">{isKo ? product.price : product.priceEn}</div>
                </div>
              )}

              {drawing && <a href="#drawings" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#596361] hover:text-[#151a19]"><Download className="h-4 w-4" />{isKo ? '외형도 · CAD 다운로드' : 'Outline drawing & CAD'}</a>}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:support@waterbee.co.kr?subject=${encodeURIComponent(`[WATERBEE] ${product.model} ${isKo ? '제품 문의' : 'Product Inquiry'}`)}`}
                  className="btn-primary justify-center sm:flex-1"
                >
                  <Mail className="h-4 w-4" />
                  {t('inquiry')}
                </a>
                <a href="tel:1555-3534" className="btn-secondary justify-center sm:flex-1">
                  <Phone className="h-4 w-4" />
                  1555-3534
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label={isKo ? '제품 상세 항목' : 'Product sections'} className="sticky top-16 z-20 border-b border-[#d7dcda] bg-white lg:top-20">
        <div className="container-custom flex gap-4 whitespace-nowrap text-xs font-semibold sm:gap-9 sm:text-sm">
          <a href="#overview" className="py-4 text-[#596361] hover:text-[#8c7200]">{t('overview')}</a>
          <a href="#specifications" className="py-4 text-[#596361] hover:text-[#8c7200]">{isKo ? '주요 사양' : <><span className="sm:hidden">Specs</span><span className="hidden sm:inline">Specifications</span></>}</a>
          {(drawing || product.slug === 'wbph10') && <a href="#drawings" className="py-4 text-[#596361] hover:text-[#8c7200]">{isKo ? '외형 치수' : 'Dimensions'}</a>}
          {drawing && <a href="#downloads" className="py-4 text-[#596361] hover:text-[#8c7200]">{isKo ? '다운로드' : <><span className="sm:hidden">Files</span><span className="hidden sm:inline">Downloads</span></>}</a>}
        </div>
      </nav>

      <section id="overview" className="scroll-mt-36 py-12 lg:scroll-mt-40 lg:py-20">
        <div className="container-custom grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <div className="text-xs font-bold uppercase text-[#8c7200]">{t('overview')}</div>
            <h2 className="mt-4 break-keep text-3xl font-bold tracking-normal text-[#151a19]">{title}</h2>
          </div>
          <div>
            <p className="whitespace-pre-line text-base leading-8 text-[#596361]" style={{ wordBreak: 'keep-all' }}>{description}</p>
            <div className="mt-10 grid gap-x-8 gap-y-0 border-t border-[#aeb6b3] sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex gap-3 border-b border-[#d7dcda] py-4 text-sm leading-6 text-[#303735]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#8c7200]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="specifications" className="scroll-mt-36 bg-[#f3f5f3] py-12 lg:scroll-mt-40 lg:py-20">
        <div className="container-custom">
          <ProductSpecTable specs={product.specs} />
        </div>
      </section>

      {drawing && <ProductDrawings drawing={drawing} isKo={isKo} />}
      {product.slug === 'wbph10' && (
        <section id="drawings" className="scroll-mt-36 border-b border-[#d7dcda] py-12 lg:scroll-mt-40">
          <div className="container-custom flex flex-wrap items-center justify-between gap-6">
            <div><h2 className="text-2xl font-bold">{isKo ? '외형도 문의' : 'Outline drawing request'}</h2><p className="mt-3 text-sm leading-6 text-[#68716f]">{isKo ? '납품 센서 사양 확인 후 해당 구성의 도면을 안내해 드립니다.' : 'Contact us for the drawing matching your supplied sensor configuration.'}</p></div>
            <Link href="/contact" className="btn-secondary"><Mail className="h-4 w-4" />{isKo ? '도면 문의' : 'Request a drawing'}</Link>
          </div>
        </section>
      )}

      <div className="container-custom py-10">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#596361] hover:text-[#151a19]">
          <ArrowLeft className="h-4 w-4" />
          {isKo ? '전체 제품으로 돌아가기' : 'Back to all products'}
        </Link>
      </div>
    </div>
  )
}
