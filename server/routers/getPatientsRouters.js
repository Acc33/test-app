const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post('/getPatients', async (req,res) => {
    const patients = {};
    console.log(req.body.email)
    const userProfile = await pool.query(
        "SELECT email_addr, first_name, last_name, gender, created_date, group_id, organization_id FROM users u WHERE u.email_addr = $1",
        [req.body.email]
    )
    const groupId = userProfile.rows[0].group_id;
    const organizationId = userProfile.rows[0].organization_id;
    
    
    const userPatients = await pool.query(
        "SELECT email_addr, first_name, last_name, gender, created_date FROM users u WHERE u.user_type = $1 AND u.group_id = $2 AND u.organization_id = $3",
        ["patient",groupId,organizationId]
    );
    if (userPatients.rowCount>0){
        patients.patients = userPatients.rows;
        res.status(200).json(patients);
    }else{
        res.status(500).json();
        console.log("No patients found")
    }

});

module.exports = router;