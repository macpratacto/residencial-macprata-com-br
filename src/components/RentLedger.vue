<script setup>
import { imovel } from '../data/imovel.js'
import { rendaMensal, rendaAnual, maiorAluguel } from '../lib/investimento.js'
import { reais } from '../lib/format.js'

const largura = (v) => `${(v / maiorAluguel) * 100}%`
</script>

<template>
  <section id="renda" class="band">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Renda atual, andar por andar</span>
        <h2 class="title">Três contratos. <em>Três fontes de renda.</em></h2>
        <p class="lede">Cada pavimento é uma casa com entrada própria e inquilino próprio. Se um contrato muda, os outros dois continuam pagando.</p>
      </div>

      <div class="grid">
        <ul class="building" aria-label="Aluguel por pavimento">
          <li class="roof" aria-hidden="true"></li>
          <li v-for="p in imovel.pavimentos" :key="p.nome" class="floor">
            <div class="name"><b>{{ p.nome }}</b><span>{{ p.detalhe }}</span></div>
            <div class="bar" aria-hidden="true"><i :style="{ width: largura(p.aluguel) }"></i></div>
            <div class="rent num">{{ reais(p.aluguel) }}<small>/mês</small></div>
          </li>
          <li class="ground" aria-hidden="true"></li>
        </ul>

        <div class="total">
          <div>
            <div class="lbl">Renda mensal atual</div>
            <div class="val num">{{ reais(rendaMensal) }}<small>/mês</small></div>
          </div>
          <hr />
          <dl class="num">
            <div><dt>Por ano</dt><dd>{{ reais(rendaAnual) }}</dd></div>
            <div><dt>Ocupação</dt><dd>{{ imovel.pavimentos.length }} de {{ imovel.pavimentos.length }} casas</dd></div>
            <div><dt>Potencial com melhorias</dt><dd>até {{ reais(imovel.rendaPotencial) }}/mês</dd></div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 40px; align-items: stretch; }
.building { list-style: none; margin: 0; padding: 0; display: grid; }
.roof {
  height: 18px; margin-inline: -10px; border-radius: 4px 4px 0 0;
  background: repeating-linear-gradient(90deg, var(--tile) 0 14px, #a8522b 14px 16px);
  box-shadow: 0 6px 0 -2px rgba(0, 0, 0, .25);
}
.floor {
  display: grid; grid-template-columns: 110px 1fr auto; align-items: center; gap: 18px;
  padding: 22px 20px; background: var(--ink-3);
  border-inline: 1px solid var(--line); border-bottom: 1px solid var(--line);
}
.name { display: grid; gap: 2px; }
.name b { font-family: var(--display); font-size: 24px; text-transform: uppercase; line-height: 1; }
.name span { font-size: 12px; color: var(--muted); }
.bar { height: 12px; border-radius: 999px; background: rgba(255, 255, 255, .06); overflow: hidden; }
.bar i { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--gold-lo), var(--gold-hi)); animation: grow 1.1s cubic-bezier(.2, .7, .2, 1) .3s both; }
.rent { font-family: var(--display); font-weight: 700; font-size: 32px; line-height: 1; text-align: right; min-width: 7ch; }
.rent small { font-size: 15px; color: var(--muted); font-weight: 600; }
.ground { height: 10px; margin-inline: -24px; background: linear-gradient(90deg, transparent, rgba(214, 178, 112, .5), transparent); }

.total {
  display: grid; align-content: space-between; gap: 24px;
  background: linear-gradient(160deg, var(--gold-hi), var(--gold) 45%, var(--gold-lo));
  color: var(--ink); border-radius: var(--r); padding: 28px;
}
.lbl { font-size: 12px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.val { font-family: var(--display); font-weight: 700; font-size: clamp(56px, 8vw, 80px); line-height: .9; }
.val small { font-size: .38em; }
hr { border: 0; border-top: 1px solid rgba(10, 22, 40, .25); margin: 0; width: 100%; }
dl { margin: 0; display: grid; gap: 10px; }
dl div { display: flex; justify-content: space-between; gap: 12px; font-weight: 600; font-size: 15px; }
dd { margin: 0; font-weight: 800; text-align: right; }

@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
@media (max-width: 520px) {
  .floor { grid-template-columns: 1fr auto; gap: 10px 14px; padding: 18px 16px; }
  .bar { grid-column: 1 / -1; grid-row: 2; }
  .ground { margin-inline: -12px; }
}
</style>
