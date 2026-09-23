// O Meta Pixel (init + PageView) fica no <head> do index.html, no código padrão da Meta.
// Aqui só enviamos o evento "Contact" a cada clique no WhatsApp.
import { publico } from './publico.js'

export function trackContact(origem) {
  if (window.fbq) window.fbq('track', 'Contact', { content_name: origem, content_category: publico.nome || 'sem-cidade' })
}
