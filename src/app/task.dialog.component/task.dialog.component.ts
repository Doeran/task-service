import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../services/data.service";
import {Task} from "../model/Task";
import {Subscription} from "rxjs";
import {AuthService} from "../services/auth.service";

export interface ConfirmModel {
  title: string;
  message: string;
  taskId: string;
}

@Component({
  selector: 'confirm',
  templateUrl: './task.dialog.component.html',
  styleUrls: ['./task.dialog.component.css']
})
export class TaskDialogComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit{
  taskId: string;
  title: string;
  message: string;
  subscription: Subscription;
  editTask;

  taskForm = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
    userText: new FormControl(),
    taskStatus: new FormControl()
  });

  constructor(dialogService: DialogService,
              private fb: FormBuilder,
              private dataService: DataService,
              public authService:AuthService) {
    super(dialogService);
  }

  ngOnInit () {
    console.log(this.taskId);
    if(this.taskId) {
      this.subscription = this.dataService.getTaskById(this.taskId).subscribe(data => {
        this.editTask = data;
        this.createForm();
      })
    } else {
      this.createForm();
    }
  }

  createForm() {
    this.taskForm = this.fb.group({
      userName: this.editTask ? this.editTask._userName : '',
      userEmail: this.editTask ? this.editTask._userEmail : '',
      userText: this.editTask ? this.editTask._userText : '',
      taskStatus: this.editTask ? this.editTask._taskStatus : false
    });
    if (this.authService.isLoggedIn) {
      this.taskForm.markAsPristine()
    }
  }

  confirm() {
    this.result = true;
    this.close();
  }

  onSubmit() {
    let task = new Task();
    task.userName = this.taskForm.getRawValue().userName;
    task.userEmail = this.taskForm.getRawValue().userEmail;
    task.userText = this.taskForm.getRawValue().userText;
    task.taskStatus = this.taskForm.getRawValue().taskStatus;
    task.userImageId = 34534534534;
    if(this.taskId) {
     this.dataService.editTask(this.taskId, task)
      this.editTask = ''
    }else {
      this.dataService.addTask(task);
    }
    this.close();
  }

  private fileChange(event: any) {
    let reader = new FileReader();
    let imageBlob: any;
    reader.onload = (fileReadEvent: any) => {
      let image = new Image();
      image.addEventListener('load', (e) => {
        console.log(event.target.width);
        console.log(event.target.height);

      });
      imageBlob = fileReadEvent.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}
