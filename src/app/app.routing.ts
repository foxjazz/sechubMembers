import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { LoginRoutes } from './login/index';
import { SignInRoutes } from './signin/index';
import { RegionRoutes } from './regions/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...LoginRoutes,
    ...SignInRoutes,
    //...RegionRoutes,
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
