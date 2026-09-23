<script setup>
import { imovel } from '../data/imovel.js'
import { rendaAnual, rendaPotencialAnual, retornoAtual, retornoPotencial } from '../lib/investimento.js'
import { reais, percent } from '../lib/format.js'
import SectionCta from './SectionCta.vue'
</script>

<template>
  <section id="retorno">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">A conta do investimento</span>
        <h2 class="title">Quanto os <em>R$ 700 mil</em> rendem</h2>
      </div>
      <div class="grid">
        <div class="card">
          <span class="k">Retorno bruto atual</span>
          <span class="v gold num">{{ percent(retornoAtual) }} a.a.</span>
          <p>{{ reais(rendaAnual) }} por ano com os três contratos atuais, já no primeiro mês.</p>
        </div>
        <div class="card">
          <span class="k">Potencial pela localização</span>
          <span class="v num">{{ percent(retornoPotencial) }} a.a.</span>
          <p>Pela excelente localização, perto da rodoviária, da Havan e do hospital, o Novo Paraíso tem capacidade para gerar até {{ reais(imovel.rendaPotencial) }}/mês com as 3 casas, ou {{ reais(rendaPotencialAnual) }} por ano.</p>
        </div>
        <div class="card">
          <span class="k">Condição de pagamento</span>
          <span class="v num">Negociável</span>
          <span class="car"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 16l1.5-5h11L19 16"/><path d="M4 16h16v3H4z"/><circle cx="7.5" cy="19" r="1"/><circle cx="16.5" cy="19" r="1"/></svg>Aceitamos veículo como parte do pagamento</span>
          <p>Valor pedido de {{ reais(imovel.valor) }}, aberto a negociação. Seu carro, caminhonete ou outro veículo pode entrar como parte do valor. Chame no WhatsApp e apresente sua proposta.</p>
        </div>
      </div>
      <p class="note">
        Retorno bruto calculado sobre o valor pedido ({{ reais(imovel.valor) }}), antes de IPTU, manutenção e impostos sobre aluguel.
        Os aluguéis são os contratos vigentes; o potencial de {{ reais(imovel.rendaPotencial) }} é uma estimativa com base nos aluguéis do bairro.
      </p>
      <SectionCta
        label="Quero fazer uma proposta"
        origem="retorno"
        mensagem="Olá, Mac! Tenho interesse no imóvel de renda do Novo Paraíso (R$ 700.000) e gostaria de conversar sobre uma proposta. Posso incluir um veículo como parte do pagamento?"
        nota="Aceitamos veículo como parte do pagamento."
      />
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card {
  padding: 26px; border-radius: var(--r); border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(255, 255, 255, .025), transparent);
  display: grid; gap: 8px; align-content: start;
}
.k { font-size: 13px; color: var(--muted); font-weight: 600; }
.v { font-family: var(--display); font-weight: 700; font-size: 48px; line-height: 1; }
.gold { color: var(--gold); }
.car { display: inline-flex; align-items: center; gap: 8px; width: fit-content; font-size: 13px; font-weight: 800; color: var(--ink); background: var(--gold); border-radius: 8px; padding: 6px 10px; }
.car svg { width: 18px; height: 18px; flex: none; }
p { color: var(--muted); font-size: 14px; }
.note { margin-top: 16px; font-size: 13px; max-width: 80ch; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
