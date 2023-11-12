import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListComponent } from './todos-list.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosListComponent, TodoItemComponent],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true,
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show items',() => {
    component.todos = ['My Item', 'My Other Item'];
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('My Item')
    expect(fixture.nativeElement.textContent).toContain('My Other Item')
  })
});
