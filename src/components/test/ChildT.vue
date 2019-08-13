<template>
    <div>
        <div>这是子组件</div>
        <button @click="clickEvent">传值给父组件</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value1:'这是要传给父组件的值',
            value2:'可以传多个值',
        }
    },
    methods: {
        clickEvent(){
            this.$emit("sendValueToParent",this.value1,this.value2)
        }
    },
}
</script>

