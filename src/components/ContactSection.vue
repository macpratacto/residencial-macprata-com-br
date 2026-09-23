<script setup>
import { ref } from 'vue'
import WaButton from './WaButton.vue'
import { contato } from '../data/imovel.js'
import { publico } from '../lib/publico.js'

const copiado = ref(false)
async function copiar() {
  try {
    await navigator.clipboard.writeText(contato.telefone)
    copiado.value = true
    setTimeout(() => (copiado.value = false), 2000)
  } catch {
    const r = document.createRange()
    r.selectNodeContents(document.getElementById('telefone'))
    const s = window.getSelection()
    s.removeAllRanges()
    s.addRange(r)
  }
}
</script>

<template>
  <section id="contato">
    <div class="wrap">
      <div class="box">
        <div>
          <span class="eyebrow">Agende uma visita</span>
          <h2 class="title">{{ publico.contatoTitulo[0] }} <em>{{ publico.contatoTitulo[1] }}</em></h2>
          <p class="lede">Fale direto com o proprietário, Mac Prata, para receber documentação e detalhes dos contratos, ou para marcar uma visita ao imóvel.</p>
        </div>
        <div class="contact">
          <WaButton label="Falar no WhatsApp" origem="contato" />
          <span id="telefone" class="phone num">{{ contato.telefone }}</span>
          <span class="who">{{ contato.nome }} <small>· {{ contato.papel }}</small></span>
          <button class="copy" type="button" @click="copiar">{{ copiado ? 'Número copiado' : 'Copiar número' }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.box {
  border-radius: 24px; padding: clamp(28px, 5vw, 56px); border: 1px solid var(--line);
  background: radial-gradient(120% 140% at 100% 0%, rgba(214, 178, 112, .18), transparent 55%), var(--ink-3);
  display: grid; grid-template-columns: 1.3fr .7fr; gap: 32px; align-items: center;
}
.title { margin-top: 12px; }
.lede { margin-top: 14px; }
.contact { display: grid; gap: 14px; justify-items: start; }
.phone { font-family: var(--display); font-size: 40px; font-weight: 700; line-height: 1; user-select: all; }
.who { color: var(--gold); font-weight: 700; }
.who small { color: var(--muted); font-size: 14px; font-weight: 600; }
.copy { background: transparent; color: var(--muted); border: 1px solid var(--line); border-radius: 8px; padding: 8px 12px; font: 600 13px var(--body); cursor: pointer; }
.copy:hover { color: var(--paper); }
@media (max-width: 900px) { .box { grid-template-columns: 1fr; } }
@media (max-width: 520px) { .phone { font-size: 34px; } }
</style>
