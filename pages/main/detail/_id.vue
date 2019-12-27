<template>
  <div>
    <h2>商品详情</h2>
    <pre>{{goodInfo}}</pre>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params, error }) {
    const result = await $axios.$get('/api/detail', { params });
    if (result.ok) {
      return { goodInfo: result.data };
    } else {
      error({ statusCode: 404, message: "商品详情查询失败" });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>