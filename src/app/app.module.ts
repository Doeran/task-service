import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { TaskDialogComponent } from './task.dialog.component/task.dialog.component'

import { Ng2OrderModule } from 'ng2-order-pipe';

import { TaskListComponent } from './task.list/task.list.component'
import { TaskItemComponent } from './task.item/task.item.component'
import { NewTaskComponent } from './new.task/new.task.component'
import { DataService } from './services/data.service'
import {AuthService} from "./services/auth.service";
import {AuthComponent} from "./auth.component/auth.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    NewTaskComponent,
    TaskDialogComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BootstrapModalModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule
  ],
  entryComponents: [
    TaskDialogComponent
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
