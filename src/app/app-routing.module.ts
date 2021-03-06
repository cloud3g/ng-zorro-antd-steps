import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SetupComponent } from './layout/setup/setup.component';
import { InitGuardService } from './services/init-guard/init-guard.service';

const routes: Routes = [
  // { path: 'setup', component: SetupComponent, canActivate: [ InitGuardService ] }, // 路由守卫
  { path: 'default', redirectTo: '/default', pathMatch: 'full' },
  // { path: 'summary', redirectTo: '/summary', pathMatch: 'full' },
  // { path: 'setting', redirectTo: '/setting', pathMatch: 'full' },
  { path: '', redirectTo: '/default', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
