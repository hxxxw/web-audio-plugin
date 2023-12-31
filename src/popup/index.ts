import { createApp } from 'vue'
import App from './App.vue'
import "naive-ui" // 导入 naiveUI
// 通用字体
import 'vfonts/Lato.css'


const app = createApp(App) // 创建Vue应用

app.mount(document.querySelector('#app')) // 挂载实例
