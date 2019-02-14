'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login() {
		let {userName,pwd}=this.ctx.request.body;
    var datas=await this.service.home.login(userName,pwd);
		this.ctx.body = datas;
  }
	async register(){
		let {userName,pwd}=this.ctx.request.body;
		var datas=await this.service.home.register(userName,pwd);
		this.ctx.body = datas;
	}
}

module.exports = HomeController;