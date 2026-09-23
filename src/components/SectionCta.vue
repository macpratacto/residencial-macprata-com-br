<script setup>
import WaButton from './WaButton.vue'

defineProps({
  label: { type: String, required: true },
  mensagem: { type: String, required: true },
  origem: { type: String, required: true },
  nota: { type: String, default: 'Resposta direta com o proprietário, sem compromisso.' }
})
</script>

<template>
  <div class="section-cta">
    <WaButton :label="label" :mensagem="mensagem" :origem="origem" />
    <span v-if="nota" class="nota">{{ nota }}</span>
  </div>
</template>

<style scoped>
.section-cta { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 20px; margin-top: 32px; }
.nota { color: var(--muted); font-size: 14px; }
@media (max-width: 520px) {
  .section-cta :deep(.btn-wa) { width: 100%; }
}
</style>
