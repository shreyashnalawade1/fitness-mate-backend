const tryCatch = require("../utils/tryCatch");

module.exports.getWeight=tryCatch(async (req,res,next)=>{
    return res.json({
        user:req.user
    })
})
