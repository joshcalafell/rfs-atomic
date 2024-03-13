import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductCardHeaderComponent } from './product-card-header.component'

describe('ProductCardHeaderComponent', () => {
	let component: ProductCardHeaderComponent
	let fixture: ComponentFixture<ProductCardHeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductCardHeaderComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductCardHeaderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
