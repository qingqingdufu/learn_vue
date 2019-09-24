<template>
  <div class="hello">
    <p>主页：HelloWorld</p>
    <h3>{{title}}</h3>

    <el-image style="width: 100px; height: 100px" :src="url" fit="cover" :preview-src-list="srcList">
    </el-image>

    <!-- 插槽slot用法 -->
    <!-- 第一种方式 -->
    <!--<slot></slot>-->

    <!-- 第二种方式 -->
    <slot><p>我们一起学猫叫</p></slot>

<!--    &lt;!&ndash; 第三种方式, 命名插槽 &ndash;&gt;-->
<!--    <slot name="part1"></slot>-->

<!--    <slot name="part2"></slot>-->

<!--    <slot name="part3"></slot>-->

<!--    &lt;!&ndash; 插槽作用域 &ndash;&gt;-->
<!--    <slot name="part4" :user="username"></slot>-->

<!--    <slot name="part5" user="icon"></slot>-->

<!--    <slot name="part6" user="掠掠"></slot>-->

  </div>
</template>

<script>
  import axios from 'axios';
  import {dogs} from '../api/api'

  export default {
    name: 'HelloWorld',
    props: {  // 从父组件获取msg数据
      msg: String,
      title: Number,
    },
    data() {
      return {
        url: ' ',
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        srcList: [this.url,
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'],
        // url: '',
        username: '木子'

      }
    },
    mounted() {
      // 方式一: 不推荐(不行)
      // axios.get('https://dog.ceo/api/breeds/image/random')
      //     .then(function (response) {
      //         console.log(response);
      //         console.log(response.data);
      // 此时的this指的是当前函数的应用,  不是对象
      //         this.url = response.data.message
      //     })
      //     .catch(function (err) {
      //         console.log(err);
      //     });

      // 方式二: 定义成箭头函数,箭头函数没有this用法，因此这里的this指程序对象
      // axios.get('https://dog.ceo/api/breeds/image/random')
      //     .then(response => {
      //         console.log(response);
      //         console.log(response.data);
      //         this.url = response.data.message
      //     })
      //     .catch(function (err) {
      //         console.log(err);
      //     });

      dogs()
              .then(response => {
                console.log(response);
                console.log(response.data);
                this.url = response.data.message
              })
              .catch(function (err) {
                console.log(err);
              });

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .hello{
    margin-top: 60px;
  }
</style>