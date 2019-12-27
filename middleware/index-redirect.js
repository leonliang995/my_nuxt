export default function ({ route, redirect }) {
  //参数也是ctx解构出来的
  if (route.path === '/') {
    redirect('/main')
  }
}