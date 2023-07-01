"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[499],{7347:function(e,s,t){t.d(s,{Z:function(){return I}});var a=t(3396),l=t(7139),r=t(9242);const o={class:"flex flex-1 h-full w-full"},i={class:"flex flex-col gap-4"},n={class:"text-gray-600 dark:text-gray-400"},u={class:"grid grid-cols-6 gap-2"},c=(0,a._)("i",{class:"fa-solid fa-angle-left"},null,-1),d=[c],m=(0,a._)("i",{class:"fa-solid fa-angle-right"},null,-1),p=[m],h={key:2,class:"flex h-full w-full items-center justify-center flex-col gap-2 text-center py-8"},g={class:"font-semibold text-gray-700 dark:text-gray-300"},f={class:"text-gray-400"};function w(e,s,t,c,m,w){const x=(0,a.up)("base-button"),y=(0,a.up)("base-modal"),k=(0,a.up)("user-card");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(y,{modelValue:m.showModal,"onUpdate:modelValue":s[1]||(s[1]=e=>m.showModal=e)},{header:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.$t("operations.users.delete",{msg:m.chosenUser?.name})),1)])),default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("small",n,(0,l.zw)(e.$t("phrases.sure")),1),(0,a._)("div",u,[(0,a.Wm)(x,{class:"col-span-4",onClick:s[0]||(s[0]=e=>m.showModal=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.$t("phrases.no")),1)])),_:1}),(0,a.Wm)(x,{class:"col-span-2",theme:"alert",onClick:w.onRemove},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.$t("phrases.yes")),1)])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"]),m.users?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,l.C_)([t.forceListView?"grid":"sm:hidden grid","py-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-[repeat(auto-fit,180px)] w-full max-h-full gap-x-4 scrollbar-hide"])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.users,(e=>((0,a.wg)(),(0,a.j4)(k,{user:e,class:"transition-all col-span-1 justify-self-center",onRemove:s=>w.removeUser(e),key:e?.uid},null,8,["user","onRemove"])))),128))],2)):(0,a.kq)("",!0),m.users?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,l.C_)([t.forceListView?"hidden":"sm:flex hidden","items-center relative overflow-hidden w-full"])},[m.page>1?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:s[2]||(s[2]=(0,r.iM)((e=>m.page--),["stop"])),class:"bg-[rgba(255,255,255,0.7)] rounded-x-xl z-10 absolute left-0 opacity-0 transition-all hover:opacity-100 h-full w-[42px] cursor-pointer flex justify-center items-center"},d)):(0,a.kq)("",!0),m.users?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"flex py-6 items-center relative w-full transition-all",style:(0,l.j5)(`transform: translateX(-${400*(m.page-1)}px)`)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.users,(e=>((0,a.wg)(),(0,a.j4)(k,{user:e,class:"transition-all py-2",onRemove:s=>w.removeUser(e),key:e?.uid},null,8,["user","onRemove"])))),128))],4)):(0,a.kq)("",!0),m.page<w.pagesCount?((0,a.wg)(),(0,a.iD)("div",{key:2,onClick:s[3]||(s[3]=(0,r.iM)((e=>m.page++),["stop"])),class:"bg-[rgba(255,255,255,0.7)] rounded-x-xl z-10 absolute right-0 opacity-0 transition-all hover:opacity-100 h-full w-[42px] cursor-pointer flex justify-center items-center"},p)):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("p",g,(0,l.zw)(e.$t("fallbacks.noUsers")),1),(0,a._)("small",f,(0,l.zw)(e.$t("fallbacks.createUser")),1)]))])}const x={key:0,class:"user-card"},y={class:"flex flex-col sm:gap-2 gap-4 items-center cursor-pointer sm:w-[100px] w-[120px] h-auto transition-all relative",ref:"tippyWrapper"},k={class:"w-32 flex flex-col gap-2 py-2 px-1"},b={class:"flex justify-between items-center h-3 w-full"},v={class:"whitespace-nowrap overflow-hidden text-ellipsis"},_={class:"sm:h-16 sm:w-16 w-24 h-24 rounded-full bg-gray-200 transition-all overflow-hidden"},$=["src"],U={class:"flex flex-col items-center gap-1 w-26 text-center"},W={class:"text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis w-[90px]"};function z(e,s,t,o,i,n){const u=(0,a.up)("base-loader"),c=(0,a.up)("base-tooltip");return t.user?((0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",y,[(0,a.Wm)(c,{options:{arrow:!1,trigger:"click"},onClick:n.closeMenu},{default:(0,a.w5)((()=>[(0,a._)("div",k,[(0,a._)("div",b,[(0,a._)("small",v,(0,l.zw)(t.user.name),1),i.loading?((0,a.wg)(),(0,a.j4)(u,{key:0,size:"tiny"})):(0,a.kq)("",!0)]),(0,a._)("small",{class:"text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer",onClick:s[0]||(s[0]=(...e)=>n.enter&&n.enter(...e))},(0,l.zw)(e.$t("form.buttons.signIn")),1),(0,a._)("small",{class:"text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer",onClick:s[1]||(s[1]=(...e)=>n.remove&&n.remove(...e))},(0,l.zw)(e.$t("form.buttons.remove")),1),(0,a._)("small",{class:"text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer",onClick:s[2]||(s[2]=(...e)=>n.edit&&n.edit(...e))},(0,l.zw)(e.$t("form.buttons.edit")),1)])])),_:1},8,["onClick"]),(0,a._)("div",_,[t.user.photoUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,src:t.user.photoUrl,class:"h-full w-full object-cover"},null,8,$)):(0,a.kq)("",!0)]),(0,a._)("div",U,[(0,a.wy)((0,a._)("p",{class:"sm:text-xs text-center font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-[90px] text-gray-700 dark:text-gray-300"},(0,l.zw)(t.user.name),513),[[r.F8,t.user.name]]),(0,a._)("small",W,(0,l.zw)(t.user.email),1)])],512)])):(0,a.kq)("",!0)}t(7658);var C={name:"UserCard",props:{user:{type:Object,required:!0}},data(){return{imageLoading:!1,loading:!1}},methods:{openMenu(){this.$refs.tippyWrapper._tippy.show()},closeMenu(){this.$refs.tippyWrapper._tippy.hide()},async edit(){this.loading=!0;try{await this.$store.dispatch("auth/signInWithEmail",{email:this.user.email,password:this.user.password}),this.$router.push({name:"profile-edit",params:{uid:this.user.uid},query:{fallback:this.$route.name}})}catch(e){console.warn(e)}this.closeMenu()},remove(){this.closeMenu(),this.$emit("remove")},async enter(){this.loading=!0;try{await this.$store.dispatch("auth/signInWithEmail",{email:this.user.email,password:this.user.password}),this.$router.push({name:"main",query:{message:"auth/logged-in"}})}catch(e){console.warn(e)}}}},q=t(89);const j=(0,q.Z)(C,[["render",z]]);var M=j,V={props:{forceListView:{type:Boolean,required:!1}},name:"UserList",components:{UserCard:M},data(){return{users:[],maxElementsPerPage:4,page:1,showModal:!1,chosenUser:null}},computed:{pagesCount(){return Math.ceil(this.users?.length/this.maxElementsPerPage)}},async mounted(){this.users=await this.$store.dispatch("auth/getCachedUsers")},methods:{removeUser(e){this.chosenUser=e,this.showModal=!0},async onRemove(){await this.$store.dispatch("auth/removeCachedUser",this.chosenUser.uid),this.users=await this.$store.dispatch("auth/getCachedUsers"),this.showModal=!1}}};const D=(0,q.Z)(V,[["render",w]]);var I=D},2499:function(e,s,t){t.r(s),t.d(s,{default:function(){return H}});var a=t(3396),l=t(9242),r=t(7139);const o={class:"flex gap-6 w-full h-full items-center"},i={class:"bg-white dark:bg-dark-200 sm:shadow sm:rounded sm:justify-start items-center justify-center flex flex-col h-full px-4 overflow-hidden w-full"},n={class:"w-full sm:hidden flex justify-between mb-2 gap-2 items-center"},u={class:"flex justify-center items-center pt-2 gap-2 w-full flex-col"},c={class:"flex gap-1"},d={class:"text-gray-600 dark:text-gray-300 font-semibold text-lg"},m=(0,a._)("small",{class:"text-lg"},"👋",-1),p={class:"text-gray-600 dark:text-gray-400"},h={class:"flex flex-col gap-5 items-center w-full border-b-2 dark:border-gray-500 border-gray-300 relative py-6"},g=(0,a._)("i",{class:"fa-brands fa-google pl-2"},null,-1),f={class:"bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 px-4 absolute z-10 -bottom-2"},w={class:"flex flex-col w-full sm:flex-1 mb-6"},x={class:"flex flex-col w-full mb-2 gap-4"},y={class:"flex justify-between text-xs items-center"},k={class:"flex gap-2 w-full text-xs dark:text-gray-300 text-gray-700"},b={class:"flex justify-between items-center"},v={class:"flex gap-3 items-center text-xs"},_=(0,a._)("i",{class:"fa-brands fa-github"},null,-1),$=(0,a._)("div",{class:"h-1 w-1 bg-gray-400 rounded-full"},null,-1),U=(0,a._)("i",{class:"fa-brands fa-telegram"},null,-1),W=(0,a._)("div",{class:"h-1 w-1 bg-gray-400 rounded-full"},null,-1),z=(0,a._)("i",{class:"fa-brands fa-vk"},null,-1),C={class:"flex w-full justify-between"},q={key:0,class:"flex justify-between w-full transition-all pb-2 text-gray-700 dark:text-gray-300"},j={class:"lg:flex hidden flex-col bg-white dark:bg-dark-200 rounded shadow w-full h-[500px] px-4 overflow-hidden"},M={class:"flex justify-center py-4 gap-2 w-full flex-col border-b-2 dark:border-gray-500 border-gray-200"},V={class:"font-semibold text-lg text-gray-700 dark:text-gray-300"},D=(0,a._)("small",{class:"text-lg pl-2"},"📜",-1),I={class:"flex-1 w-full h-full overflow-y-scroll scrollbar-hide"};function L(e,s,t,L,S,Z){const R=(0,a.up)("color-theme-switcher"),P=(0,a.up)("language-switcher"),E=(0,a.up)("base-button"),G=(0,a.up)("base-input"),T=(0,a.up)("base-link"),F=(0,a.up)("base-checkbox"),K=(0,a.up)("base-loader"),H=(0,a.up)("user-list");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("form",{onSubmit:s[3]||(s[3]=(0,l.iM)(((...e)=>Z.signIn&&Z.signIn(...e)),["prevent"])),class:"flex flex-col justify-center items-center w-full h-full sm:h-auto lg:max-w-[450px] transition-colors"},[(0,a._)("div",i,[(0,a._)("div",n,[(0,a.Wm)(R),(0,a.Wm)(P)]),(0,a._)("header",u,[(0,a._)("div",c,[(0,a._)("p",d,(0,r.zw)(e.$t("titles.welcome")),1),m]),(0,a._)("p",p,(0,r.zw)(e.$t("titles.taskTracker")),1)]),(0,a._)("div",h,[(0,a.Wm)(E,{onClick:Z.signInWithGoogle},{icon:(0,a.w5)((()=>[g])),default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("phrases.loginWithGoogle"))+" ",1)])),_:1},8,["onClick"]),(0,a._)("small",f,(0,r.zw)(e.$t("phrases.or")),1)]),(0,a._)("main",w,[(0,a.Wm)(G,{autocomplete:"new-password",errorMessage:S.v$.email.$errors.length?e.$t("form.errors.email.incorrect"):"",label:e.$t("form.placeholders.email"),modelValue:S.email,"onUpdate:modelValue":s[0]||(s[0]=e=>S.email=e)},null,8,["errorMessage","label","modelValue"]),(0,a.Wm)(G,{autocomplete:"new-password",errorMessage:S.v$.password.$errors.length?e.$t("form.errors.password.required"):"",label:e.$t("form.placeholders.password"),type:"password",modelValue:S.password,"onUpdate:modelValue":s[1]||(s[1]=e=>S.password=e)},null,8,["errorMessage","label","modelValue"]),(0,a.Wm)(T,{to:{name:"password-reset"},class:"text-xs pt-2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("links.internal.passwordRecovery")),1)])),_:1})]),(0,a._)("footer",x,[(0,a._)("div",y,[(0,a.Wm)(F,{modelValue:S.checkbox,"onUpdate:modelValue":s[2]||(s[2]=e=>S.checkbox=e)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("form.checkbox.rememberMe")),1)])),_:1},8,["modelValue"]),(0,a.Wm)(T,{to:"/users",class:"lg:hidden block"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("links.internal.users")),1)])),_:1})]),(0,a.Wm)(E,{type:"submit"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("form.buttons.continue")),1)])),_:1}),(0,a._)("p",k,[(0,a.Uk)((0,r.zw)(e.$t("phrases.noAccount"))+" ",1),(0,a.Wm)(T,{to:{name:"register"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("links.internal.joinUs")),1)])),_:1})]),(0,a._)("div",b,[(0,a._)("div",v,[(0,a.Wm)(T,{to:"https://github.com/FedotovN"},{default:(0,a.w5)((()=>[_,(0,a.Uk)(" Github")])),_:1}),$,(0,a.Wm)(T,{to:"https://t.me/FedotovN1"},{default:(0,a.w5)((()=>[U,(0,a.Uk)(" Telegram")])),_:1}),W,(0,a.Wm)(T,{to:"https://vk.com/fedotovn1"},{default:(0,a.w5)((()=>[z,(0,a.Uk)(" VK")])),_:1})]),Z.user?((0,a.wg)(),(0,a.j4)(T,{key:0,to:{name:"main",params:{}},class:"text-xs overlfow-hidden whitespace-nowrap text-ellipsis"},{default:(0,a.w5)((()=>[(0,a.Uk)("Вы уже авторизованы")])),_:1})):(0,a.kq)("",!0)]),(0,a._)("div",C,[(0,a.Wm)(l.uT,{name:"appear"},{default:(0,a.w5)((()=>[S.message?((0,a.wg)(),(0,a.iD)("p",q,[(0,a.Uk)((0,r.zw)(e.$t(S.message))+" ",1),S.loading?((0,a.wg)(),(0,a.j4)(K,{key:0})):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])),_:1})])])])],32),(0,a._)("div",j,[(0,a._)("header",M,[(0,a._)("p",V,[(0,a.Uk)((0,r.zw)(e.$t("titles.users")),1),D])]),(0,a._)("main",I,[(0,a.Wm)(H,{forceListView:""})])])])}t(7658);var S=t(776),Z=t(8477),R=t(4219),P=t(7347),E=t(5420),G=t(65),T={name:"LoginPage",components:{UserList:P.Z,ColorThemeSwitcher:S.Z,LanguageSwitcher:Z.Z},data(){return{v$:(0,R.ZP)(),email:"",password:"",checkbox:!1,message:"",loading:!1}},validations(){return{email:{required:E.C1,email:E.Do},password:{required:E.C1}}},methods:{async signIn(){if(await this.v$.$validate()){this.loading=!0,this.message="form.operations.titles.login";try{await this.emailSignIn({email:this.email,password:this.password,toSaveUser:this.checkbox}),this.$route.query.redirect?this.$router.push({name:this.$route.query.redirect}):this.$router.push({name:"main",query:{message:"auth/logged-in"}})}catch(e){this.loading=!1,this.message="form.operations.messages."+e.code,console.warn(e)}this.loading=!1}},async signInWithGoogle(){this.loading=!0,this.message="form.operations.titles.login";try{await this.googleSignIn(),this.$route.query.redirect?this.$router.push({name:this.$route.query.redirect}):this.$router.push({name:"main",query:{message:"auth/logged-in"}})}catch(e){this.message="form.operations.messages."+e.code,console.warn(e)}this.loading=!1},...(0,G.nv)("auth",{googleSignIn:"signInWithGoogle",emailSignIn:"signInWithEmail"})},mounted(){this.$route.query.message&&this.$toast.show(this.$t("form.operations.messages."+this.$route.query.message))},computed:{user(){return this.$store.getters["auth/getUser"]}}},F=t(89);const K=(0,F.Z)(T,[["render",L]]);var H=K}}]);
//# sourceMappingURL=499.1afca982.js.map