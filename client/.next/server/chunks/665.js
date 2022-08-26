"use strict";
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 7665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PatientDetails": () => (/* binding */ PatientDetails),
  "default": () => (/* binding */ _patientName_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/customer/detail-navbar.js
var detail_navbar = __webpack_require__(7849);
// EXTERNAL MODULE: ./src/components/customer/Collapsible.js
var Collapsible = __webpack_require__(1041);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./src/components/customer/charts/Radarchart.js



const Radarchart = (props)=>{
    const Chart = (0,dynamic["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8403, 23))
    , {
        loadableGenerated: {
            webpack: ()=>[
                    /*require.resolve*/(8403)
                ]
            ,
            modules: [
                "../components/customer/charts/Radarchart.js -> " + "react-apexcharts"
            ]
        },
        ssr: false
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Chart, {
            type: "radar",
            series: props.series,
            options: props.options
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/customer/details/General.js




const General = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "detail_row",
            style: {
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '40px'
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "summary",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Collapsible/* default */.Z, {
                    label: "Summary",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "General Info Chart"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Radarchart, {
                                series: props.series,
                                options: props.options
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const details_General = (General);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/pages/customers/[patientName]/index.js





const PatientDetails = ()=>{
    const router = (0,router_.useRouter)();
    console.log(router.query);
    const firstName = router.query.firstname;
    const lastName = router.query.lastname;
    const generalRadarSeries = [
        {
            name: 'Summary category',
            data: [
                40,
                30,
                50,
                80,
                25,
                75,
                65,
                15,
                20,
                10
            ]
        }
    ];
    const generalRadarOptions = {
        chart: {
            height: 200,
            width: 400,
            type: 'radar'
        },
        title: {
            text: 'General Info'
        },
        labels: [
            'EASA Emotional',
            'EASA physical',
            'Macronutrients',
            'Caloric intake',
            'Protein intake',
            'Moderate-to-vigorous physical activity minutes',
            'step count',
            'light physical activity',
            'Physical activity minutes',
            'Physical functioning'
        ]
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(detail_navbar/* default */.Z, {
                firstName: firstName,
                lastName: lastName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(details_General, {
                series: generalRadarSeries,
                options: generalRadarOptions
            })
        ]
    }));
};
/* harmony default export */ const _patientName_ = (PatientDetails);


/***/ })

};
;