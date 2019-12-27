<template>
  <div>
    <h2>首页</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <n-link :to="{name:'main-detail-id',params:{id:good.id}}">
          <span>{{good.text}}</span>
          <span>￥{{good.price}}</span>
          <button @click.prevent="addCart(good)">添加到购物车</button>
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: "nuxt-购物"
    }
  },
  async asyncData ({ $axios }) {
    const result = await $axios.$get('/api/goods');
    if (result.ok) {
      return { goods: result.goods };
    }
  },
  // data () {
  //   return {
  //     goods: [
  //       { id: 1, text: "大衣", price: "899" },
  //       { id: 2, text: "牛仔裤", price: "399" },
  //     ]
  //   }
  // }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
