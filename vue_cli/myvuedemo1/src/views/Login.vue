<template>
  <div class="login-box">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passsword">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 12, message: "长度在3到12个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在3到12个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/Home");
        } else {
          this.$message.error("用户名或密码格式不正确");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-box {
  width: 500px;
  height: 300px;
  border: 1px solid #dcdfe6;
  margin: 100px auto;
  padding: 20px 30px 0 0;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #dcdfe6;
}
.login-title {
  text-align: center;
  margin-bottom: 40px;
}
</style>