"use strict";
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 6964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login),
  "userData": () => (/* binding */ userData)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBack"
var ArrowBack_ = __webpack_require__(3622);
// EXTERNAL MODULE: external "@mui/material/utils"
var utils_ = __webpack_require__(7077);
;// CONCATENATED MODULE: ./src/icons/facebook.js


const Facebook = (0,utils_.createSvgIcon)(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z"
    })
}), 'Facebook');

;// CONCATENATED MODULE: ./src/icons/google.js


const Google = (0,utils_.createSvgIcon)(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z"
    })
}), 'Google');

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
;// CONCATENATED MODULE: ./src/pages/login.js












const userData = {
};
const Login = ()=>{
    const router = (0,router_.useRouter)();
    const formik = (0,external_formik_.useFormik)({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: external_yup_.object({
            email: external_yup_.string().email('Must be a valid email').max(255).required('Email is required'),
            password: external_yup_.string().max(255).required('Password is required')
        }),
        onSubmit: (values, actions)=>{
            const vals = {
                ...values
            };
            actions.resetForm();
            fetch("http://localhost:4000/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(vals)
            }).catch((err)=>{
                alert("Network Error!");
                return;
            }).then((res)=>{
                console.log(res.ok);
                if (res.ok == true) {
                    return res.json();
                } else if (!res || !res.ok || res.status >= 400) {
                    alert("Wrong email or password, please try again!");
                    return;
                }
            }).then((data)=>{
                if (data) {
                    userData = data;
                    console.log(data);
                    sessionStorage.setItem('user', data.profile.rows[0].email_addr);
                    router.push({
                        pathname: '/patients',
                        query: {
                            "email": data.profile.rows[0].email_addr,
                            "firstname": data.profile.rows[0].first_name,
                            "lastname": data.profile.rows[0].last_name
                        }
                    }, '/patients');
                }
            });
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Login | Material Kit"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                component: "main",
                sx: {
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                    maxWidth: "sm",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: formik.handleSubmit,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Welcome to the Healme dashboard"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    my: 3
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textPrimary",
                                    variant: "h4",
                                    children: "Sign in"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                error: Boolean(formik.touched.email && formik.errors.email),
                                fullWidth: true,
                                helperText: formik.touched.email && formik.errors.email,
                                label: "Email Address",
                                margin: "normal",
                                name: "email",
                                onBlur: formik.handleBlur,
                                onChange: formik.handleChange,
                                type: "email",
                                value: formik.values.email,
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                error: Boolean(formik.touched.password && formik.errors.password),
                                fullWidth: true,
                                helperText: formik.touched.password && formik.errors.password,
                                label: "Password",
                                margin: "normal",
                                name: "password",
                                onBlur: formik.handleBlur,
                                onChange: formik.handleChange,
                                type: "password",
                                value: formik.values.password,
                                variant: "outlined"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    py: 2
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    color: "primary",
                                    disabled: formik.isSubmitting,
                                    fullWidth: true,
                                    size: "large",
                                    type: "submit",
                                    variant: "contained",
                                    children: "Sign In Now"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                color: "textSecondary",
                                variant: "body2",
                                children: [
                                    "Don't have an account?",
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/register",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                            to: "/register",
                                            variant: "subtitle2",
                                            underline: "hover",
                                            sx: {
                                                cursor: 'pointer'
                                            },
                                            children: "Sign Up"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const login = (Login);


/***/ })

};
;