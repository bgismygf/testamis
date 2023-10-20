"use strict";(self["webpackChunkamis"]=self["webpackChunkamis"]||[]).push([[852],{6852:function(e,a,t){t.r(a),t.d(a,{default:function(){return D}});t(7658);var n=t(3396),l=t(9242),s=t(7139),o=t(4870),i=t(2166);const c={class:"container"},u=(0,n._)("h3",{class:"mb-5"},"子療程管理",-1),d=(0,n._)("h4",{class:"mb-2"},"維護子療程",-1),r={class:"d-flex justify-content-between mb-2"},m={class:"row g-3"},p=(0,n._)("div",{class:"col-auto"},[(0,n._)("label",{for:"inputSearch",class:"col-form-label"},"子療程名稱")],-1),b={class:"col-auto"},y={class:"col-auto"},v={class:"table"},_=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{scope:"col"},"子療程名稱"),(0,n._)("th",{class:"text-center",scope:"col"},"編輯")])],-1),f={class:"align-middle"},h={class:"text-center"},w={class:"btn-group",role:"group","aria-label":"Basic example"},C=["onClick"],g={class:"modal-dialog"},k={class:"modal-content"},A={class:"modal-header"},T={class:"modal-title",id:"exampleModalLabel"},S=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body px-1"},E={class:"row mb-3"},H=(0,n._)("label",{for:"name",class:"col-sm-3 col-form-label"},"子療程名稱 :",-1),B={class:"col-sm-9"},z={class:"modal-footer px-1"},$=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);var j={__name:"subCourseManagement",setup(e){const a=(0,n.f3)("alertMessage"),{updateMessage:t}=a,j=(0,n.f3)("fetchFunction"),{fetchApi:G,getTokenFromCookie:D}=j,M=(0,o.iH)(null);let q;const N=(0,o.iH)({employeeData:[],deleteitem:"",departmentId:"",roleData:[],isAddEmployee:!0}),O=async()=>{let e;if(e=N.value.isAddEmployee?await P():await J(),e.statusCode>=400)return t(e.message),null;t(e.message),L(),q.hide()},U=(0,o.iH)({}),F=(0,o.iH)([]),I=async(e,a)=>{N.value.isAddEmployee=e;const t=[];if(K.value.forEach((e=>{t.push({id:e.id,point:null,name:e.name})})),F.value=t,N.value.isAddEmployee)V();else{const e=await Y(a.id),{id:t,name:n,sequence:l,active:s}=e;U.value={id:t,name:n,sequence:l,active:s}}q.show()},J=async()=>{const e={...U.value},a="/api/Subcourse/Update",t=D(),n={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},method:"PATCH",body:JSON.stringify(e)};return await G(a,n)},P=async()=>{const e={name:U.value.name,active:!0},a="/api/Subcourse/Create",t=D(),n={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},method:"POST",body:JSON.stringify(e)};return await G(a,n)};function V(){U.value={id:null,name:null,sequence:0,active:!0}}async function Y(e){const a=`/api/Subcourse/GetById?id=${e}`,t=D(),n={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},method:"GET"},l=await G(a,n);return l.data}const K=(0,o.iH)([]);async function L(){const e="/api/Subcourse/GetAll",a=D(),t={headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},method:"GET"},n=await G(e,t);K.value=n.data}const R=(0,o.iH)(null);async function Q(){const e=`/api/Subcourse/GetByName?name=${R.value}`,a=D(),t={headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},method:"GET"},n=await G(e,t);K.value=n.data}async function W(){await L()}return W(),(0,n.bv)((()=>{q=new i.u_(M.value)})),(e,a)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",c,[u,d,(0,n._)("div",r,[(0,n._)("div",m,[p,(0,n._)("div",b,[(0,n.wy)((0,n._)("input",{type:"text",id:"inputSearch",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=e=>R.value=e)},null,512),[[l.nr,R.value]])]),(0,n._)("div",y,[(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:a[1]||(a[1]=e=>Q())},"搜尋"),(0,n._)("button",{type:"button",class:"btn btn-primary ms-2",onClick:a[2]||(a[2]=e=>{L(),R.value=null})},"重置")])]),(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:a[3]||(a[3]=e=>I(!0))},"新增子療程")]),(0,n._)("table",v,[_,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(K.value,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",f,(0,s.zw)(e.name),1),(0,n._)("td",h,[(0,n._)("div",w,[(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:a=>I(!1,e)},"編輯",8,C)])])])))),128))])])]),(0,n._)("div",{class:"modal fade",ref_key:"modalRef",ref:M},[(0,n._)("div",g,[(0,n._)("div",k,[(0,n._)("div",A,[(0,n._)("h5",T,(0,s.zw)(N.value.isAddEmployee?"新增":"編輯")+"子療程名稱",1),S]),(0,n._)("div",x,[(0,n._)("form",null,[(0,n._)("div",E,[H,(0,n._)("div",B,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":a[4]||(a[4]=e=>U.value.name=e)},null,512),[[l.nr,U.value.name]])])])])]),(0,n._)("div",z,[$,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:a[5]||(a[5]=e=>O())},"確定")])])])],512)],64))}};const G=j;var D=G}}]);
//# sourceMappingURL=852.9518d76c.js.map