import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductCardHeaderComponent } from './product-card-header.component'
import { SaleTagComponent } from '@rfs-atomic/sale-tag'
import { ChipComponent } from '@rfs-atomic/chip'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { candleMock } from 'libs/product-detail/src/lib/product-detail/product.mock'

describe('ProductCardHeaderComponent', () => {
	let component: ProductCardHeaderComponent
	let fixture: ComponentFixture<ProductCardHeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductCardHeaderComponent, SaleTagComponent, ChipComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductCardHeaderComponent)
		component = fixture.componentInstance

		component.product = candleMock
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a product', () => {
		expect(component.product).toBeTruthy()
	})

	it('should have a product with a name', () => {
		expect(component.product.entity.name).toBeTruthy()
	})

	it('should have a product with a price', () => {
		expect(component.product.entity.price).toBeTruthy()
	})

	it('should have the product stock', () => {
		expect(component.product.stock).toBeTruthy()
	})
})
