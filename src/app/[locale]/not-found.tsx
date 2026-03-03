import { Link } from '@/i18n/navigation'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-gold-500 text-8xl font-black mb-4">404</div>
        <h2 className="text-white text-2xl font-bold mb-2">페이지를 찾을 수 없습니다</h2>
        <p className="text-text-secondary mb-8">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <Link href="/" className="btn-primary">
          <Home className="w-4 h-4" />
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
