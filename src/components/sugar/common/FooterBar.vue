<template>
    <div class="footer">
        <div class="footer-top">
            <p>下载sugar音乐客户端</p>
            <p>协议与声明</p>
            <p>其它</p>
        </div>
        <div class="footer-bm">
            <div class="footer-bml">
                <ul>
                    <li>
                        <a href="">
                            <span class="iconfont icon-windows"></span>
                            <p>PC版</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="iconfont icon-anzhuo"></span>
                            <p>Android</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="iconfont icon-ai-ios"></span>
                            <p>ipone</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-bmm">
                <p>
                    <a href="">用户服务协议</a>
                    <a href="">隐私政策</a>
                </p>
                <p>
                    <a href="">免责声明</a>
                    <a href="">权利声明</a>
                </p>
            </div>
            <div class="footer-bmr">
                <p>
                    <a href="">联系我们</a>
                    <a href="">广告服务</a>
                </p>
                <p>
                    <span class="text-line">
                        <a href="">腾讯音乐</a>
                        <a href="">诚聘英才</a>
                    </span>
                        <a href="">未成年人家长监护工程</a>
                    
                </p>
            </div>
        </div>
        <div class="footer-text">
            <p>
                <a href="" >广播电视节目制作经营许可证京字第2037号</a> 丨
                <a href="" >营业性演出许可证京市演1574</a> 丨
                <a href="" >京公网安备11010502030216号</a> 丨 
                <span >京ICP备09014827号</span>
            </p>
            <p>举报电话：010-87939949丨 举报邮箱：support@kuwo.cn</p>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style >
    body{
        width: 100% !important;
    }
    .footer{
        min-width: 1000px;
        padding: 0 120px;
        margin: 0 auto;
        background: #282828;
    }
    div.app-container div .footer-top{
        line-height: 18px;
        padding-top: 49px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 36px;
        color: rgb(199, 197, 197);
        font-size: 14px;
    }
    div.app-container div .footer-top p,.footer-bml,.footer-bmm,.footer-bmr{
        width: 33.3%;
    }
    .footer-bml,.footer-bmm,.footer-bmr{
        width: 33.3%;
    }
    
    .footer-bm{
       display: flex;
       justify-content: space-between;
       position: relative;
        top: -20px;
    }
    .footer-bml ul{
        display: flex;
        padding: 0;
    }
    .footer-bml ul li{
        list-style: none;
        color: #000;
    }
    .footer-bml ul li a{
        background-color: transparent;
        color: grey;
        font-size: 16px;
        text-decoration: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 17px;
    }
    .footer-bml ul li a .iconfont {
        font-size: 30px;
    }
    .footer-bmm,.footer-bmr{
        display: flex;
        /* justify-content: space-between; */
    }
    .footer-bmm p,.footer-bmr p{
        margin-right: 40px;
    }
    .footer-bmm a,.footer-bmr a{
        display: block;
        height: 18px;
        font-size: 13px;
        line-height: 18px;
        color: grey;
        margin-bottom: 26px;
        text-decoration: none;
    }
    .text-line a{
        display: inline-block;
    }
    .text-line a:first-child{
        margin-right: 27px;
    }
    .footer-text{
        font-size: 12px;
        font-weight: 400;
        text-align: center;
        color: grey;
        position: relative;
        top: -25px;
    }
    .footer-text p a{
        text-decoration: none;
        color: grey;
    }
    .footer a:hover{
        color:#ff6700;
    }
    
</style>
