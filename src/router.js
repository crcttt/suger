import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import Index from './components/sugar/Index.vue'
import TitleBar from './components/sugar/common/TitleBar.vue'
import AsideBar from './components/sugar/common/AsideBar.vue'
import FooterBar from './components/sugar/common/FooterBar.vue'
import Recommen from './components/sugar/common/Recommen.vue'
import SongSearch from './components/sugar/SongSearch.vue'
import Ranking from './components/sugar/common/Ranking.vue'
import ListenMusic from './components/sugar/common/ListenMusic.vue'
import SugarBox from './components/sugar/common/SugarBox.vue'
import Login from './components/sugar/common/Login.vue'
import Child from "./components/test/Child.vue"
import Parent from "./components/test/Parent.vue"
import ChildT from "./components/test/ChildT.vue"
import ParentT from "./components/test/ParentT.vue"
import Childref from "./components/test/Childref.vue"
import Parentref from "./components/test/Parentref.vue"
import Songlist from "./components/sugar/common/songlist.vue"
import SingerPage from "./components/sugar/common/SingerPage.vue"
import RankingList from "./components/sugar/common/RankingList.vue"

Vue.use(Router)

export default new Router({
  routes: [
  {path:'/index',name:'index',component:Index},
  {path:'/titlebar',name:'titlebar',component:TitleBar},
  {path:'/asidebar',component:AsideBar},
  {path:'/footerbar',component:FooterBar},
  {path:'/recommen',component:Recommen},
  {path:'/songsearch',name:'songslists',component:SongSearch},
  {path:'/ranking',component:Ranking},
  {path:'/listenmusic',component:ListenMusic},
  {path:'/sugarbox',component:SugarBox},
  {path:'/login',component:Login},
  {path:"/child",component:Child},
  {path:"/parent",component:Parent},
  {path:"/childt",component:ChildT},
  {path:"/parentt",component:ParentT},
  {path:"/childref",component:Childref},
  {path:"/parentref",component:Parentref},
  {path:"/songlist",component:Songlist},
  {path:"/singerpage",component:SingerPage},
  {path:"/rankinglist",component:RankingList},
  ]
})
