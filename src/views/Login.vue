<template>
  <div class="login">
    <div class="login-content">
      <div class="header">
        <img src="../../public/logo.png" />
        <div class="name">vue3</div>
      </div>
      <div class="content">
        <el-form :model="loginForm" :rules="rules" ref="loginRef">
          <el-form-item prop="phone">
            <el-input
              v-model="loginForm.phone"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="请输入密码"
              show-password
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin" style="width: 100%"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const loginRef = ref(null);
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      loginForm: {
        phone: "",
        password: "",
      },
      rules: {
        phone: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    });
    const handleLogin = () => {
      loginRef.value.validate((valid) => {
        if (valid) {
          store.dispatch("login", state.loginForm).then(() => {
            router.push('/')
          });
        }
      });
    };
    return {
      ...toRefs(state),
      loginRef,
      handleLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
}
.login-content {
  width: 300px;
  margin-top: 20vh;
  text-align: center;
  .header {
    margin-bottom: 30px;
    img {
      width: 100px;
      height: 100px;
    }
    .name {
      font-size: 20px;
      color: #4abf8a;
      font-weight: bold;
    }
  }
  .content {
    width: 100%;
  }
}
</style>
