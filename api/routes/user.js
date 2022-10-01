const { verify } = require("jsonwebtoken");

const router = require("express").Router();

/*  BASIC EXAMPLES 

router.get("/usertest", (req,res)=>{
    res.send("user test is susccessfull");
});

router.post("/userposttest", (req,res)=>{
    const username = req.body.username;;
    console.log(username);
    res.send("your username is: " + username);
});

*/

router.put("/:id", verifyToken, (req, res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        
    }
})




module.exports = router