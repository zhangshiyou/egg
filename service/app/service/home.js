'use strict';
const Service = require('egg').Service;
var md5=require('md5-node');
class user extends Service {
	async login(userName,pwd) {
		pwd=md5(pwd);
		const RESLUT=await this.app.mysql.select('zsy_user',{
			where:{
				userName,
				pwd
			}
		});
		let res=JSON.stringify(RESLUT);
		let res_1=JSON.parse(res);
		if(res_1.length>0){
			return {message:'ok',code:200};
		}else{
			return {message:'登录错误,用户名或密码错误',code:234};
		}
	}
	async register(userName,pwd) {
		// let addr = 'http://wish.51bm.net.cn/api/m/wish/culture/joint/provinceList.htm';
		// const user = await this.ctx.curl(addr);
		const RESLUT=await this.app.mysql.select('zsy_user',{
			where:{
				userName
			}
		});
		if(RESLUT.length === 0){
			pwd=md5(pwd);
			let re=await this.app.mysql.insert('zsy_user',{
				userName,
				pwd,
			})
			let ress=JSON.stringify(re);
			if(JSON.parse(ress).affectedRows>0){
				return {message:'ok',code:200}
			}
		}else{
			return {message:'用户名已被注册',code:123}
		}
	}
}

module.exports = user;