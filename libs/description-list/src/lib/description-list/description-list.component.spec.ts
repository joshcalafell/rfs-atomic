import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionListComponent } from './description-list.component';

const testItems = [
  { label: 'Term1', value: 'Description1' },
  { label: 'Term2', value: 'Description2' },
  { label: 'Term3', value: 'Description3' },
];
describe('DescriptionListComponent', () => {
  let component: DescriptionListComponent;
  let fixture: ComponentFixture<DescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionListComponent);
    component = fixture.componentInstance;
    component.items = testItems;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of description items', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li')).toBeTruthy();
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(3);
  });

  it('should have a list of description items with the correct labels', () => {
    const compiled = fixture.nativeElement;
    const listItems = compiled.querySelectorAll('.detail-item-label');
    expect(listItems[0].textContent).toContain('Term1');
    expect(listItems[1].textContent).toContain('Term2');
    expect(listItems[2].textContent).toContain('Term3');
  });

  it('should have a list of description items with the correct values', () => {
    const compiled = fixture.nativeElement;
    const listItems = compiled.querySelectorAll('.detail-item-value');
    expect(listItems[0].textContent).toContain('Description1');
    expect(listItems[1].textContent).toContain('Description2');
    expect(listItems[2].textContent).toContain('Description3');
  });
});
