<template>
  <div>
    <h2>管理员登录</h2>
    <div>用户名：<el-input v-model="user.username"></el-input>
    </div>
    <div>密码：<el-input type="password" v-model="user.password"></el-input>
    </div>
    <el-button @click="onLogin">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    onLogin () {
      this.$store.dispatch("user/login", this.user).then(ok => {
        if (ok) {
          this.$router.push('/');
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>