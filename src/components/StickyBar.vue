<script setup>
import WaButton from './WaButton.vue'
import { imovel } from '../data/imovel.js'
import { rendaMensal } from '../lib/investimento.js'
import { reais } from '../lib/format.js'
</script>

<template>
  <div class="sticky">
    <div class="info">
      <b class="num">{{ reais(imovel.valor) }}</b>
      <span>{{ reais(rendaMensal) }}/mês · negociável · aceita veículo</span>
    </div>
    <WaButton class="cta" label="Chamar no WhatsApp" origem="barra-fixa" />
  </div>
</template>

<style scoped>
.sticky {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 50;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  background: rgba(10, 22, 40, .92); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid var(--line); display: flex; align-items: center; gap: 14px;
}
.info { display: grid; line-height: 1.15; min-width: 0; }
.info b { font-family: var(--display); font-size: 24px; }
.info span { font-size: 12px; color: var(--muted); white-space: nowrap; }
.cta { flex: 1; padding: 14px 18px; font-size: 16px; max-width: 360px; margin-left: auto; }
@media (max-width: 520px) {
  .info { display: none; }
  .cta { max-width: none; }
}
</style>
