import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '505960198876-tjo8nknh6447kdths37qrg93i53077sr.apps.googleusercontent.com'
}).use(router).mount('#app')

