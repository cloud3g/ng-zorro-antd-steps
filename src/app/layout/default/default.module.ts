import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DefaultComponent } from './default.component';
import { DefaultRoutingModule } from './default-routing.module';
// import { LeftControlComponent } from './left-control/left-control.component';
// import { ListComponent } from './left-control/list/list.component';

import { SidebarComponent } from './sidebar/sidebar.component';
// import { ListComponent } from './sidebar/list/list.component';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './content/header/header.component';

// import { TodoComponent } from './content/todo/todo.component';// 右边 待办列表
// import { SuggestComponent } from './content/header/suggest/suggest.component'; //右边 建议
// import { DetailComponent } from './detail/detail.component'; // 右边 待办详情
// import { QuickAddComponent } from './content/quick-add/quick-add.component';// 右边 新增待办

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    DefaultRoutingModule,
    FormsModule
  ],

  // TodoComponent, // 右边 待办列表
  // DetailComponent, // 右边 待办详情
  // QuickAddComponent, // 右边 新增待办
  // SuggestComponent, // 右边 建议按钮 内容
  // ListComponent, //左边
  declarations: [
    DefaultComponent,
    SidebarComponent,
    ContentComponent,
    HeaderComponent,
  ]
})
export class DefaultModule { }
