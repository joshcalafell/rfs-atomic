import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductsComponent } from './products.component'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductCardComponent } from '@rfs-atomic/product-card'
import { Observable, of } from 'rxjs'
import { productsMock } from './service/products.mock'
import { ICandleProduct } from './service/products.service'

describe('ProductsComponent', () => {
	let component: ProductsComponent
	let fixture: ComponentFixture<ProductsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsComponent, ProductCardComponent],
			providers: [
				{
					provide: 'ProductsService',
					useValue: {
						mockProductService: {
							getProducts: () => {
								return of(productsMock)
							},
						},
					},
				},
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductsComponent)
		component = fixture.componentInstance

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
