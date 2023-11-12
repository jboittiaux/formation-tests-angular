import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos = ['Item 1', 'Item 2', 'Item 3'];

  // constructor(protected cd: ChangeDetectorRef) {}

  constructor(protected httpClient: HttpClient) {}


  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos) => {
        this.todos = (todos as any).map((todo: any) => todo.title).slice(0, 20);
      });
  }

  public handleNewTodo(todo: string) {
    this.todos = [todo, ...this.todos];

    // this.cd.detectChanges();
  }

}
