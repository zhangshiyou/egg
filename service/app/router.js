'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.getData.index);
	router.post('/queryDatas', controller.getData.index);
	router.post('/register', controller.home.register);
	router.post('/login', controller.home.login);
};
