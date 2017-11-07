import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Task} from '../model/Task'
import {Subscription} from "rxjs";
import {AuthService} from "../services/auth.service";
import {TaskDialogComponent} from "../task.dialog.component/task.dialog.component";
import {DialogService} from "ng2-bootstrap-modal";

@Component({
  selector: 'task-item',
  templateUrl: './task.item.component.html',
  styleUrls: ['./task.item.component.css']
})
export class TaskItemComponent implements OnInit {

  tasks;
  subscription: Subscription;
  order: string = '_userName';
  reverse: boolean = false;

  constructor(private dataService: DataService,
              private authService: AuthService,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.subscription = this.dataService.getTasks().subscribe(data => {
      this.tasks = data["tasks"];
    });
  }

  editTask(task) {
    if (this.authService.isLoggedIn) {
      let editPopup = this.dialogService.addDialog(TaskDialogComponent, {
        title: 'Edit new Task',
        message: 'Confirm message',
        taskId: task.id
      })
        .subscribe((isConfirmed) => {
          if (isConfirmed) {
          }
          else {
          }
        });
    }
  }

  setOrder(order) {
    if (this.order === order) {
      this.reverse = !this.reverse;
    } else {
      this.order = order
    }
  }
}
