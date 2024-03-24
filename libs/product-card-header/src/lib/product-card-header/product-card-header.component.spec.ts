import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductCardHeaderComponent } from './product-card-header.component'
import { SaleTagComponent } from '@rfs-atomic/sale-tag'
import { ChipComponent } from '@rfs-atomic/chip'

export const candleMock = {
	entity: {
		id: '1',
		name: 'Cedarwood & Vanilla',
		description: 'A warm, woody scent with a hint of sweetness.',
		price: 24.99,
		sku: 'C1',
	},
	buttons: [
		{
			label: 'Cart',
			paletteColor: 'primary',
			size: 'medium',
			disabled: false,
		},
		{
			label: 'Wishlist',
			paletteColor: 'secondary',
			size: 'medium',
			disabled: false,
		},
	],
	brand: 'RFS',
	color: 'Brown',
	material: 'Soy Wax',
	dimensions: '3.5" x 3.5" x 3.5"',
	weight: '12 oz',
	fragrance: 'Cedarwood & Vanilla',
	size: '3.5" x 3.5" x 3.5"',
	burnTime: '60 hours',
	scent: 'Woody, Sweet',
	type: 'Candle',
	shape: 'Cylinder',
	wickType: 'Cotton',
	wickMaterial: 'Cotton',
	category: 'Candles',
	subCategory: 'Candle',
	tags: ['Cedarwood', 'Vanilla', 'Soy Wax', 'Brown', 'Candle'],
	rating: 5,
	reviews: 100,
	stock: 100,
	isOnSale: false,
	saleStart: '',
	saleEnd: '',
	cartQty: 1,
	image:
		'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cedarwood-vanilla-candle.jpg',
	subscription: {
		type: 'One-Time Purchase',
		isRecurring: true,
		entity: {
			id: '1',
			name: 'Cedarwood & Vanilla',
			description: 'A warm, woody scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C1',
		},
	},
}

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
