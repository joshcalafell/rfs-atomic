import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { ButtonComponent } from '@rfs-atomic/button';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiComponent, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
