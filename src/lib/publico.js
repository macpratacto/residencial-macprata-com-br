import { publicos, publicoOutraCidade, publicoPadrao } from '../data/publicos.js'

// "Aracaju/SE", "aracaju-se", "ITABAIANA" -> "aracaju" / "itabaiana"
const chave = (s) =>
  s.split(/[/,-]/)[0].normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase()

// Nome exibido para cidades sem bloco próprio: só letras e espaços, com iniciais maiúsculas
const nomeLegivel = (s) =>
  s.split(/[/,]/)[0].replace(/[^\p{L}\s'-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 40)
    .toLowerCase().replace(/(^|\s|-)(\p{L})/gu, (m, p, l) => p + l.toUpperCase())
    .replace(/\b(De|Da|Do|Das|Dos)\b/g, (m) => m.toLowerCase())

function resolver() {
  let bruto = ''
  try {
    const params = new URLSearchParams(window.location.search)
    bruto = params.get('cidade') || params.get('city') || ''
  } catch { /* URL inválida: segue sem cidade */ }

  if (!bruto.trim()) return publicoPadrao

  const conhecido = publicos[chave(bruto)]
  if (conhecido) return conhecido

  const nome = nomeLegivel(bruto)
  if (!nome) return publicoPadrao
  const trocar = (v) => (typeof v === 'string' ? v.replaceAll('{cidade}', nome) : v)
  return Object.fromEntries(
    Object.entries({ ...publicoOutraCidade, nome }).map(([k, v]) => [k, Array.isArray(v) ? v.map(trocar) : trocar(v)])
  )
}

// Resolvido uma vez no carregamento; a URL não muda enquanto a pessoa navega.
export const publico = resolver()
