import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// modules
import { AppRoutingModule } from './app-routing.module';
// import { SetupModule } from './layout/setup/setup.module';
import { MainModule } from './layout/main/main.module';

// services
import { LocalStorageService } from './services/local-storage/local-storage.service';
// import { ListService } from './services/list/list.service';
// import { TodoService } from './services/todo/todo.service';
import { InitGuardService } from './services/init-guard/init-guard.service';
// import { SummaryModule } from './layout/summary/summary.module';
// import { SettingModule } from './layout/setting/setting.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],

  // SummaryModule,
  // SettingModule
  // SetupModule,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    MainModule,
  ],

  // ListService,
  // TodoService,
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
    { provide: NZ_I18N, useValue: zh_CN },
    LocalStorageService,
    InitGuardService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
