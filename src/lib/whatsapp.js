import { contato } from '../data/imovel.js'

export const linkWhatsapp = (mensagem = contato.mensagem) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`

export const whatsappUrl = linkWhatsapp()
