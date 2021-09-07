import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

//引入moment
import moment from 'moment'//导入文件

// createApp(App).use(store).use(router).mount('#app')
var app= createApp(App);
app.use(store).use(router).mount('#app')

//全局组件ElementUI
app.use(ElementUI)
app.use(moment)
moment.locale('zh-cn');//需要汉化
