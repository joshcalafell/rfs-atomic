import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
  	// Settings (basic happy path)
		component.label = 'Test'
		component.color = 'primary'
    component.size = 'small'
		// Detect changes before each test...
		fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a label', () => {
		expect(component.label).toBeDefined()
	})

	it('should have a color', () => {
		expect(component.color).toBeDefined()
	})

  it('should have a chip with the correct label', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div.ui-chip span.ui-chip-text').textContent).toContain('Test');
  })

  it('should have a chip with the correct color', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div.ui-chip').classList.contains('ui-chip--primary')).toBeTruthy();
  })

});
