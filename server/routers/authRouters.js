const express = require("express");
const router = express.Router();
const Yup = require("yup")
const validate = require("../controllers/validateForms.js")
const pool = require("../db");
const bcrypt = require("bcrypt");



router.post("/login", async (req,res) => {
    validate.validateForms(req,res,validate.logInformSchema);
    const potientialLogin = await pool.query(
        "SELECT user_id, user_name, hashedpassword FROM users u WHERE u.email_addr = $1",
        [req.body.email]
    );
    if (potientialLogin.rowCount > 0){
        const userData = {};

        const isSamePassword = await bcrypt.compare(
            req.body.password,
            potientialLogin.rows[0].hashedpassword
        );
        console.log(isSamePassword);
        if (isSamePassword){
            req.session.user = {
                username: req.body.userName,
                id: potientialLogin.rows[0].user_id,
            };
            const userProfile = await pool.query(
                "SELECT email_addr, first_name, last_name, gender, created_date, group_id, organization_id FROM users u WHERE u.email_addr = $1",
                [req.body.email]
            )
            
            const groupId = userProfile.rows[0].group_id;
            const organizationId = userProfile.rows[0].organization_id;
            

            const group_user_id_row = await pool.query(
                "SELECT cohort_id from groupusers g WHERE g.user_id = $1",
                [potientialLogin.rows[0].user_id]
            )
        
            const cohort_id = group_user_id_row.rows[0].cohort_id;
            
            const cohort_id_row = await pool.query(
                "SELECT cohort_name FROM cohorts c WHERE c.cohort_id = $1",
                [cohort_id]
            )

            userData.profile = userProfile;
            res.status(200).json(userData);

        }else{
            res.status(500).json();
            console.log("wrong password");
        }
    }else {
        res.json({loggedIn:false, status: "wrong username or password"});
    }
    
});

router.post("/signUp", async (req,res) => {
    validate.validateForms(req,res,validate.signUpformSchema);
    const existingUser = await pool.query(
        "SELECT email_addr FROM users WHERE email_addr = $1",
        [req.body.email]
    );
    if (existingUser.rowCount === 0){
        
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        
        const newUserQuery = await pool.query(
            "INSERT INTO users (created_by,created_date,last_modified_by,last_modified_date,email_addr,hashedpassword,first_name,gender,last_name,user_name,user_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING user_name",
            [req.body.firstName, new Date(), req.body.firstName, new Date(), req.body.email, hashedPassword, req.body.firstName, req.body.gender, req.body.lastName, req.body.userName, req.body.userType]
        );
        
        req.session.user = {
            username: req.body.userName,
            id: newUserQuery.rows[0].user_id,
        };
        res.status(200).json();
    }else{
        res.status(500).json();
    }
});

router.post("/getUserInfo", async (req,res) =>{
    const accountInfo = {};

    const userProfile = await pool.query(
        "SELECT user_id, email_addr, first_name, last_name, gender, created_date, group_id, organization_id FROM users u WHERE u.email_addr = $1",
        [req.body.email]
    )
    const group_user_id_row = await pool.query(
        "SELECT cohort_id from groupusers g WHERE g.user_id = $1",
        [userProfile.rows[0].user_id]
    )
    const cohort_id = group_user_id_row.rows[0].cohort_id;
    const cohort_id_row = await pool.query(
        "SELECT cohort_name FROM cohorts c WHERE c.cohort_id = $1",
        [cohort_id]
    );
    accountInfo.profile = userProfile.rows[0];
    accountInfo.cohort = cohort_id_row.rows[0].cohort_name;

    if (accountInfo!={}){
        res.status(200).json(accountInfo);
    }else{
        res.status(500).json();
    }

})

module.exports = router
