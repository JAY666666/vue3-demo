import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

//按需引入element-plus
import { ElButton, ElInput,ElForm,ElFormItem, } from "element-plus";
app.component(ElButton.name, ElButton);
app.component(ElInput.name, ElInput);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);

app.use(router).use(store).mount("#app");
