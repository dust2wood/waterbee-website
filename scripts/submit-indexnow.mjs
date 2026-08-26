const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.waterbee.co.kr').replace(/\/$/, '')
const key = '9eed448ec440d2c933756075398224d2'
const host = new URL(siteUrl).host
const keyLocation = `${siteUrl}/${key}.txt`
const sitemapUrl = `${siteUrl}/sitemap.xml`

const sitemapResponse = await fetch(sitemapUrl)
if (!sitemapResponse.ok) {
  throw new Error(`Could not fetch ${sitemapUrl}: ${sitemapResponse.status}`)
}

const sitemap = await sitemapResponse.text()
const urlList = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1])

if (urlList.length === 0) {
  throw new Error(`No URLs found in ${sitemapUrl}`)
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList,
  }),
})

if (!response.ok) {
  const details = await response.text()
  throw new Error(`IndexNow submission failed: ${response.status} ${details}`)
}

console.log(`Submitted ${urlList.length} canonical URLs from ${sitemapUrl} to IndexNow.`)
