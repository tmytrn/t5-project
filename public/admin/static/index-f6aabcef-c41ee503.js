import{s as x,az as _,p as g,P as w,ct as B,j as a,aj as L,cs as O,af as T,aN as S,ak as z,i as A,a6 as D,a3 as W}from"./sanity-3d41fa66.js";import{P as C}from"./PaneItem-b5c961b0-308aa343.js";import{useDeskTool as G}from"./index-98d70598-f71fa83e.js";import"./index-1b52cd40.js";var r;function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const E=x.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function U(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=n,{features:h}=G(),{collapsed:m}=_(),{defaultLayout:y,displayOptions:i,items:c,menuItems:v,menuItemGroups:I,title:b}=u,P=i==null?void 0:i.showIcons,k=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return g(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:z,mode:"bleed"}),title:b}),a(A,{overflow:m?void 0:"auto",children:a(D,{padding:2,space:1,children:c&&c.map((e,o)=>{if(e.type==="divider")return a(W,{paddingY:1,children:a(E,{})},"divider-".concat(o));const s=!d&&t===e.id,j=d&&t===e.id;return a(C,{icon:k(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:j,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{U as default};
