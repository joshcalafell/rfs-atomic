import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DescriptionListComponent } from './description-list.component'

const testItems = [
	{ label: 'Term1', value: 'Description1' },
	{ label: 'Term2', value: 'Description2' },
	{ label: 'Term3', value: 'Description3' },
]
describe('DescriptionListComponent', () => {
	let component: DescriptionListComponent
	let fixture: ComponentFixture<DescriptionListComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DescriptionListComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(DescriptionListComponent)
		component = fixture.componentInstance
		component.item = testItems[0]
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
