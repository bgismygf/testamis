"use strict";(self["webpackChunkamis"]=self["webpackChunkamis"]||[]).push([[440],{7440:function(a,e,t){t.r(e),t.d(e,{default:function(){return Z}});t(7658);var l=t(3396),i=t(4870),s=t(7139),n=t(9242),o=t(2166);const c={class:"container"},u=(0,l._)("h3",{class:"mb-5"},"設定美容師助理",-1),d=(0,l._)("h4",{class:"mb-2"},"美容師查詢",-1),r={class:"d-flex justify-content-between mb-2"},m={class:"row g-3"},b=(0,l._)("div",{class:"col-auto"},[(0,l._)("label",{for:"inputSearch",class:"col-form-label"},"專屬美容師")],-1),p={class:"col-auto"},v=(0,l._)("option",{value:null,selected:""},null,-1),_=["value"],y={class:"col-auto"},f={class:"table"},h=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"美容師"),(0,l._)("th",{scope:"col"},"美容師助理"),(0,l._)("th",{class:"text-center",scope:"col"},"編輯")])],-1),w={class:"align-middle"},g={class:"align-middle"},A={class:"text-center"},k={class:"btn-group",role:"group","aria-label":"Basic example"},C=["onClick"],B={class:"modal-dialog"},z={class:"modal-content"},H={class:"modal-header"},D={class:"modal-title",id:"exampleModalLabel"},T=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body px-1"},x={class:"row mb-3"},E=(0,l._)("label",{for:"name",class:"col-sm-3 col-form-label"},"專屬美容師 :",-1),U={class:"col-sm-9"},N=(0,l._)("option",{value:null,hidden:"",selected:""},null,-1),j=["value"],M={class:"row mb-3"},$=(0,l._)("label",{for:"name",class:"col-sm-3 col-form-label"},"助理 :",-1),R={class:"col-sm-9"},G=(0,l._)("option",{value:null,hidden:"",selected:""},null,-1),K=["value"],O={class:"modal-footer px-1"},Y=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),I={class:"modal-dialog"},J={class:"modal-content"},P=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"刪除員工資料"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},q={class:"text-danger"},F={class:"text-danger"},L={class:"modal-footer"},W=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);var Q={__name:"beauticianRelation",setup(a){const e=(0,l.f3)("alertMessage"),{updateMessage:t}=e,Q=(0,l.f3)("fetchFunction"),{fetchApi:X,getTokenFromCookie:Z}=Q,aa=(0,i.iH)(null),ea=(0,i.iH)(null);let ta,la;(0,l.bv)((()=>{ta=new o.u_(ea.value)}));const ia=(0,i.iH)({employeeData:[],deleteitem:{},departmentId:"",roleData:[],isAddEmployee:!0}),sa=(0,l.f3)("Employee"),{employeeState:na,getBeauticianAAByActiveStatus:oa,getBeauticians:ca}=sa,{beauticianAAData:ua,beauticiansData:da}=(0,i.BK)(na),ra=a=>{ia.value.deleteitem=Object.assign({},a),ta.show()},ma=async()=>{let a;if(a=ia.value.isAddEmployee?await ya():await _a(),a.statusCode>=400)return t(a.message),null;t(a.message),Aa(),la.hide()},ba=(0,i.iH)({}),pa=(0,i.iH)([]),va=async(a,e)=>{ia.value.isAddEmployee=a;const t=[];if(ga.value.forEach((a=>{t.push({id:a.id,point:null,name:a.name})})),pa.value=t,ia.value.isAddEmployee)ha();else{const a=await wa(e.id),{id:t,name:l,sequence:i,active:s}=a;ba.value={id:t,name:l,sequence:i,active:s}}la.show()},_a=async()=>{const a={...ba.value},e="/api/Subcourse/Update",t=Z(),l={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},method:"PATCH",body:JSON.stringify(a)};return await X(e,l)},ya=async()=>{const a={...ba.value},e="/api/BeauticianRelation",t=Z(),l={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},method:"POST",body:JSON.stringify(a)};return await X(e,l)};async function fa(){const a="/api/BeauticianRelation",e=Z(),l={beautician:ia.value.deleteitem.beautician,beauticianAssistant:ia.value.deleteitem.beauticianAssistant},i={headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},method:"PATCH",body:JSON.stringify(l)},s=await X(a,i);if(t(s.message),s.statusCode>=400)return null;Aa(),ta.hide()}function ha(){ba.value={beautician:null,beauticianAssistant:null}}async function wa(a){const e=`/api/Subcourse/GetById?id=${a}`,t=Z(),l={headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},method:"GET"},i=await X(e,l);return i.data}const ga=(0,i.iH)([]);async function Aa(){const a="/api/BeauticianRelation/GetAllWithName",e=Z(),t={headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},method:"GET"},l=await X(a,t);ga.value=l.data}const ka=(0,i.iH)(null);async function Ca(){if(!ka.value)return Aa(),null;const a=`/api/BeauticianRelation/GetByBeauticianWithName?beauticianId=${ka.value}`,e=Z(),t={headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},method:"GET"},l=await X(a,t);ga.value=l.data}async function Ba(){await Aa(),await oa(),await ca()}return Ba(),(0,l.bv)((()=>{la=new o.u_(aa.value)})),(a,e)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",c,[u,d,(0,l._)("div",r,[(0,l._)("div",m,[b,(0,l._)("div",p,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":e[0]||(e[0]=a=>ka.value=a)},[v,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,i.SU)(ua),(a=>((0,l.wg)(),(0,l.iD)("option",{value:a.id,key:a.id},(0,s.zw)(a.name),9,_)))),128))],512),[[n.bM,ka.value]])]),(0,l._)("div",y,[(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=a=>Ca())},"搜尋")])]),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=a=>va(!0))},"新增")]),(0,l._)("table",f,[h,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(ga.value,(a=>((0,l.wg)(),(0,l.iD)("tr",{key:a},[(0,l._)("td",w,(0,s.zw)(a.beauticianName),1),(0,l._)("td",g,(0,s.zw)(a.beauticianAssistantName),1),(0,l._)("td",A,[(0,l._)("div",k,[(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:e=>ra(a)},"刪除",8,C)])])])))),128))])])]),(0,l._)("div",{class:"modal fade",ref_key:"modalRef",ref:aa},[(0,l._)("div",B,[(0,l._)("div",z,[(0,l._)("div",H,[(0,l._)("h5",D,(0,s.zw)(ia.value.isAddEmployee?"新增":"編輯")+"美容師助理",1),T]),(0,l._)("div",S,[(0,l._)("form",null,[(0,l._)("div",x,[E,(0,l._)("div",U,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":e[3]||(e[3]=a=>ba.value.beautician=a)},[N,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,i.SU)(ua),(a=>((0,l.wg)(),(0,l.iD)("option",{value:a.id,key:a.id},(0,s.zw)(a.name),9,j)))),128))],512),[[n.bM,ba.value.beautician]])])]),(0,l._)("div",M,[$,(0,l._)("div",R,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":e[4]||(e[4]=a=>ba.value.beauticianAssistant=a)},[G,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,i.SU)(da),(a=>((0,l.wg)(),(0,l.iD)("option",{value:a.id,key:a.id},(0,s.zw)(a.name),9,K)))),128))],512),[[n.bM,ba.value.beauticianAssistant]])])])])]),(0,l._)("div",O,[Y,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=a=>ma())},"確定")])])])],512),(0,l._)("div",{class:"modal fade",ref_key:"deleteModalRef",ref:ea},[(0,l._)("div",I,[(0,l._)("div",J,[P,(0,l._)("div",V,[(0,l.Uk)(" 確認要刪除 "),(0,l._)("span",q,"美容師 "+(0,s.zw)(ia.value.deleteitem.beauticianName),1),(0,l.Uk)(" 和 "),(0,l._)("span",F,"美容師助理 "+(0,s.zw)(ia.value.deleteitem.beauticianAssistantName),1),(0,l.Uk)(" 設定 ")]),(0,l._)("div",L,[W,(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:e[6]||(e[6]=a=>fa())},"確定")])])])],512)],64))}};const X=Q;var Z=X}}]);
//# sourceMappingURL=440.bd30761e.js.map