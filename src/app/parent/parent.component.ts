import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  newTask = '';
  inn = '';
  task: any[] = [];

  inputTask(event: Event) {
    this.newTask = (event.target as HTMLInputElement).value;
  }

  addTask(item: string) {
    this.task.push({ id: this.task.length, name: item });
    console.warn(this.task);
  }
  removeTask(id: number) {
    this.task = this.task.filter(item => item.id !== id);
    console.warn(id);
  }
}
  // [disabled]="data.value ===''"
  //*ngFor="let item of task"
