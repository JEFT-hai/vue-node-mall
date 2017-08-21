var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');


mongoose.connect('mongodb://127.0.0.1:27017/imoocmall');

mongoose.connection.on("connected",function(){
	console.log("MongoDB connected success.")
});

mongoose.connection.on("error",function(){
	console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected",function(){
	console.log("MongoDB connected disconnected.")
});

router.get('/list',function(req,res,next){
	var page = parseInt(req.param("page"));
	var pageSize = parseInt(req.param("pageSize"));
	var priceLevel = req.param("priceLevel");
	// console.log(priceLevel);
	var sort = req.param("sort");
	var skip = (page-1)*pageSize;
	// var sort = function(a,b){
	// 	return a -b;
	// };
	// var params = {};
	// var priceGt='',priceLte='';
	// if(priceLevel != 'All'){
	// 	switch (priceLevel){
	// 		case 0:priceGt='0000';priceLte='0100';break;
	// 		case 1:priceGt='0100';priceLte='0500';break;
	// 		case 2:priceGt='0500';priceLte='1000';break;
	// 		case 3:priceGt='1000';priceLte='5000';break;
	// 	}
	// 	params = {
	// 		prodcutPrice:{
	// 			$gt:priceGt,
	// 			$lte:priceLte
	// 		}
	// 	}
	// }
	
	// console.log(params);
	// var filter = Goods.find({prodcutPrice:'3999'})
	// filter.exec(function(err,doc){
	// 	console.log(doc);
	// })
	var goodsModel = Goods.find({}).skip(skip).limit(pageSize);
	goodsModel.sort({'prodcutPrice':sort});
	goodsModel.exec(function(err,doc){
		if(err){
			res.json({
				status:"1",
				msg:err.message
			});
		}else{
			res.json({
				status:'0',
				msg:'',
				result:{
					count:doc.length,
					list:doc
				}
			});
		}
	})
});


//加入购物车
router.post('/addCart',function(req,res,next){
	var userId = '1000077',productId = req.body.productId;
	// var userId = '1000077';
	var User = require('../models/users');

	User.findOne({userId:userId},function(err,userdoc){
		if(err){
			res.json({
				status:'1',
				msg:err.message
			})
		}else{
			console.log(userdoc);
			if(userdoc){
				var goodsItem = '';
				userdoc.cartList.forEach(function(item){
					console.log(item);
					if(item.productId == productId){
						goodsItem = item;
						item.productNum++;
						console.log("2"+ item.productNum);
					}
					console.log("1"+ goodsItem);
				});
				if(goodsItem){
					userdoc.save(function(err2,doc2){
		            			if(err2){
		            				res.json({
		            					status:"1",
		            					msg:err2.message
		            				})
		            			}else{
		            				res.json({
		            					status:'0',
		            					msg:'',
		            					result:'suc'
		            				})
		            			}
		            		})
				}else{
					Goods.findOne({productId:productId},function(err1,doc){
					if(err){
			            res.json({
			            	status:'1',
				            msg:err1.message
			            })
		            }else{
		            	if(doc){
		            		doc.productNum = 1;
		            		doc.checked = 1;
		            		userdoc.cartList.push(doc);
		            		userdoc.save(function(err2, doc2){
		            			if(err2){
		            				res.json({
		            					status:"1",
		            					msg:err2.message
		            				})
		            			}else{
		            				res.json({
		            					status:'0',
		            					msg:'',
		            					result:'suc'
		            				})
		            			}
		            		})
		            	}
		            }
				})
				}
				
			}
		}
	})
})

module.exports = router;