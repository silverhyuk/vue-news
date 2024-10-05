import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

// Vue DevTools 활성화
const app = createApp(App)

if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true
}

app
  .use(router)
  .use(store)
  .mount('#app')
