const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post("/password", async (req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.newPass,10);

    const oldPassword = await pool.query(
        'SELECT hashedpassword FROM users u WHERE u.email_addr = $1',
        [req.body.email]
    )

    const isSamePassword = await bcrypt.compare(
        req.body.newPass,
        oldPassword.rows[0].hashedpassword
    );

    if(isSamePassword){
        return res.status(500).json();
    }

    pool.query(
        'UPDATE users SET hashedpassword = $1 WHERE users.email_addr = $2',
        [hashedPassword,req.body.email],
        (q_err,q_res) => {
            if(q_res){
                return res.status(200).json();
            }
        }
    )

});

module.exports = router;