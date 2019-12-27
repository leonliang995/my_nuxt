export const actions = {
  //在服务端将vuex状态填充好
  nuxtServerInit ({ commit }, { req }) {
    //参数1是vuex的上下文
    // 参数二是nuxt的上下文
    // req.ctx是koa服务器的上下文
    const token = req.ctx.cookies.get("token");

    if (token) {
      console.log("初始化token: " + token);
      commit("user/init", token);
    }
  }
}