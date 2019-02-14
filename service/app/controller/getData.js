'use strict';

const Controller = require('egg').Controller;

class QueryData extends Controller {
  async index() {
	var datas=await this.service.getdata.find()
	// console.log(JSON.parse(datas.data));
    // this.ctx.body = JSON.parse(datas.data);
		this.ctx.body = datas;
  }
}

module.exports = QueryData;
