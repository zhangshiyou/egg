'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547889693987_4194';

  // add your config here
  config.middleware = [];
	config.security={
		csrf: {
			enable: false,
		},
	}
	config.mysql ={
		client: {
			host: 'localhost',
			port: 3306,
			user: 'root',
			password: 'root',
			database: 'tables'
    },
    app: true,      // 是否加载到app上
    agent: false    // 是否加载到agent上
	}
  return config;
};
