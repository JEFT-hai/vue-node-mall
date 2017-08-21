var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');


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

router.get('/',function(req,res,next){
	res.send('respond with a resource');
})


//登出
router.post('/logout',function(req,res,next){
	res.cookie("userId",'',{
		path:'/',
		maxAge:-1
	})
	res.json({
		status:'0',
		msg:'',
		result:''
	})
})

//登录
router.post('/login',function(req,res,next){
	var param = {
		userName:req.body.userName,
		userPwd:req.body.userPwd
	}
	User.findOne(param,function(err,doc){
		if(err){
			res.json({
				status:"1",
				msg:err.message
			})
		}else{
			if(doc){
				res.cookie("userId",doc.userId,{
					path:'/',
					maxAge:1000*60*60
				})
				res.cookie("userName",doc.userName,{
					path:'/',
					maxAge:1000*60*60
				})
				// req.session.user = doc;
				res.json({
					status:'0',
					msg:'',
					result:{
						userName:doc.userName
					}
				})
			}
		}
	})
})

//查询用户状态
router.get('/checklogin',function(req,res,next){
	if(req.cookies.userId){
		res.json({
			status:'0',
			msg:'',
			result:req.cookies.userName || ''
		})
	}else{
		res.json({
			status:'1',
			msg:'',
			result:''
		})
	}
})

//用户购物车数据
router.get("/cartList",function(req,res,next){
	var userId = req.cookies.userId;
	User.findOne({userId:userId},function(err,doc){
		if(err){
			res.json({
			    status:'1',
			    msg:'',
			    result:''
		    });
		}else{
			if(doc){
				res.json({
			        status:'0',
			        msg:'',
			        result:doc.cartList
		        })
			}
		}
	})
})

//购物车删除
router.post('/cartDel',function(req,res,next){
	var userId = req.cookies.userId,productId = req.body.productId;
	User.update({
		userId:userId
	},{
		$pull:{
			'cartList':{
				'productId':productId
			}
		}
	},function(err,doc){
		if(err){
			res.json({
			    status:'1',
			    msg:'',
			    result:''
		    });
		}else{
			if(doc){
				res.json({
			        status:'0',
			        msg:'',
			        result:doc.cartList
		        })
			}
		}
	});
})

//修改购物车
router.post('/cartEdit',function(req,res,next){
	var userId = req.cookies.userId,productId= req.body.productId,productNum= req.body.productNum,checked= req.body.checked;
	User.update({"userId":userId,"cartList.productId":productId},{
		"cartList.$.productNum":productNum,"cartList.$.checked":checked
	},function(err,doc){
		if(err){
			res.json({
			    status:'1',
			    msg:'',
			    result:''
		    });
		}else{
			if(doc){
				res.json({
			        status:'0',
			        msg:'',
			        result:doc.cartList
		        })
			}
		}
	})
})

//查询用户地址接口
router.get("/addressList",function(req,res,next){
	var userId = req.cookies.userId;
	User.findOne({userId:userId},function(err,doc){
		if(err){
			res.json({
			    status:'1',
			    msg:'',
			    result:''
		    });
		}else{
			if(doc){
				res.json({
			        status:'0',
			        msg:'',
			        result:doc.addressList
		        })
			}
		}
	})
})

//设置默认地址
router.post("/setDefault",function(req,res,next){
	var userId = req.cookies.userId,addressId = req.body.addressId;
	if(!addressId){
		res.json({
			    status:'10003',
			    msg:'',
			    result:'addressId is not defined'
		    });
	}
	User.findOne({userId:userId},function(err,doc){
		if(err){
			res.json({
			    status:'1',
			    msg:'',
			    result:''
		    });
		}else{
			var addressList = doc.addressList;
			addressList.forEach((item)=>{
				if(item.addressId == addressId){
					item.isDefault = true;
				}else{
					item.isDefault = false;
				}
			});

			doc.save(function(err1,doc1){
				if(err1){
			        res.json({
			            status:'1',
			            msg:'err.message',
			            result:''
		            });
		        }else{
		        	res.json({
			            status:'0',
			            msg:'',
			            result:''
		            })
		        }
			})
		}
	})
})

//删除地址
router.post("/delAddress",function(req,res,next){
	var userId = req.cookies.userId,addressId = req.body.addressId;
	User.update({
		userId:userId
	},{
		$pull:{
			'addressList':{
				'addressId':addressId
			}
		}
	},function(err,doc){
		if(err){
			res.json({
			    status:'1',
			    msg:err.message,
			    result:''
		    });
		}else{
			if(doc){
				res.json({
			        status:'0',
			        msg:'',
			        result:''
		        })
			}
		}
	});
})



module.exports = router;