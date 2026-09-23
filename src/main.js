import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import { publico } from './lib/publico.js'

if (publico.nome) document.title = `${publico.kicker}: R$ 4.100/mês de renda em Aracaju`

createApp(App).mount('#app')
