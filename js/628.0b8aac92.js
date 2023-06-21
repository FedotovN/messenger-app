"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[628],{7347:function(e,s,t){t.d(s,{Z:function(){return R}});var a=t(3396),r=t(7139),l=t(9242);const i={class:"flex flex-1 h-full w-full"},o={class:"flex flex-col gap-4"},n={class:"text-gray-600 dark:text-gray-400"},u={class:"grid grid-cols-6 gap-2"},c=(0,a._)("i",{class:"fa-solid fa-angle-left"},null,-1),d=[c],p=(0,a._)("i",{class:"fa-solid fa-angle-right"},null,-1),h=[p],m={key:2,class:"flex h-full w-full items-center justify-center flex-col gap-2 text-center py-8"},w={class:"font-semibold text-gray-700 dark:text-gray-300"},f={class:"text-gray-400"};function g(e,s,t,c,p,g){const x=(0,a.up)("base-button"),y=(0,a.up)("base-modal"),k=(0,a.up)("user-card");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(y,{modelValue:p.showModal,"onUpdate:modelValue":s[1]||(s[1]=e=>p.showModal=e)},{header:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("operations.users.delete",{msg:p.chosenUser?.name})),1)])),default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("small",n,(0,r.zw)(e.$t("phrases.sure")),1),(0,a._)("div",u,[(0,a.Wm)(x,{class:"col-span-4",onClick:s[0]||(s[0]=e=>p.showModal=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("phrases.no")),1)])),_:1}),(0,a.Wm)(x,{class:"col-span-2",theme:"alert",onClick:g.onRemove},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("phrases.yes")),1)])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"]),p.users?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,r.C_)([t.forceListView?"grid":"sm:hidden grid","py-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-[repeat(auto-fit,180px)] w-full max-h-full gap-x-4 scrollbar-hide"])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.users,(e=>((0,a.wg)(),(0,a.j4)(k,{user:e,class:"transition-all col-span-1 justify-self-center",onRemove:s=>g.removeUser(e),key:e?.uid},null,8,["user","onRemove"])))),128))],2)):(0,a.kq)("",!0),p.users?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,r.C_)([t.forceListView?"hidden":"sm:flex hidden","items-center relative overflow-hidden w-full"])},[p.page>1?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:s[2]||(s[2]=(0,l.iM)((e=>p.page--),["stop"])),class:"bg-[rgba(255,255,255,0.7)] rounded-x-xl z-10 absolute left-0 opacity-0 transition-all hover:opacity-100 h-full w-[42px] cursor-pointer flex justify-center items-center"},d)):(0,a.kq)("",!0),p.users?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"flex py-6 items-center relative w-full transition-all",style:(0,r.j5)(`transform: translateX(-${400*(p.page-1)}px)`)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.users,(e=>((0,a.wg)(),(0,a.j4)(k,{user:e,class:"transition-all py-2",onRemove:s=>g.removeUser(e),key:e?.uid},null,8,["user","onRemove"])))),128))],4)):(0,a.kq)("",!0),p.page<g.pagesCount?((0,a.wg)(),(0,a.iD)("div",{key:2,onClick:s[3]||(s[3]=(0,l.iM)((e=>p.page++),["stop"])),class:"bg-[rgba(255,255,255,0.7)] rounded-x-xl z-10 absolute right-0 opacity-0 transition-all hover:opacity-100 h-full w-[42px] cursor-pointer flex justify-center items-center"},h)):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("p",w,(0,r.zw)(e.$t("fallbacks.noUsers")),1),(0,a._)("small",f,(0,r.zw)(e.$t("fallbacks.createUser")),1)]))])}const x={key:0,class:"user-card"},y={class:"flex flex-col sm:gap-2 gap-4 items-center cursor-pointer sm:w-[100px] w-[120px] h-auto transition-all relative",ref:"tippyWrapper"},k={class:"w-32 flex flex-col gap-2 py-2 px-1"},v={class:"flex justify-between items-center h-3 w-full"},b={class:"whitespace-nowrap overflow-hidden text-ellipsis"},_={class:"sm:h-16 sm:w-16 w-24 h-24 rounded-full bg-gray-200 transition-all overflow-hidden"},U=["src"],$={class:"flex flex-col items-center gap-1 w-26 text-center"},C={class:"text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis w-[90px]"};function z(e,s,t,i,o,n){const u=(0,a.up)("base-loader"),c=(0,a.up)("base-tooltip");return t.user?((0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",y,[(0,a.Wm)(c,{options:{arrow:!1,trigger:"click"},onClick:n.closeMenu},{default:(0,a.w5)((()=>[(0,a._)("div",k,[(0,a._)("div",v,[(0,a._)("small",b,(0,r.zw)(t.user.name),1),o.loading?((0,a.wg)(),(0,a.j4)(u,{key:0,size:"tiny"})):(0,a.kq)("",!0)]),(0,a._)("small",{class:"text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer",onClick:s[0]||(s[0]=(...e)=>n.enter&&n.enter(...e))},(0,r.zw)(e.$t("form.buttons.signIn")),1),(0,a._)("small",{class:"text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer",onClick:s[1]||(s[1]=(...e)=>n.remove&&n.remove(...e))},(0,r.zw)(e.$t("form.buttons.remove")),1),(0,a._)("small",{class:"text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer",onClick:s[2]||(s[2]=(...e)=>n.edit&&n.edit(...e))},(0,r.zw)(e.$t("form.buttons.edit")),1)])])),_:1},8,["onClick"]),(0,a._)("div",_,[t.user.photoUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,src:t.user.photoUrl,class:"h-full w-full object-cover"},null,8,U)):(0,a.kq)("",!0)]),(0,a._)("div",$,[(0,a.wy)((0,a._)("p",{class:"sm:text-xs text-center font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-[90px] text-gray-700 dark:text-gray-300"},(0,r.zw)(t.user.name),513),[[l.F8,t.user.name]]),(0,a._)("small",C,(0,r.zw)(t.user.email),1)])],512)])):(0,a.kq)("",!0)}t(7658);var j={name:"UserCard",props:{user:{type:Object,required:!0}},data(){return{imageLoading:!1,loading:!1}},methods:{openMenu(){this.$refs.tippyWrapper._tippy.show()},closeMenu(){this.$refs.tippyWrapper._tippy.hide()},async edit(){this.loading=!0;try{await this.$store.dispatch("auth/signInWithEmail",{email:this.user.email,password:this.user.password}),this.$router.push({name:"profile-edit",params:{uid:this.user.uid},query:{fallback:this.$route.name}})}catch(e){console.warn(e)}this.closeMenu()},remove(){this.closeMenu(),this.$emit("remove")},async enter(){this.loading=!0;try{await this.$store.dispatch("auth/signInWithEmail",{email:this.user.email,password:this.user.password}),this.$router.push({name:"main",query:{message:"auth/logged-in"}})}catch(e){console.warn(e)}}}},M=t(89);const q=(0,M.Z)(j,[["render",z]]);var D=q,W={props:{forceListView:{type:Boolean,required:!1}},name:"UserList",components:{UserCard:D},data(){return{users:[],maxElementsPerPage:4,page:1,showModal:!1,chosenUser:null}},computed:{pagesCount(){return Math.ceil(this.users?.length/this.maxElementsPerPage)}},async mounted(){this.users=await this.$store.dispatch("auth/getCachedUsers")},methods:{removeUser(e){this.chosenUser=e,this.showModal=!0},async onRemove(){await this.$store.dispatch("auth/removeCachedUser",this.chosenUser.uid),this.users=await this.$store.dispatch("auth/getCachedUsers"),this.showModal=!1}}};const L=(0,M.Z)(W,[["render",g]]);var R=L},2628:function(e,s,t){t.r(s),t.d(s,{default:function(){return w}});var a=t(3396),r=t(7139);const l={class:"flex flex-col bg-white dark:bg-dark-200 sm:shadow sm:rounded h-full sm:h-auto w-full px-3 sm:max-w-[450px]"},i={class:"flex items-center py-2 border-gray-200 dark:border-gray-500 border-b-2 w-full"},o={class:"font-semibold py-2 flex-1 flex justify-between text-gray-700 dark:text-gray-300"},n={class:"flex relative overflow-y-scroll flex-1 scrollbar-hide"},u={class:"flex justify-between w-full pb-4 items-center"};function c(e,s,t,c,d,p){const h=(0,a.up)("base-loader"),m=(0,a.up)("user-list"),w=(0,a.up)("base-link");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("header",i,[(0,a._)("p",o,[(0,a.Uk)((0,r.zw)(e.$t(d.message))+" ",1),d.loading?((0,a.wg)(),(0,a.j4)(h,{key:0})):(0,a.kq)("",!0)])]),(0,a._)("main",n,[(0,a.Wm)(m,{onLogin:p.login},null,8,["onLogin"])]),(0,a._)("footer",null,[(0,a._)("div",u,[(0,a.Wm)(w,{to:"/login",class:"sm:text-xs"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("links.internal.back")),1)])),_:1})])])])}t(7658);var d=t(7347),p={components:{UserList:d.Z},data(){return{loading:!1,message:"titles.users"}},methods:{async login(){this.loading=!0,this.message="auth.phrases.login";try{await this.$store.dispatch("auth/signInWithEmail",{email:this.chosenUser.email,password:this.chosenUser.password}),this.$router.push("/")}finally{this.loading=!1}}}},h=t(89);const m=(0,h.Z)(p,[["render",c]]);var w=m}}]);
//# sourceMappingURL=628.0b8aac92.js.map