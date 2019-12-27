export default function ({ redirect, store }) {
  // console.log("token", store.state.user.token);
  //通过判断vuex中是否有令牌，判断登录态
  if (!store.state.user.token) {
    redirect('/login');
  }
}