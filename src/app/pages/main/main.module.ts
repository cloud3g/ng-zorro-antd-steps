import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
// import { LeftControlComponent } from './left-control/left-control.component';
// import { ListComponent } from './left-control/list/list.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './sidebar/list/list.component';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './content/header/header.component';

import { TodoComponent } from './content/todo/todo.component';
import { SuggestComponent } from './content/header/suggest/suggest.component';

// import { DetailComponent } from './detail/detail.component';
// import { QuickAddComponent } from './content/quick-add/quick-add.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MainRoutingModule,
    FormsModule
  ],

  // DetailComponent // 待办详情
  // QuickAddComponent, // 新增待办
  declarations: [
    MainComponent,
    SidebarComponent,
    ListComponent,
    ContentComponent,
    HeaderComponent,
    TodoComponent,
    SuggestComponent,
  ]
})
export class MainModule { }
