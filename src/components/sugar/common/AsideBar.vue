<template>
    <div  class="right_bar" id="disappear">
       <ul>
  		<li>
			<span class="iconfont icon-yinlemusic214"></span>
			<p>音乐盒</p>
  		</li>
  		<li>
			<span class="iconfont icon-ai-ios"></span>
			<p>ISO</p>
  		</li>
  		<li>
			<span class="iconfont icon-windows"></span>
			<p>PC端</p>
  		</li>
          <li>
			<span class="iconfont icon-anzhuo"></span>
			<p>Android</p>
  		</li>
  		<li><a href="#">返回顶部</a></li>
  	   </ul> 
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted() {
        window.addEventListener("scroll", function(){
            // 获取鼠标滚轮滚动距离
            var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
            var tag = document.getElementById('disappear');
            if (scrolltop >= 300) {
                tag.classList.add('appear')
            } else {
                tag.classList.remove('appear');
            }
        })


    },
    methods: {
        
    },
}
</script>
<style >
.appear{
    opacity:1 !important;
}
.right_bar{
    width: 60px;
    position: fixed;
    bottom: 70px;
    right: 0px;
    z-index: 11;
    opacity:0;
}
.right_bar ul{
    list-style: none;
    background-color: #fff;
    padding: 0;
}
.right_bar ul li{
    cursor: pointer;
    padding: 10px 0;
    border: 1px solid #f2f1f0;
    text-align: center;
    color:#757575;
    font-size: 12px;
}
.right_bar ul li:hover{
    color:#ff6700;
}
.right_bar ul li a:hover{
    color:#ff6700;
}
.right_bar ul li span{
    width: 100%;
    font-size: 26px;
    float: left;
}
.right_bar ul li p{
    margin: 0;
}
.right_bar ul li a{
    text-decoration: none;
    color:#757575;
}
</style>
