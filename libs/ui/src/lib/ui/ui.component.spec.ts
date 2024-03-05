import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@rfs-atomic/button';
import { HashesComponent } from '@rfs-atomic/hashes';
import { UiComponent } from './ui.component';
import { DescriptionListComponent } from '@rfs-atomic/description-list';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UiComponent,
        ButtonComponent,
        HashesComponent,
        DescriptionListComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
