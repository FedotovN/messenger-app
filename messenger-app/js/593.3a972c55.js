"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[593],{2593:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var l=a(3396),s=a(7139);const r={class:"flex h-full w-full bg-gradient-to-r from-primary-200 to-purple-200 bg-clip-text"};function i(e,t,a,i,n,o){const d=(0,l.up)("contacts-list"),c=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(d,{class:(0,s.C_)(["h-full md:min-w-[300px] sm:min-w-[210px] md:max-w-[300px]",{"hidden sm:flex":e.chatOpened,"w-full":!e.chatOpened}])},null,8,["class"]),e.getUser?((0,l.wg)(),(0,l.j4)(c,{key:0,class:(0,s.C_)(["h-full",{"hidden sm:block":!e.chatOpened,"sm:w-full overflow-hidden":e.chatOpened}])},null,8,["class"])):(0,l.kq)("",!0)])}var n=a(65);const o={class:"flex flex-col gap-3 h-full bg-gray-200 dark:bg-gray-700 py-6 overflow-hidden w-[300px]"},d={class:"flex justify-between items-center"},c={key:0,class:"flex flex-col flex-1 w-full overflow-x-hidden overflow-y-scroll scrollbar-hide"},u={key:1,class:"flex-1 items-center px-3 text-center"},h={key:0,class:"h-full flex flex-col w-full justify-center items-center gap-4"},g={key:1,class:"h-full flex flex-col w-full justify-center gap-2"},f=(0,l._)("p",{class:"font-semibold text-gray-700 dark:text-gray-300"},"Чатов пока нет!",-1),p=(0,l._)("small",{class:"text-xs font-semibold text-gray-500 dark:text-gray-400"},"Чтобы начать, используйте функцию поиска внизу",-1),m=[f,p],y={key:2,class:"h-full flex flex-col w-full justify-center items-center gap-4"},w={class:"text-xs font-semibold text-gray-500 dark:text-gray-400"},x={key:3,class:"h-full flex flex-col w-full justify-center gap-2"},v=(0,l._)("p",{class:"font-semibold text-gray-700 dark:text-gray-300"},"Тут никого :(",-1),b=(0,l._)("small",{class:"text-xs font-semibold text-gray-500 dark:text-gray-400"},"Пользователя с поможим именем не найдено",-1),k=[v,b];function _(e,t,a,r,i,n){const f=(0,l.up)("base-search-input"),p=(0,l.up)("contact-item"),v=(0,l.up)("base-loader");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("header",d,[(0,l.Wm)(f,{modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=t=>e.search=t),placeholder:"Поиск по контактам",loading:e.loading,class:"mx-2 w-full"},null,8,["modelValue","loading"])]),e.users.length&&!e.loading?((0,l.wg)(),(0,l.iD)("div",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.users,(e=>((0,l.wg)(),(0,l.j4)(p,{key:e.uid,contact:e},null,8,["contact"])))),128))])):((0,l.wg)(),(0,l.iD)("div",u,[e.contactsFetching?((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Wm)(v,{size:"medium"})])):e.search||e.loading?e.loading?((0,l.wg)(),(0,l.iD)("div",y,[(0,l.Wm)(v,{size:"medium"}),(0,l._)("small",w,'Ищем пользователя с именем "'+(0,s.zw)(e.search)+'"',1)])):e.search&&!e.loading?((0,l.wg)(),(0,l.iD)("div",x,k)):(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",g,m))]))])}var C=a(4806),q=a.n(C);const j={class:"overflow-hidden"},D=["value","name","id","type","autocomplete","disabled","placeholder"],I={class:"w-3"},S={key:0,class:"text-red-600 dark:text-rose-400 overflow-hidden text-elipsis"};function U(e,t,a,r,i,n){const o=(0,l.up)("base-loader");return(0,l.wg)(),(0,l.iD)("div",j,[(0,l._)("div",{class:(0,s.C_)(["border-gray-300 dark:border-gray-500 bg-gray-100 pl-3 pr-2 flex gap-1 items-center dark:focus:border-primary-100 focus:border-primary-200 transition-colors dark:bg-gray-600 dark:text-gray-300 rounded-full border overflow-hidden",{"border-primary-300 dark:border-primary-100":e.isActive}])},[(0,l._)("i",{class:(0,s.C_)(["fa-solid fa-search text-sm w-5 m-0 p-0",{"text-primary-300 dark:text-primary-100":e.isActive}])},null,2),(0,l._)("input",{value:e.modelValue||e.value,name:e.id,id:e.id,type:e.type,autocomplete:e.autocomplete,disabled:e.disabled,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...t)=>e.updateInput&&e.updateInput(...t)),onFocusin:t[1]||(t[1]=t=>e.isActive=!0),onFocusout:t[2]||(t[2]=t=>e.isActive=!1),class:"w-full h-10 text-md outline-none dark:bg-gray-600 bg-gray-100 shadow-none"},null,40,D),(0,l._)("div",I,[this.loading?((0,l.wg)(),(0,l.j4)(o,{key:0,size:"tiny"})):(0,l.kq)("",!0)])],2),e.errorMessage?((0,l.wg)(),(0,l.iD)("small",S,(0,s.zw)(e.errorMessage),1)):(0,l.kq)("",!0)])}var Z=(0,l.aZ)({name:"BaseSearchInput",props:{value:{type:String,required:!1,default:""},modelValue:{type:String,required:!1,default:""},label:{type:String,required:!1},type:{type:String,required:!1,default:"text"},errorMessage:{type:String,required:!1,default:""},autocomplete:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1},placeholder:{type:String,required:!1,default:""},loading:{type:Boolean,required:!1,default:!1}},data(){return{isActive:!1,id:null}},created(){this.id="input-"+Math.random()},methods:{activateInput(){this.isActive=!0},updateInput(e){this.$emit("update:modelValue",e.target.value)}},watch:{modelValue(){this.isActive=!0}}}),z=a(89);const A=(0,z.Z)(Z,[["render",U]]);var V=A;const F={class:"flex gap-3 items-center overflow-hidden w-full"},O={class:"min-h-[2.5rem] min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-gray-300 overflow-hidden"},B=["src"],Q={class:"flex flex-col overflow-hidden w-full"},L={class:"w-full flex overflow-hidden justify-between items-center"},M={class:"flex-1 text-md font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-300 text-gray-700"},W=(0,l._)("div",{class:"h-2 w-2 bg-green-300 rounded-full"},null,-1),$=(0,l._)("div",{class:"h-2 w-2 bg-red-300 rounded-full"},null,-1),R=(0,l._)("div",{class:"h-2 w-2 dark:bg-gray-500 bg-gray-400 rounded-full"},null,-1),H={class:"w-full flex overflow-hidden justify-between"},K={class:"flex-1 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-500 text-gray-500"},N=(0,l._)("small",{class:"pl-1 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-400 text-gray-600"},"12:30",-1);function Y(e,t,a,r,i,n){return(0,l.wg)(),(0,l.iD)("div",{class:(0,s.C_)(["cursor-pointer min-h-[3.5rem] flex items-center justify-between overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-600 px-2 transition-colors",{"bg-gray-300 dark:bg-gray-600":e.$route.params.chatId===e.contact.uid}]),onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[(0,l._)("div",F,[(0,l._)("div",O,[e.contact.photoURL?((0,l.wg)(),(0,l.iD)("img",{key:0,src:e.contact.photoURL,alt:"",class:"h-full w-full object-cover"},null,8,B)):(0,l.kq)("",!0)]),(0,l._)("div",Q,[(0,l._)("div",L,[(0,l._)("p",M,(0,s.zw)(e.contact.name),1),W,$,R]),(0,l._)("div",H,[(0,l._)("small",K,(0,s.zw)(e.contact.name)+" 111111111111111111111111111111111111111111",1),N])])])],2)}a(7658);var E=(0,l.aZ)({name:"ContactItem",props:{contact:{type:Object,required:!0}},methods:{onClick(){this.$router.push({name:"chat",params:{chatId:this.contact.uid}})}}});const G=(0,z.Z)(E,[["render",Y]]);var J=G,P=(0,l.aZ)({name:"ContactsList",components:{BaseSearchInput:V,ContactItem:J},data:()=>({search:"",debouncedQuery:null,loading:!1,contactsFetching:!1,users:[]}),async created(){this.contactsFetching=!0,await this.fetchContacts(),this.users=this.getContacts||[],this.contactsFetching=!1},watch:{search(e){this.debouncedQuery&&(this.debouncedQuery.cancel(),this.loading=!1),e.length?(this.debouncedQuery=q().debounce(this.searchUser,400),this.debouncedQuery(e),this.loading=!0):this.users=this.getContacts||[]}},methods:{...(0,n.nv)("contacts",{getUser:"fetchUsersByName",fetchContacts:"fetchCurrentUserContacts"}),async searchUser(e){this.users=await this.getUser({name:e}),this.loading=!1}},computed:{...(0,n.Se)("contacts",["getContacts"])}});const T=(0,z.Z)(P,[["render",_]]);var X=T,ee=(0,l.aZ)({components:{ContactsList:X},computed:{chatOpened(){return!!this.$route.params.chatId},...(0,n.Se)("auth",["getUser"])}});const te=(0,z.Z)(ee,[["render",i]]);var ae=te}}]);
//# sourceMappingURL=593.3a972c55.js.map