import { Link } from '@/i18n/navigation'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f1f3f1] px-4">
      <div className="text-center">
        <div className="mb-4 text-8xl font-black text-[#8c7200]">404</div>
        <h2 className="mb-2 text-2xl font-bold text-[#151a19]">페이지를 찾을 수 없습니다</h2>
        <p className="mb-8 text-[#68716f]">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <Link href="/" className="btn-primary">
          <Home className="w-4 h-4" />
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
