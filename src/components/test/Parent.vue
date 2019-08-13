<template>
    <div>
         <child :datas="value1"></child>
       
    </div>
</template>
<script>
import Child from "./Child";
export default {
    // props:["datas"],
    data(){
        return{
            value1:"我是父组件数据",
        }
    },
    components:{
        "child":Child,
    },
}
</script>