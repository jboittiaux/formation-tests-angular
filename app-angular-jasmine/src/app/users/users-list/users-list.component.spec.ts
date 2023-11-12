import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersListComponent } from './users-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true,
    }).compileComponents();
  });

  beforeEach(() => {
    const userService = TestBed.inject(UserService);
    spyOn(userService, 'getList$').and.returnValue(of([{id: 1, name: "Toto"}, { id: 2, name: 'Titi' }]))

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data from userService (spyOn)', () => {

    expect(nativeElement.textContent).toContain('Toto');
    expect(nativeElement.textContent).toContain('Titi');
  });
});
