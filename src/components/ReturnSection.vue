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
          <span class="k">Retorno com pequenas reformas</span>
          <span class="v num">{{ percent(retornoPotencial) }} a.a.</span>
          <p>Com melhorias pontuais, a renda pode chegar a {{ reais(imovel.rendaPotencial) }}/mês, ou {{ reais(rendaPotencialAnual) }} por ano.</p>
        </div>
        <div class="card">
          <span class="k">Condição</span>
          <span class="v num">Negociável</span>
          <p>Propostas e formas de negociação são analisadas. Chame no WhatsApp e apresente a sua.</p>
        </div>
      </div>
      <p class="note">
        Retorno bruto calculado sobre o valor pedido ({{ reais(imovel.valor) }}), antes de IPTU, manutenção e impostos sobre aluguel.
        Os aluguéis são os contratos vigentes; o potencial de {{ reais(imovel.rendaPotencial) }} é uma estimativa.
      </p>
      <SectionCta
        label="Quero fazer uma proposta"
        origem="retorno"
        mensagem="Olá, Mac! Tenho interesse no imóvel de renda do Novo Paraíso (R$ 700.000) e gostaria de conversar sobre uma proposta."
        nota="Propostas e formas de pagamento são analisadas."
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
p { color: var(--muted); font-size: 14px; }
.note { margin-top: 16px; font-size: 13px; max-width: 80ch; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
