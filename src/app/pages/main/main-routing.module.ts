import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
// import { DetailComponent } from './detail/detail.component'; // 右边 待办详情
import { InitGuardService } from '../../services/init-guard/init-guard.service';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [ InitGuardService ], // 路由守卫

    // children: [
    //   {
    //     path: ':id',
    //     component: DetailComponent, // 右边 待办详情
    //     pathMatch: 'full'
    //   }
    // ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
