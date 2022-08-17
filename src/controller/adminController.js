const { students } = require("../models/model")

let adminController = (req,res)=>{


   


    const stdObj = new students({name:req.query.name});
    stdObj.save().then(() => {
        res.status(200).json({
            msg:'success'
        })
    }).catch(e=>{
        res.status(404).json({
            msg:'error'
        })
    })
   

}
module.exports ={adminController}