<template>
<div>
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.isShowFooter"/>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
// 引入api
import {reqUser, reqCategories} from './api'
import {RECEIVE_USER, RECEIVE_CATEGORIES} from './store/mutation-types.js'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'App',
  // 注册组件
  components: {
    FooterGuide
  },
  async mounted () {
    // 发送请求获取用户信息---生成了session---sid----cookie--客户端---cookie(sid)------服务端(sid-----userId)
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      // console.log(user);
      this.$store.commit(RECEIVE_USER, user)
    }
    const result2 =await reqCategories();
    if (result2.code === 0) {
      const categories = result2.data
      // console.log(user);
      this.$store.commit(RECEIVE_CATEGORIES, categories)
    }
    this.$nextTick(() => {
      //必须是界面显示后才有效果
        new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    })
  }
}
</script>

<style>

</style>
