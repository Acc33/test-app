(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7156:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(6964)}])},6964:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return x},userData:function(){return g}});var t=n(5893),a=n(9008),o=n(1664),i=n(1163),l=n(2175),s=n(4231),u=n(7357),d=n(3156),c=n(5861),h=n(135),m=n(3321),p=n(3795),f=n(2066);(0,f.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{d:"M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z"})}),"Facebook"),(0,f.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{d:"M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z"})}),"Google"),n(7294);function w(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var g={},x=function(){var e=(0,i.useRouter)(),r=(0,l.TA)({initialValues:{email:"",password:""},validationSchema:s.Ry({email:s.Z_().email("Must be a valid email").max(255).required("Email is required"),password:s.Z_().max(255).required("Password is required")}),onSubmit:function(r,n){var t=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){w(e,r,n[r])}))}return e}({},r);n.resetForm(),fetch("http://localhost:4000/auth/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch((function(e){alert("Network Error!")})).then((function(e){if(console.log(e.ok),1==e.ok)return e.json();(!e||!e.ok||e.status>=400)&&alert("Wrong email or password, please try again!")})).then((function(r){r&&(g=r,console.log(r),sessionStorage.setItem("user",r.profile.rows[0].email_addr),e.push({pathname:"/patients",query:{email:r.profile.rows[0].email_addr,firstname:r.profile.rows[0].first_name,lastname:r.profile.rows[0].last_name}},"/patients"))}))}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("title",{children:"Login | Material Kit"})}),(0,t.jsx)(u.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,t.jsx)(d.Z,{maxWidth:"sm",children:(0,t.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,t.jsx)("h1",{children:"Welcome to the Healme dashboard"}),(0,t.jsx)(u.Z,{sx:{my:3},children:(0,t.jsx)(c.Z,{color:"textPrimary",variant:"h4",children:"Sign in"})}),(0,t.jsx)(h.Z,{error:Boolean(r.touched.email&&r.errors.email),fullWidth:!0,helperText:r.touched.email&&r.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,type:"email",value:r.values.email,variant:"outlined"}),(0,t.jsx)(h.Z,{error:Boolean(r.touched.password&&r.errors.password),fullWidth:!0,helperText:r.touched.password&&r.errors.password,label:"Password",margin:"normal",name:"password",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.password,variant:"outlined"}),(0,t.jsx)(u.Z,{sx:{py:2},children:(0,t.jsx)(m.Z,{color:"primary",disabled:r.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In Now"})}),(0,t.jsxs)(c.Z,{color:"textSecondary",variant:"body2",children:["Don't have an account?"," ",(0,t.jsx)(o.default,{href:"/register",children:(0,t.jsx)(p.Z,{to:"/register",variant:"subtitle2",underline:"hover",sx:{cursor:"pointer"},children:"Sign Up"})})]})]})})})]})}}},function(e){e.O(0,[15,319,791,781,878,871,774,888,179],(function(){return r=7156,e(e.s=r);var r}));var r=e.O();_N_E=r}]);