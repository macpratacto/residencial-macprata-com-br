// Meta Pixel: PageView ao abrir a página e "Contact" a cada clique no WhatsApp.
// ID do Pixel fixo no código (é público; não precisa de .env).
import { publico } from './publico.js'

const PIXEL_ID = '1597383025515890'

export function initPixel() {
  if (!PIXEL_ID || window.fbq) return
  /* eslint-disable */
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []
    t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */
  window.fbq('init', PIXEL_ID)
  window.fbq('track', 'PageView')
}

export function trackContact(origem) {
  if (window.fbq) window.fbq('track', 'Contact', { content_name: origem, content_category: publico.nome || 'sem-cidade' })
}
