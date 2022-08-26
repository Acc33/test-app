export async function getRXFoodData(patient_firstName){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({firstName:patient_firstName})
    };
    return fetch('http://localhost:4000/patientDetails/foodrxData', requestOptions)
    .then(res => {
        if (res.ok){
            return res.json();
        }
        if(!res || !res.ok || res.status >= 400){
            return;
        }
    })
    .then(data => {
        if (data){
            return data;
        }
    })

};

export async function getSurveyData(patient_firstName){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({firstName:patient_firstName})
    };
    return fetch('http://localhost:4000/patientDetails/surveyData', requestOptions)
    .then(res => {
        if (res.ok){
            return res.json();
        }
        if(!res || !res.ok || res.status >= 400){
            return;
        }
    })
    .then(data => {
        if (data){
            return data;
        }
    })

};

export async function getGarminData(patient_firstName){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({firstName:patient_firstName})
    };
    return fetch('http://localhost:4000/patientDetails/garminData',requestOptions)
    .then(res =>{
        if (res.ok){
            return res.json();
        }
        if(!res || !res.ok || res.status >= 400){
            return;
        }
    })
}