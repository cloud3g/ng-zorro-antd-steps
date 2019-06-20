import { Component, OnInit, ViewChild } from '@angular/core';
// import { TodoComponent } from './todo/todo.component'; // 待办列表

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.less' ]
})
export class ContentComponent implements OnInit {
  // @ViewChild(TodoComponent) public todoList: TodoComponent; // 待办列表

  constructor() { }

  ngOnInit() {
  }

  add(title: string) {
    // this.todoList.add(title); // 待办列表
  }

}
