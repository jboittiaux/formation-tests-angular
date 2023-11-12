import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodosComponent,
        TodoFormComponent,
        TodosListComponent,
        TodoItemComponent,
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
          providers: [
        // {
        //   provide: HttpClient,
        //   useClass: HttpClient
        // },
        // shortcut :
        // HttpClient
        // une classe FakeHttpClient développée dans le projet
        // sera injecté à la place de HttpClient
        // (idéalement elles ont les mêmes méthodes)
        // {
        //   provide: HttpClient,
        //   useClass: FakeHttpClient
        // },
        {
          provide: HttpClient,
          useValue: {
            get(url: string) {
              return of([{ title: 'WXY'}, { title: 'GHI'}])
            }
          }
        }
      ],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true,
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  // beforeEach(waitForAsync(() => {
  //   fixture = TestBed.createComponent(TodosComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   nativeElement = fixture.nativeElement;
  //   fixture.autoDetectChanges();
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // MAUVAISE OPTION Attendre 3s que la requete se termine
  // it('should show data from server', (done) => {
  //   fixture.autoDetectChanges();
  //   setTimeout(() => {
  //     expect(nativeElement.textContent).toContain('delectus aut autem');
  //     done()
  //   }, 3000);
  // })

  // IDEAL si la requete s'exécute réellement
  // on attend que les callbacks async soit exécutés grace à await fixture.whenStable();
  // que les API async qui on une fin (requete HTTP, setTimeout pas setInterval)
  // it('should show data from server', async () => {
  //   await fixture.whenStable();
  //   expect(nativeElement.textContent).toContain('delectus aut autem');
  // });

  // POSSIBLE si waitForAsync au niveau du beforeEach
  // it('should show data from server', async () => {
  //   expect(nativeElement.textContent).toContain('delectus aut autem');
  // });

  // Comment faire un double
  // Alternative 1 : recevoir le service dans son code
  it('should show data from server', async () => {

    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.returnValue(of([{title: 'ABC'}, { title: 'DEF' }]))

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;

    expect(nativeElement.textContent).toContain('ABC');
    expect(nativeElement.textContent).toContain('DEF');
  });

  // Alternative 2 : configurer le module autrement
  it('should show data from server', async () => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;

    expect(nativeElement.textContent).toContain('WXY');
    expect(nativeElement.textContent).toContain('GHI');
  });

  

});
