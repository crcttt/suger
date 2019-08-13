<template>
    <div>
        <childref ref="dataFromChild" ></childref>
        <div>{{value1}}</div>
    </div>
</template>
<script>
import Childref from "./Childref";
export default {
    // props:["datas"],
    data(){
        return{
           value1:"" ,
        }
    },
    components:{
        "childref":Childref,
    },
    mounted() {
        this.get();
    },
    methods: {
        get(){
            this.value1=this.$refs.dataFromChild.value1
        }
        
    },
}
// // 注意：1.获取ref返回数据的方法要在mounted下
// 2.ref获取格式：console.log(this.$refs.h1Ele.innerText);
// this.$refs.ho.style.color = 'red';// 修改html样式
// console.log(this.$refs.ho.value);// 获取组件数据，
// console.log(this.$refs.ho.test);// 获取组件的方法test()
</script>