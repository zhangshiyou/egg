'use strict';
const Service = require('egg').Service;

class getData extends Service {
	async find(uid) {
		// let addr = 'http://wish.51bm.net.cn/api/m/wish/culture/joint/provinceList.htm';
		// const user = await this.ctx.curl(addr);
		const ALLDATA=await this.app.mysql.select('money');
		let data=[];
		let obj=[];
		obj=JSON.stringify(ALLDATA);
		return JSON.parse(obj);
	}
}

module.exports = getData;
