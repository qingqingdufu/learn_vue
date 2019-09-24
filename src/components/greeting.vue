<template>
    <div class="msg">
        <!-- 插值表达式 -->
        <p>1234:{{message}}</p>
        <span @click="changeUsername">有一天, {{ username }} 想去网吧上网!</span>
        <p v-if="age >= 70">{{username}}爷爷, 您还是回去锻炼身体</p>
        <p v-else-if="age >= 18">{{ username }}, 欢迎光临, 请愉快的吃鸡!</p>
        <p v-else>{{username}}, 小朋友, 作业写完了吗?</p>
    </div>
</template>

<script>
    export default {
        name: "greeting",
        props:{message:Number,},
        data(){
            return{
                title:"传入插入值",
                name: "不语",
                dream: "小目标",
                isNotKeYou: false,
                username: "马仔",
                age: 19
                // message:"hello,python 测开们！"
            }
        },
        methods:{
            changeUsername: function () {
                // this就相当于self
                this.username = '一个没有整容需求的人'
            }
        },
        created() {
            console.log("username的值为：",this.username);
            // this.username=this.$route.query.name;  //正常？后参数查询值
            this.username=this.$route.params.username;  //获取路径参数查询值，赋值给username
            this.age=this.$route.query.age;
        }
    }
</script>

<style scoped>
    .msg p{
        color:red;
    }
</style>