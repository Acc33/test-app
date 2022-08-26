const Yup  = require("yup");


const signUpformSchema = Yup.object({
    email: Yup.string().required("Username required"),
    password: Yup.string().required("Password requird"),
    firstName: Yup.string().required("First name required"),
    lastName : Yup.string().required("Last name required"),
    gender: Yup.string().required("Gender required"),
    userName: Yup.string().required("User name required"),
    userType: Yup.string().required("User type required"),
});

const logInformSchema = Yup.object({
    email: Yup.string().required("Username required"),
    password: Yup.string().required("Password requird"),
})



const validateForms = (req,res,schema) => {
    const formData = req.body;
    schema
    .validate(formData)
    .catch(err => {
        res.status(422).send();
        console.log(err.errors);
    })
    .then(valid => {
        if(valid) {
            console.log("The form is good");
        }
    });
};

module.exports = {
    validateForms,
    logInformSchema,
    signUpformSchema
};