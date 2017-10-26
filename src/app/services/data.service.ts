import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from '../model/Task'

@Injectable()
export class DataService implements OnInit {

  constructor(private http: HttpClient) {
  }

  results: Task[];
  url = 'http://localhost:8000/api/tasks/';

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    return this.http.get(this.url)
  }

  addTask(task: Task): void {
    const req = this.http.post(this.url, JSON.parse(JSON.stringify(task)));
    req.subscribe();
  }

  getTaskById (taskId:string) {
    return this.http.get(this.url+taskId+'/');
  }

  editTask(taskId:string, task:Task):void{
    const req = this.http.put(this.url+taskId+'/', JSON.parse(JSON.stringify(task)));
    req.subscribe();
  }
}
