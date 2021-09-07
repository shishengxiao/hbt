<template>
  <div class="children">
    <!-- 主图 -->
    <div class="main">
      <img src="/img/products/children/1.jpg" alt="">
    </div>
    <!-- 介绍 -->
    <div class="introduce">
      <div class="container">
        <!-- 家居优势 -->
        <div class="household">
          <!-- 大标题 -->
          <div class="title">
            <span>儿童桌椅家居优势</span>
            <strong>Office Chair</strong>
          </div>
          <!-- 优势 -->
          <div class="advantage">
            <p v-for="i in advantage.length" :key="i">{{advantage[i-1]}}</p>
          </div>
          <!-- 产品图片 -->
          <div>
            <!-- 左边的大图 -->
            <div></div>
            <!-- 右边的小图 -->
            <div></div>
          </div>
        </div>
        <!-- 黑白调桌椅相关描述 -->
        <div class="details">
          <!-- 描述文本 -->
          <div></div>
          <!-- 描述图片 -->
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    let advantage = ['☑人体工程学','☑健康环保','☑超大收纳','☑护眼矫姿'];
    return {
      advantage
    }
  },
})
</script>

<style scoped lang="scss">
  .container{
    width: 75%;
    margin: 0 auto;
  }
  .children{
    .main{
      // width: 100vw;
      // height: 400px;
      // background-image: url('/img/products/children/1.jpg');
      // background-size: cover;
      // background-repeat: no-repeat;
      img{
        width: 100vw;
        height: auto;
      }
    }
    .introduce{
      padding-top: 120px;
      // 家居
      .household{
        position: relative;
        // background-color: red;
        .title{
          :first-child{
            font-size: 60px;
            color: hsl(0,0%,0%);
            display: block;
            // float: left;
            text-align: left;
          }
          :nth-child(2){
            font-size: 22px;
            color: hsl(0,0%,60%);
            font-family: MontDemo-Heavy;
            float: left;
            // text-align: left;
          }
        }
        .advantage{
          display: flex;
          position: absolute;
          top: 100px;
          padding: 30px 0;
          p{
            font-size: 14px;
            color: #777;
            padding-right: 20px;
          }
        }
      }
    }
  }
</style>