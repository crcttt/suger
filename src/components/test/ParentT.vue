<template>
    <div>
        <childt @sendValueToParent = "getValueFromChild"></childt>
        <div>{{value1}}</div>
    </div>
</template>
<script>
import ChildT from "./ChildT";
export default {
    // props:["datas"],
    data(){
        return{
           value1:"" ,
           value2:"" ,
        }
    },
    components:{
        "childt":ChildT,
    },
    methods: {
        getValueFromChild(value1,value2){
            this.value1=value1;
            this.value2=value2;
        }
    },
}
</script>