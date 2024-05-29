const express=require('express');
const { getWeight } = require('../controller/healthStatsController');
const { protect } = require('../controller/authController');

const router=express.Router();

router.get('/weight',protect,getWeight);

module.exports=router;