import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { LoginRoutes } from './login/index';
import { SignInRoutes } from './signin/index';
import { RegionRoutes } from './regions/index';
import {MemberlistRoutes} from "./Members/memberlist.routes";

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...LoginRoutes,
    ...SignInRoutes,
    ...RegionRoutes,
    ...MemberlistRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
