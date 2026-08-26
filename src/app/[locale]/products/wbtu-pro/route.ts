const goneHeaders = {
  'Cache-Control': 'public, max-age=86400, s-maxage=604800',
  'Content-Type': 'text/plain; charset=utf-8',
}

export function GET() {
  return new Response('This discontinued product page is no longer available.', {
    status: 410,
    headers: goneHeaders,
  })
}

export function HEAD() {
  return new Response(null, {
    status: 410,
    headers: goneHeaders,
  })
}
