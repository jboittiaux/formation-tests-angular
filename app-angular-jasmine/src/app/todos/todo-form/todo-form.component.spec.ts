import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [FormsModule],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true,
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value from input on submit', () => {
    component.todo = 'ABC';
    // fixture.detectChanges();

    // const formEl = nativeElement.querySelector('form');

    const spy = jasmine.createSpy();
    component.onAddTodo.subscribe(spy);

    component.addTodo();

    // const buttonEl = nativeElement.querySelector('button');
    // buttonEl.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    // formEl.dispatchEvent(new SubmitEvent('submit', { bubbles: true }));

    expect(spy).toHaveBeenCalledOnceWith('ABC');
  });
});
