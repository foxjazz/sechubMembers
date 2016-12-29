"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var region_component_1 = require('./region.component');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var RegionModule = (function () {
    function RegionModule() {
    }
    RegionModule = __decorate([
        core_1.NgModule({
            declarations: [
                region_component_1.RegionComponent
            ],
            imports: [http_1.HttpModule, common_1.CommonModule],
            exports: [
                region_component_1.RegionComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RegionModule);
    return RegionModule;
}());
exports.RegionModule = RegionModule;
/**
 * Created by fox21 on 11/16/2016.
 */
/**
 * Created by fox21 on 11/16/2016.
 */
//# sourceMappingURL=region.module.js.map