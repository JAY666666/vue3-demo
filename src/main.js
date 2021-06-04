import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

//按需引入element-plus
import { ElButton, ElInput,ElForm,ElFormItem,ElMessage } from "element-plus";
const components = [
    ElButton,
    ElInput,
    ElForm,
    ElFormItem
];
const plugins = [ElMessage];

components.forEach((component) => {
    app.component(component.name, component)
})

plugins.forEach((plugin) => {
    app.use(plugin)
})



app.use(router).use(store).mount("#app");
