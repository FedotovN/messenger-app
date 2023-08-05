"use strict";(self["webpackChunkmessenger_app"]=self["webpackChunkmessenger_app"]||[]).push([[493],{493:function(e,t,s){s.r(t),s.d(t,{default:function(){return we}});var a=s(3396),l=s(7139);const r={class:"flex h-full w-full bg-gradient-to-r from-primary-200 to-purple-200 bg-clip-text"};function o(e,t,s,o,n,i){const c=(0,a.up)("contacts-list"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(c,{class:(0,l.C_)(["h-full md:min-w-[300px] sm:min-w-[210px] md:max-w-[300px]",{"hidden sm:flex":e.chatOpened,"w-full":!e.chatOpened}])},null,8,["class"]),e.getUser?((0,a.wg)(),(0,a.j4)(d,{key:0,class:(0,l.C_)(["h-full",{"hidden sm:block":!e.chatOpened,"sm:w-full overflow-hidden":e.chatOpened}])},null,8,["class"])):(0,a.kq)("",!0)])}var n=s(65);const i={class:"flex flex-col gap-[calc(3*0.25rem_-_2px)] h-full bg-gray-200 dark:bg-gray-700 py-3 overflow-hidden w-[300px]"},c={class:"flex justify-between items-center"},d={key:0,class:"flex flex-col flex-1 overflow-x-hidden overflow-y-scroll scrollbar-hide"},u={key:0,class:"flex flex-col w-full"},g={class:"flex flex-col"},h=(0,a._)("small",{class:"pb-2 px-2 font-semibold text-gray-500"},"Контакты",-1),p={class:"flex flex-col"},f={key:1,class:"flex flex-col w-full"},m={class:"flex flex-col"},x=(0,a._)("small",{class:"p-2 font-semibold text-gray-500"},"Поиск",-1),y={class:"flex flex-col"},w={key:1,class:"flex-1 items-center px-3 text-center"},v={key:0,class:"h-full flex flex-col w-full justify-center gap-2"},b=(0,a._)("p",{class:"font-semibold text-gray-700 dark:text-gray-300"},"Чатов пока нет!",-1),k=(0,a._)("small",{class:"text-xs font-semibold text-gray-500 dark:text-gray-400"},"Чтобы начать, используйте функцию поиска внизу",-1),_=[b,k],C={key:1,class:"h-full flex flex-col w-full justify-center items-center gap-4"},D={class:"text-xs font-semibold text-gray-500 dark:text-gray-400"},M={key:2,class:"h-full flex flex-col w-full justify-center gap-2"},q=(0,a._)("p",{class:"font-semibold text-gray-700 dark:text-gray-300"},"Тут никого :(",-1),S=(0,a._)("small",{class:"text-xs font-semibold text-gray-500 dark:text-gray-400"},"Пользователя с поможим именем не найдено",-1),U=[q,S],j={key:2,class:"h-full flex flex-col w-full justify-center items-center gap-4"},I=(0,a._)("p",{class:"text-xs text-center font-semibold text-gray-700 dark:text-gray-300"},[(0,a.Uk)("Очень старательно загружаемся, "),(0,a._)("br"),(0,a.Uk)(" чтобы потом "),(0,a._)("strong",null,"быстрее ⚡"),(0,a.Uk)(" работать!")],-1);function z(e,t,s,r,o,n){const b=(0,a.up)("base-search-input"),k=(0,a.up)("contact-item"),q=(0,a.up)("base-loader");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("header",c,[(0,a.Wm)(b,{modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=t=>e.search=t),placeholder:"Поиск пользователей",loading:e.loading,class:"mx-2 w-full"},null,8,["modelValue","loading"])]),!e.contacts.length&&!e.users.length||e.loading||e.contactsFetching?e.contactsFetching?((0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(q,{size:"medium"}),I])):((0,a.wg)(),(0,a.iD)("div",w,[e.search||e.loading?e.loading?((0,a.wg)(),(0,a.iD)("div",C,[(0,a.Wm)(q,{size:"medium"}),(0,a._)("small",D,'Ищем пользователя с именем "'+(0,l.zw)(e.search)+'"',1)])):e.search&&!e.loading?((0,a.wg)(),(0,a.iD)("div",M,U)):(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",v,_))])):((0,a.wg)(),(0,a.iD)("div",d,[e.contacts.length?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",g,[h,(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.contacts,(e=>((0,a.wg)(),(0,a.j4)(k,{key:e.uid,contact:e},null,8,["contact"])))),128))])])])):(0,a.kq)("",!0),e.users.length?((0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",m,[x,(0,a._)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.users,(e=>((0,a.wg)(),(0,a.j4)(k,{key:e.uid,contact:e},null,8,["contact"])))),128))])])])):(0,a.kq)("",!0)]))])}var A=s(4806),Z=s.n(A);const $={class:"overflow-hidden"},F=["value","name","id","type","autocomplete","disabled","placeholder"],L={class:"w-3"},V={key:0,class:"text-red-600 dark:text-rose-400 overflow-hidden text-elipsis"};function B(e,t,s,r,o,n){const i=(0,a.up)("base-loader");return(0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",{class:(0,l.C_)(["border-gray-300 dark:border-gray-500 bg-gray-100 pl-3 pr-2 flex gap-1 items-center dark:focus:border-primary-100 focus:border-primary-200 transition-colors dark:bg-gray-600 dark:text-gray-300 rounded-full border overflow-hidden",{"border-primary-300 dark:border-primary-100":e.isActive}])},[(0,a._)("i",{class:(0,l.C_)(["fa-solid fa-search text-sm w-5 m-0 p-0",{"text-primary-300 dark:text-primary-100":e.isActive}])},null,2),(0,a._)("input",{value:e.modelValue||e.value,name:e.id,id:e.id,type:e.type,autocomplete:e.autocomplete,disabled:e.disabled,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...t)=>e.updateInput&&e.updateInput(...t)),onFocusin:t[1]||(t[1]=t=>e.isActive=!0),onFocusout:t[2]||(t[2]=t=>e.isActive=!1),class:"w-full h-8 text-sm outline-none dark:bg-gray-600 bg-gray-100 shadow-none"},null,40,F),(0,a._)("div",L,[this.loading?((0,a.wg)(),(0,a.j4)(i,{key:0,size:"tiny"})):(0,a.kq)("",!0)])],2),e.errorMessage?((0,a.wg)(),(0,a.iD)("small",V,(0,l.zw)(e.errorMessage),1)):(0,a.kq)("",!0)])}var O=(0,a.aZ)({name:"BaseSearchInput",props:{value:{type:String,required:!1,default:""},modelValue:{type:String,required:!1,default:""},label:{type:String,required:!1},type:{type:String,required:!1,default:"text"},errorMessage:{type:String,required:!1,default:""},autocomplete:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1},placeholder:{type:String,required:!1,default:""},loading:{type:Boolean,required:!1,default:!1}},data(){return{isActive:!1,id:null}},created(){this.id="input-"+Math.random()},methods:{activateInput(){this.isActive=!0},updateInput(e){this.$emit("update:modelValue",e.target.value)}},watch:{modelValue(){this.isActive=!0}}}),Q=s(89);const R=(0,Q.Z)(O,[["render",B]]);var W=R,H=s(9242);const K={class:"flex gap-3 items-center overflow-hidden w-full"},N={class:"min-h-[2.5rem] min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-gray-300 overflow-hidden"},T=["src"],Y={class:"flex flex-col overflow-hidden w-full"},E={class:"w-full flex overflow-hidden justify-between items-center"},G={class:"flex w-full flex-col overflow-hidden"},J={class:"flex-1 text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-300 text-gray-700"},P={key:0,class:"flex w-full justify-between overflow-hidden text-sm whitespace-nowrap"},X={class:"overflow-hidden whitespace-nowrap text-ellipsis dark:text-gray-400 text-gray-600 font-semibold flex-1 pr-2"},ee={class:"dark:text-gray-300 text-gray-700"},te={key:0},se={key:1},ae={key:2,class:"text-green-300"},le={class:"text-end inline-block overflow-hidden whitespace-nowrap text-ellipsis dark:text-gray-400 text-gray-600 font-semibold"},re={class:"relative h-[2rem] bg-red-400"},oe={key:0,class:"flex items-center justify-center text-xs h-[1rem] min-w-[1rem] p-1 rounded-full bg-green-300 text-gray-700 font-bold absolute right-0 top-0 group-hover:opacity-0 transition-opacity"},ne=(0,a._)("i",{class:"fa-solid fa-bars"},null,-1),ie=[ne];function ce(e,t,s,r,o,n){const i=(0,a.Q2)("tooltip");return(0,a.wg)(),(0,a.iD)("div",{class:(0,l.C_)(["cursor-pointer min-h-[3.5rem] flex items-center justify-between overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-600 px-2 transition-colors group",{"bg-gray-300 dark:bg-gray-600":e.$route.params.chatId===e.contact.uid}]),onClick:t[1]||(t[1]=(...t)=>e.onClick&&e.onClick(...t))},[(0,a._)("div",K,[(0,a._)("div",N,[e.contact.photoURL?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.contact.photoURL,alt:"",class:"h-full w-full object-cover"},null,8,T)):(0,a.kq)("",!0)]),(0,a._)("div",Y,[(0,a._)("div",E,[(0,a._)("div",G,[(0,a._)("p",J,(0,l.zw)(e.contact.name),1),e.lastMessage?((0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("small",X,[(0,a._)("span",ee,(0,l.zw)(e.lastMessage?.sended_by_name)+": ",1),e.lastMessage?.pinnedImages?.length?e.lastMessage.text?((0,a.wg)(),(0,a.iD)("span",se,"🖼️: "+(0,l.zw)(e.lastMessage.text),1)):((0,a.wg)(),(0,a.iD)("span",ae,"Картинк"+(0,l.zw)(e.lastMessage.pinnedImages.length>1?"и":"a")+" 🖼️",1)):((0,a.wg)(),(0,a.iD)("span",te,(0,l.zw)(e.lastMessage.text),1))]),(0,a._)("small",le,(0,l.zw)(e.lastMessage?.created_at?e.getTimeFromDate(e.lastMessage.created_at):""),1)])):(0,a.kq)("",!0)]),(0,a._)("div",re,[e.unreadMessages?((0,a.wg)(),(0,a.iD)("div",oe,(0,l.zw)(e.unreadMessages),1)):(0,a.kq)("",!0),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{onClick:t[0]||(t[0]=(0,H.iM)((()=>{}),["stop"])),class:"flex items-center justify-center sm:text-sm text-xl h-[1rem] min-w-[1rem] p-1 text-gray-700 dark:text-gray-300 font-bold absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-gray-800 hover:dark:text-gray-200"},ie)),[[i,"Настройки чата"]])])])])])],2)}s(7658);var de=s(1727),ue=(0,a.aZ)({name:"ContactItem",data:()=>({firstUpload:!0}),props:{contact:{type:Object,required:!0}},methods:{getTimeFromDate:de.D,...(0,n.nv)("room",["setChatListenerByRoomHash"]),onClick(){this.$router.push({name:"chat",params:{chatId:this.contact.uid}})}},computed:{uid(){return this.$store.getters["auth/getUser"]?.uid},chatId(){return this.$route.params.chatId},lastMessage(){const e=this.$store.getters["room/getLastRoomMessage"](this.contact.room_hash);return e},unreadMessages(){return this.$store.getters["room/getUnreadMessagesAmount"](this.contact.room_hash,this.uid)}}});const ge=(0,Q.Z)(ue,[["render",ce]]);var he=ge,pe=(0,a.aZ)({name:"ContactsList",components:{BaseSearchInput:W,ContactItem:he},data:()=>({search:"",debouncedQuery:null,loading:!1,contactsFetching:!1,contactsListener:null,contacts:[],users:[]}),async created(){this.contacts=await this.getSortedContacts()||[]},watch:{async search(e){if(this.debouncedQuery&&(this.debouncedQuery.cancel(),this.loading=!1),!e.length)return this.contacts=await this.getSortedContacts()||[],void(this.users=[]);this.searchContact(e),this.debouncedQuery=Z().debounce(this.searchUser,400),this.debouncedQuery(e),this.loading=!0},getAllMessages:{async handler(){this.search.length||(this.contacts=await this.getSortedContacts())},deep:!0}},methods:{...(0,n.nv)("contacts",{getUser:"fetchUsersByName",getSortedContacts:"getSortedContacts"}),searchContact(e){this.contacts=this.getContact(e)},async searchUser(e){this.users=await this.getUser({name:e}),this.loading=!1}},computed:{...(0,n.Se)("auth",{currUser:"getUser"}),...(0,n.Se)("contacts",{getContact:"getContact"}),contactsNames(){return this.getContacts.map((e=>e.name))},...(0,n.Se)("room",{getAllMessages:"getAllMessages"})}});const fe=(0,Q.Z)(pe,[["render",z]]);var me=fe,xe=(0,a.aZ)({components:{ContactsList:me},computed:{chatOpened(){return!!this.$route.params.chatId},...(0,n.Se)("auth",["getUser"])}});const ye=(0,Q.Z)(xe,[["render",o]]);var we=ye}}]);
//# sourceMappingURL=493.39c69178.js.map