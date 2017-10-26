import {Component} from "@angular/core";
import { TaskDialogComponent } from '../task.dialog.component/task.dialog.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'new-task',
  templateUrl: './new.task.component.html',
})
export class NewTaskComponent {
  constructor(private dialogService:DialogService) {}

  displayAddPopup(){
    let disposable = this.dialogService.addDialog(TaskDialogComponent, {
      title:'Add new Task',
      message:'Confirm message'})
      .subscribe((isConfirmed)=>{
        if(isConfirmed) {
          // alert('accepted');
        }
        else {
          // alert('declined');
        }
      });
  }
}
