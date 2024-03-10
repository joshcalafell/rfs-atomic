import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DescriptionListComponent } from '@rfs-atomic/description-list'
import { DetailGroupComponent } from './detail-group.component'

describe('DetailGroupComponent', () => {
	let component: DetailGroupComponent
	let fixture: ComponentFixture<DetailGroupComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DetailGroupComponent, DescriptionListComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(DetailGroupComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render description list', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('.description-list')).toBeTruthy()
	})
})
