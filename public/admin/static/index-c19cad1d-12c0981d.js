import{s as h,a3 as j,r as l,p as d,P as x,j as o,b_ as k,aj as v,cs as H,af as I,aN as B,ak as E,b1 as y}from"./sanity-3d41fa66.js";import{useDeskTool as C}from"./index-98d70598-f71fa83e.js";import"./index-1b52cd40.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(v,{actions:o(H,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(I,{as:B,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const g=h(j)(u||(u=O([`
  position: relative;
`])));function L(t){const{children:e}=t,{collapsed:s}=y();return o(g,{hidden:s,height:"fill",overflow:"auto",children:e})}function G(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:T,...P}=s,[c,b]=l.useState(null);return d(x,{id:n,minWidth:320,selected:r.isSelected,children:[o(_,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(L,{children:[k.isValidElementType(a)&&l.createElement(a,{...r,...P,ref:b,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{G as default};
