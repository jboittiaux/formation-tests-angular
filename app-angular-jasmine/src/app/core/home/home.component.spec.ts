import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let nativeElement: HTMLElement;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [SharedModule],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true,
    }).compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Welcome', () => {
    expect(nativeElement.textContent).toContain('Welcome');
  });
});
