import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HashesComponent } from './hashes.component';

describe('HashesComponent', () => {
  let component: HashesComponent;
  let fixture: ComponentFixture<HashesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HashesComponent);
    component = fixture.componentInstance;
    const hashes = ['hash1', 'hash2', 'hash3'];
    component.hashes = hashes;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of hashes', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('ul')).toBeTruthy();
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(3);
  });
});
