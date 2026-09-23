import { contato } from '../data/imovel.js'

export const whatsappUrl = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(contato.mensagem)}`
