import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { USERNAME } from '../../../services/local-storage/local-storage.namespace';

//left-control
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.less' ]
})
export class SidebarComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @ViewChild(ListComponent) listComponent: ListComponent;

  username: string;

  constructor(
    private store: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.username = this.store.get(USERNAME);
    this.username = "user";
  }

  openAddListModal(): void {
    this.listComponent.openAddListModal();
  }

  goSetting() {
    // this.router.navigateByUrl('/setting');
  }

  goSummary() {
    // this.router.navigateByUrl('/summary');
  }
}
