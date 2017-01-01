"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./todolist/index');
var index_3 = require('./login/index');
var index_4 = require('./signin/index');
var index_5 = require('./regions/index');
var memberlist_routes_1 = require("./Members/memberlist.routes");
var appRoutes = index_1.HomeRoutes.concat(index_2.TodolistRoutes, index_3.LoginRoutes, index_4.SignInRoutes, index_5.RegionRoutes, memberlist_routes_1.MemberlistRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map