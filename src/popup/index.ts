import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App) // 创建Vue应用

app.mount(document.querySelector('#app')) // 挂载实例
