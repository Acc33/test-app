"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{1041:function(e,t,r){var n=r(5893),i=r(7294);t.Z=function(e){var t=(0,i.useState)(!1),r=t[0],a=t[1],o=(0,i.useRef)(),s=e.color;return(0,n.jsxs)("div",{className:"collapsible",children:[(0,n.jsx)("button",{className:"toggle",style:{backgroundColor:s},onClick:function(){return a(!r)},children:e.label}),(0,n.jsx)("div",{className:"content-parent",ref:o,style:r?{height:o.current.scrollHeight+"px"}:{height:"0px"},children:(0,n.jsx)("div",{className:"content",children:e.children})})]})}},6587:function(e,t,r){r.d(t,{J:function(){return g}});var n=r(5893),i=r(7294),a=r(9521),o=(r(3158),[{Header:"First Name",Footer:"First Name",accessor:"first_name"},{Header:"Last Name",Footer:"Last Name",accessor:"last_name"},{Header:"Email",Footer:"Email",accessor:"email_addr"},{Header:"Gender",Footer:"Gender",accessor:"gender"},{Header:"Registration Date",Footer:"Registration Date",accessor:"created_date"}]);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.forwardRef((function(e,t){var r=e.indeterminate,a=c(e,["indeterminate"]),o=i.useRef(),s=t||o;return i.useEffect((function(){s.current.indeterminate=r}),[s,r]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("input",l({type:"checkbox",ref:s},a))})})),d=function(e){var t=e.filter,r=e.setFilter;return(0,n.jsxs)("span",{children:["Search Participants: "," ",(0,n.jsx)("input",{value:t||"",onChange:function(e){return r(e.target.value)}})]})},f=r(1163);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}var g=function(e){console.log(e);var t=e.patients.patients;t.map((function(e){e.created_date=e.created_date.slice(0,10)}));var r=t,s=(0,i.useMemo)((function(){return o}),[]),l=(0,i.useMemo)((function(){return r}),[]),c=(0,f.useRouter)(),p=(0,a.useTable)({columns:s,data:l,initialState:{pageIndex:0}},a.useGlobalFilter,a.useSortBy,a.usePagination),g=p.getTableProps,x=p.getTablebodyProps,m=p.headerGroups,b=p.page,j=p.nextPage,y=p.previousPage,v=p.canNextPage,P=p.canPreviousPage,O=p.prepareRow,C=p.pageOptions,w=p.state,N=p.setGlobalFilter,S=p.gotoPage,k=p.pageCount,F=p.setPageSize,H=(p.selectedFlatRows,p.allColumns),R=p.getToggleHideAllColumnsProps;console.log(b);var T=w.pageIndex,E=w.pageSize,_=w.globalFilter;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"filter",style:{position:"relative",left:"800px"},children:(0,n.jsx)(d,{filter:_,setFilter:N})}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,n.jsxs)("div",{style:{marginTop:"80px",marginRight:"80px"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(u,h({},R()))," Toggle All"]}),H.map((function(e){return(0,n.jsx)("div",{children:(0,n.jsxs)("label",{children:[(0,n.jsx)("input",h({type:"checkbox"},e.getToggleHiddenProps())),e.Header]})},e.id)}))]}),(0,n.jsxs)("table",h({},g(),{id:"table",children:[(0,n.jsx)("thead",{children:m.map((function(e){return(0,n.jsx)("tr",h({},e.getHeaderGroupProps(),{children:e.headers.map((function(e){return(0,n.jsxs)("th",h({},e.getHeaderProps(e.getSortByToggleProps()),{children:[e.render("Header"),(0,n.jsx)("span",{children:e.isSorted?e.isSortedDesc?"\ud83d\udd3d":"\ud83d\udd3c":""})]}),e.id)}))}),1)}))}),(0,n.jsx)("tbody",h({},x,{children:b.map((function(e){return O(e),(0,n.jsx)("tr",h({},e.getRowProps(),{onClick:function(){return function(e,t){null===sessionStorage.getItem("currPatient")||sessionStorage.removeItem("currPatient"),sessionStorage.setItem("currPatient",e);var r="/customers/"+e;c.push({pathname:r,query:{firstname:e,lastname:t}})}(e.original.first_name,e.original.last_name)},children:e.cells.map((function(e){return(0,n.jsx)("td",h({},e.getCellProps(),{children:e.render("Cell")}),e.value)}))}),e.id)}))}))]}))]}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("span",{style:{marginRight:"40px"},children:["Page"," ",(0,n.jsxs)("strong",{children:[T+1," of ",C.length]})," "]}),(0,n.jsxs)("span",{style:{marginRight:"40px"},children:["| Go to page: "," ",(0,n.jsx)("input",{type:"number",defaultValue:T+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;S(t)},style:{width:"50px"}})]}),(0,n.jsx)("select",{value:E,onChange:function(e){return F(Number(e.target.value))},style:{marginRight:"40px"},children:[10,25,50].map((function(e){return(0,n.jsxs)("option",{value:e,children:["Show ",e]},e)}))}),(0,n.jsx)("button",{onClick:function(){return S(0)},disabled:!P,children:"<<"}),(0,n.jsx)("button",{onClick:function(){return y()},disabled:!P,children:"Previous"}),(0,n.jsx)("button",{onClick:function(){return j()},disabled:!v,children:"Next"}),(0,n.jsx)("button",{onClick:function(){return S(k-1)},disabled:!v,children:">>"})]})})]})}},7849:function(e,t,r){var n=r(5893),i=(r(7294),r(1664),r(1163));t.Z=function(e){e.firstName,e.firstName,e.firstName,e.firstName,e.firstName;var t=e.firstName+" "+e.lastName;console.log(t);var r=(0,i.useRouter)(),a=function(t){var n="/customers/"+e.firstName+"/"+t;r.push({pathname:n,query:{firstname:e.firstName,lastname:e.lastName}},n)};return(0,n.jsxs)("nav",{className:"nav",children:[(0,n.jsxs)("h1",{className:"title",children:[" ",t," "]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:function(){return a("")},children:"General"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:function(){return a("lightbuzz")},children:"LightBuzz"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:function(){return a("foodrx")},children:"RXFood"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:function(){return a("garmin")},children:"Garmin"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:function(){return a("survey")},children:"Survey"})})]})]})}},2971:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(5893),i=r(7294),a=r(44),o=r(3918);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function c(){var e,t,r=(e=["\n\tbackground-color: #2979ff;\n\tborder: none;\n\tcolor: white;\n\tpadding: 8px 32px 8px 32px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tfont-size: 16px;\n\tborder-radius: 3px;\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return r},r}var u=o.default.button(c());function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=d(["\n\theight: 32px;\n\twidth: 200px;\n\tborder-radius: 3px;\n\tborder-top-left-radius: 5px;\n\tborder-bottom-left-radius: 5px;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\tborder: 1px solid #e5e5e5;\n\tpadding: 0 32px 0 16px;\n\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"]);return f=function(){return e},e}function p(){var e=d(["\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n\tborder-top-right-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n\theight: 34px;\n\twidth: 32px;\n\ttext-align: center;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);return p=function(){return e},e}var h=o.default.input(f()),g=(0,o.default)((function(e){var t=e.children,r=l(e,["children"]);return(0,n.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},r,{children:t}))}))(p()),x=function(e){var t=e.filterText,r=e.onFilter,i=e.onClear,a="Filter by "+e.placeHolderText;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{id:"search",type:"text",placeholder:a,"aria-label":"Search Input",value:t,onChange:r}),(0,n.jsx)(g,{type:"button",onClick:i,children:"X"})]})},m=function(e){var t=e.cols,r=e.data,o=e.pagination,s=e.filterCol,l=e.placeHolderText,c=(0,i.useState)(""),u=c[0],d=c[1],f=(0,i.useState)(!1),p=f[0],h=f[1],g=r.filter((function(e){return e[s]&&e[s].toLowerCase().includes(u.toLowerCase())})),m=(0,i.useMemo)((function(){return(0,n.jsx)(x,{onFilter:function(e){return d(e.target.value)},onClear:function(){u&&(h(!p),d(""))},filterText:u,placeHolderText:l})}),[u,p]);return(0,n.jsx)(a.ZP,{title:e.title,columns:t,data:g,paginationResetDefaultPage:p,subHeader:!0,pagination:o,subHeaderComponent:m,persistTableHead:!0})}},7665:function(e,t,r){r.r(t),r.d(t,{PatientDetails:function(){return u},default:function(){return d}});var n=r(5893),i=(r(7294),r(7849)),a=r(1041),o=r(5152),s=function(e){var t=(0,o.default)((function(){return Promise.all([r.e(774),r.e(279),r.e(229)]).then(r.bind(r,7229))}),{loadableGenerated:{webpack:function(){return[7229]},modules:["../components/customer/charts/Radarchart.js -> react-apexcharts"]},ssr:!1});return(0,n.jsx)("div",{children:(0,n.jsx)(t,{type:"radar",series:e.series,options:e.options})})},l=function(e){return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"detail_row",style:{display:"flex",justifyContent:"space-around",marginBottom:"40px"},children:(0,n.jsx)("div",{className:"summary",children:(0,n.jsx)(a.Z,{label:"Summary",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"General Info Chart"}),(0,n.jsx)(s,{series:e.series,options:e.options})]})})})})})},c=r(1163),u=function(){var e=(0,c.useRouter)();console.log(e.query);var t=e.query.firstname,r=e.query.lastname;return(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Z,{firstName:t,lastName:r}),(0,n.jsx)(l,{series:[{name:"Summary category",data:[40,30,50,80,25,75,65,15,20,10]}],options:{chart:{height:200,width:400,type:"radar"},title:{text:"General Info"},labels:["EASA Emotional","EASA physical","Macronutrients","Caloric intake","Protein intake","Moderate-to-vigorous physical activity minutes","step count","light physical activity","Physical activity minutes","Physical functioning"]}})]})},d=u}}]);