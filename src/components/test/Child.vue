<template>
    <div>
        <div>这是子组件</div>
        <div>{{value2}}</div>
    </div>
</template>
<script>
export default {
    props:["datas"],
    data(){
        return{
            value2:"",
        }
    },
    created() {
        this.value2=this.datas;
        console.log(this.value2);
    },
}
// 问题：props接收到父组件的值，却不在子组件自己页面显示，只有子组件在父组件中时才显示！！！
</script>

