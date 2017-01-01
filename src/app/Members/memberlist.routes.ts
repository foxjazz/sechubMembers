import { Routes } from '@angular/router';

import { MemberlistComponent } from './memberlist.component';
import {MaintenanceComponent} from "./maintenance.component";


export const MemberlistRoutes: Routes = [
  { path: 'memberlist', component: MemberlistComponent },
  {path: 'maintenance', component: MaintenanceComponent}
];
