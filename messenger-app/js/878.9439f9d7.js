"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[878],{8878:function(e,t,s){s.r(t),s.d(t,{default:function(){return L}});var a=s(3396),l=s(7139);const n={class:"flex h-full w-full bg-gradient-to-r from-primary-200 to-purple-200 bg-clip-text"};function c(e,t,s,c,r,o){const i=(0,a.up)("contacts-list"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(i,{class:(0,l.C_)({"hidden sm:block":e.chatOpened,"w-full sm:w-[300px]":!e.chatOpened})},null,8,["class"]),(0,a.Wm)(d,{class:(0,l.C_)({"hidden sm:block":!e.chatOpened,"sm:w-full":e.chatOpened})},null,8,["class"])])}const r={class:"flex flex-col gap-3 h-full bg-gray-200 dark:bg-gray-700 py-6 overflow-hidden w-full"},o={key:0,class:"flex flex-col flex-1 w-full overflow-x-hidden overflow-y-scroll scrollbar-hide"},i={key:1,class:"flex flex-col flex-1 w-full justify-center items-center gap-2 px-3 text-center"},d=(0,a._)("p",{class:"font-semibold text-gray-700 dark:text-gray-300"},"Чатов пока нет!",-1),u=(0,a._)("small",{class:"text-xs font-semibold text-gray-500 dark:text-gray-400"},"Чтобы начать, используйте функцию поиска внизу",-1),h=[d,u];function p(e,t,s,l,n,c){const d=(0,a.up)("base-search-input"),u=(0,a.up)("contact-item");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(d,{modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=t=>e.search=t),placeholder:"Поиск по контактам",loading:e.loading,class:"mx-2 hidden sm:block"},null,8,["modelValue","loading"]),e.users.length?((0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.users,(e=>((0,a.wg)(),(0,a.j4)(u,{key:e.uid,contact:e},null,8,["contact"])))),128))])):((0,a.wg)(),(0,a.iD)("div",i,h))])}var f=s(65),g=s(4806),m=s.n(g),w=s(5154);const x={class:"flex gap-2 items-center overflow-hidden"},y={class:"h-[2.5rem] w-[2.5rem] rounded-full bg-gray-300 overflow-hidden"},b=["src"],v={class:"flex-1 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-300 text-gray-700"};function k(e,t,s,n,c,r){return(0,a.wg)(),(0,a.iD)("div",{class:"cursor-pointer min-h-[3.25rem] flex items-center justify-between overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-600 px-2 transition-colors",onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[(0,a._)("div",x,[(0,a._)("div",y,[e.contact.photoURL?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.contact.photoURL,alt:"",class:"h-full w-full object-cover"},null,8,b)):(0,a.kq)("",!0)]),(0,a._)("p",v,(0,l.zw)(e.contact.name),1)])])}s(7658);var C=(0,a.aZ)({name:"ContactItem",props:{contact:{type:Object,required:!0}},methods:{onClick(){this.$router.push({name:"chat",params:{chatId:this.contact.uid}})}}}),_=s(89);const U=(0,_.Z)(C,[["render",k]]);var D=U,Z=(0,a.aZ)({name:"ContactsList",components:{BaseSearchInput:w.Z,ContactItem:D},data:()=>({search:"",debouncedQuery:null,loading:!1,users:[]}),watch:{search(e){this.debouncedQuery&&(this.debouncedQuery.cancel(),this.loading=!1),e.length?(this.debouncedQuery=m().debounce(this.searchUser,400),this.debouncedQuery(e),this.loading=!0):this.users=[]}},methods:{...(0,f.nv)("contacts",{getUser:"fetchUsersByName"}),async searchUser(e){this.users=await this.getUser({name:e}),this.loading=!1}}});const O=(0,_.Z)(Z,[["render",p]]);var j=O,I=(0,a.aZ)({components:{ContactsList:j},computed:{chatOpened(){return!!this.$route.params.chatId}}});const Q=(0,_.Z)(I,[["render",c]]);var L=Q}}]);
//# sourceMappingURL=878.9439f9d7.js.map