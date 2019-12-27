<template>
  <div>
    <nav>
      <n-link to="/main">首页</n-link>
      <n-link to="/main/cart">购物车</n-link>
      <n-link to="/main/admin">商品管理</n-link>
    </nav>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>