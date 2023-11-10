import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // vérification simple de l'état de base du component (en accord avec la valeur par défault du @Input() items)
  it('should contains default items', () => {
    expect(fixture.nativeElement.textContent).toContain('Item 1');
    expect(fixture.nativeElement.textContent).toContain('Item 2');
    expect(fixture.nativeElement.textContent).toContain('Item 3');
  });

  // test en passant un input custom
  it('should contains input items', () => {
    component.items = ['Toto', 'Titi', 'Tata'];

    fixture.detectChanges(); // obligatoire si on touche aux inputs

    expect(fixture.nativeElement.textContent).toContain('Toto');
    expect(fixture.nativeElement.textContent).toContain('Titi');
    expect(fixture.nativeElement.textContent).toContain('Tata');
  });

  it('should emit item when I click on it', () => {
    const item2El = fixture.nativeElement.querySelector('.menu div:nth-child(2)');

    // création du spy
    const spy = jasmine.createSpy();
    component.selectedChange.subscribe(spy);

    // simulation du clique sur un item du component
    item2El.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    // on check que le spy a bien été appelé (et donc le selectedChange())
    expect(spy).toHaveBeenCalledOnceWith('Item 2');
  });
});
