import { contato } from '../data/imovel.js'
import { publico } from './publico.js'

// Quando o anúncio traz a cidade, ela vai junto na mensagem para você saber de onde veio o lead.
const assinatura = publico.nome ? ` Sou de ${publico.nome}.` : ''

export const linkWhatsapp = (mensagem = contato.mensagem) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem + assinatura)}`

export const whatsappUrl = linkWhatsapp()
