<script setup>
import WaButton from './WaButton.vue'
import { imovel } from '../data/imovel.js'
import { rendaMensal, retornoAtual } from '../lib/investimento.js'
import { reais, percent } from '../lib/format.js'
import { publico } from '../lib/publico.js'
</script>

<template>
  <header class="hero">
    <div class="wrap grid">
      <div class="copy">
        <span class="kicker"><span class="dot"></span>{{ publico.kicker }} · Direto com o proprietário</span>
        <h1>
          <span class="big num">{{ reais(rendaMensal) }}<small>/mês</small></span>
          <span class="rest">de renda imobiliária desde o primeiro dia</span>
        </h1>
        <p class="lede">
          {{ imovel.pavimentos.length }} casas independentes {{ publico.heroLocal }}, todas alugadas e gerando renda hoje.
          <strong>Investimento de {{ reais(imovel.valor) }}</strong> num imóvel pronto, sem obra e sem espera por inquilino. <strong>Aberto a negociação e aceitamos veículo como parte do pagamento.</strong>
        </p>
        <div class="cta">
          <WaButton label="Quero receber os detalhes" origem="hero" />
          <a class="btn-ghost" href="#renda">Ver renda por andar ↓</a>
        </div>
        <div class="facts">
          <div><b class="num">{{ imovel.pavimentos.length }}</b><span>casas independentes</span></div>
          <div><b class="num">{{ imovel.areaConstruida }}</b><span>de área construída</span></div>
          <div><b class="num">{{ percent(retornoAtual) }}</b><span>de retorno bruto a.a.</span></div>
        </div>
      </div>

      <figure class="photo">
        <img :src="'img/fachada.jpg'" alt="Fachada do imóvel de 3 pavimentos no bairro Novo Paraíso, Aracaju" width="685" height="818" />
        <div class="tag">
          <div>
            <div class="lbl">Valor do investimento</div>
            <div class="val num">{{ reais(imovel.valor) }}</div>
            <div class="cond">Negociável · aceita veículo</div>
          </div>
          <span class="badge">100% locado</span>
        </div>
      </figure>
    </div>
  </header>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; }
.hero::before {
  content: ""; position: absolute; inset: -30% -10% auto auto; width: 70%; height: 120%;
  background: radial-gradient(closest-side, rgba(214, 178, 112, .16), transparent 70%);
  pointer-events: none;
}
.grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 48px; align-items: center; padding-block: 56px 64px; position: relative; }
.big { white-space: nowrap; }
.copy { display: grid; gap: 22px; }
.copy > * { animation: rise .6s cubic-bezier(.2, .7, .2, 1) both; }
.copy > *:nth-child(2) { animation-delay: .06s; }
.copy > *:nth-child(3) { animation-delay: .12s; }
.copy > *:nth-child(4) { animation-delay: .18s; }
.copy > *:nth-child(5) { animation-delay: .24s; }

.kicker {
  display: inline-flex; align-items: center; gap: 10px; width: fit-content;
  font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--gold-hi); border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px;
  background: rgba(214, 178, 112, .06);
}
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--wa); box-shadow: 0 0 0 4px rgba(37, 211, 102, .18); flex: none; }

h1 { font-family: var(--display); font-weight: 700; text-transform: uppercase; line-height: .9; }
.big {
  display: block; font-size: clamp(68px, 13vw, 132px); letter-spacing: -.01em;
  background: linear-gradient(180deg, var(--gold-hi), var(--gold) 55%, var(--gold-lo));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.big small { font-size: .42em; letter-spacing: 0; -webkit-text-fill-color: var(--paper); color: var(--paper); }
.rest { display: block; font-size: clamp(32px, 5.4vw, 52px); color: var(--paper); margin-top: 6px; }
.lede strong { color: var(--paper); }
.cta { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 24px; }

.facts { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); padding-top: 18px; margin-top: 4px; }
.facts div { display: grid; gap: 2px; padding-right: 12px; }
.facts div + div { padding-left: 16px; border-left: 1px solid var(--line); }
.facts b { font-family: var(--display); font-size: 30px; font-weight: 700; line-height: 1; }
.facts span { font-size: 13px; color: var(--muted); }

.photo {
  margin: 0; border-radius: 22px; overflow: hidden; position: relative;
  border: 1px solid var(--line); aspect-ratio: 685 / 818; max-width: 100%;
  box-shadow: 0 40px 80px -30px rgba(0, 0, 0, .7);
}
.photo img { width: 100%; height: 100%; object-fit: cover; }
.photo::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(10, 22, 40, .85)); }
.tag { position: absolute; left: 18px; right: 18px; bottom: 18px; z-index: 2; display: flex; justify-content: space-between; align-items: end; gap: 12px; }
.lbl { font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--gold-hi); font-weight: 700; }
.val { font-family: var(--display); font-weight: 700; font-size: 44px; line-height: 1; white-space: nowrap; }
.cond { margin-top: 6px; font-size: 13px; font-weight: 700; color: var(--gold-hi); }
.badge {
  background: var(--gold); color: var(--ink); font-weight: 800; font-size: 13px;
  padding: 8px 12px; border-radius: 8px; text-transform: uppercase; letter-spacing: .06em; white-space: nowrap;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; gap: 32px; padding-block: 28px 48px; }
  .photo { aspect-ratio: 4 / 3.8; }
  .val { font-size: 38px; }
}
@media (max-width: 520px) {
  .facts b { font-size: 25px; }
  .facts div + div { padding-left: 10px; }
}
</style>
