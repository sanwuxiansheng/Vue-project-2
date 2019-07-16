<template>
<div>
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.isShowFooter"/>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
// 引入api
import { reqAddress, reqCategory, reqShops } from '../src/api'
export default {
  name: 'App',
  // 注册组件
  components: {
    FooterGuide
  },
  async mounted () {
    const result1 = await reqAddress("116.36867", "40.10038")
    console.log(result1);
    const result2 = await reqCategory()
    console.log(result2);
    const result3 = await reqShops("116.36867", "40.10038")
    console.log(result3);
  }
}
</script>

<style>

</style>
