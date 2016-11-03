"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./todolist/index');
var index_3 = require('./login/index');
var index_4 = require('./signin/index');
var appRoutes = index_1.HomeRoutes.concat(index_2.TodolistRoutes, index_3.LoginRoutes, index_4.SignInRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
