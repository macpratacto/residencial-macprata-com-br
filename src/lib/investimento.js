import { imovel } from '../data/imovel.js'

// Números derivados dos dados: mudou um aluguel, a página inteira se atualiza.
export const rendaMensal = imovel.pavimentos.reduce((s, p) => s + p.aluguel, 0)
export const rendaAnual = rendaMensal * 12
export const rendaPotencialAnual = imovel.rendaPotencial * 12
export const retornoAtual = rendaAnual / imovel.valor
export const retornoPotencial = rendaPotencialAnual / imovel.valor
export const maiorAluguel = Math.max(...imovel.pavimentos.map((p) => p.aluguel))
