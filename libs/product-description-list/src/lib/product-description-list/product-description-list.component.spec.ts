import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductDescriptionListComponent } from './product-description-list.component'

describe('ProductDescriptionListComponent', () => {
	let component: ProductDescriptionListComponent
	let fixture: ComponentFixture<ProductDescriptionListComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductDescriptionListComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductDescriptionListComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
