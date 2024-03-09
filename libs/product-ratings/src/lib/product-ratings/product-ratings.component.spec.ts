import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductRatingsComponent } from './product-ratings.component'
import { ProductRatingsStarComponent } from '@rfs-atomic/product-ratings-star'

describe('ProductRatingsComponent', () => {
	let component: ProductRatingsComponent
	let fixture: ComponentFixture<ProductRatingsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductRatingsComponent, ProductRatingsStarComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductRatingsComponent)
		component = fixture.componentInstance
		component.product = {
			id: '1',
			name: 'Cedarwood & Vanilla',
			description: 'A warm, woody scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C1',
			rating: 5,
			reviews: 100,
			stock: 100,
			isOnSale: false,
			saleStart: '',
			saleEnd: '',
			isFeatured: false,
			isTopSeller: false,
			isNew: false,
			isBestSeller: false,
			isSale: false,
			isAvailable: true,
			isOutOfStock: false,
			isComingSoon: false,
			isDiscontinued: false,
			isLimited: false,
			isSoldOut: false,
			isBackOrder: false,
			isPreOrder: false,
		}

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
