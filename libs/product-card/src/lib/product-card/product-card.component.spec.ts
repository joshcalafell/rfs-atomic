import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { ChipComponent } from '@rfs-atomic/chip'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import { ProductCardComponent } from './product-card.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('ProductCardComponent', () => {
	let component: ProductCardComponent
	let fixture: ComponentFixture<ProductCardComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ProductCardComponent,
				ChipComponent,
				ButtonRowComponent,
				HashesComponent,
				ProductRatingsComponent,
				DetailGroupComponent,
				RouterTestingModule,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductCardComponent)
		component = fixture.componentInstance

		// Settings (basic happy path)
		component.product = {
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
					disabled: false,
					size: 'medium',
				},
				{
					label: 'Wishlist',
					paletteColor: 'secondary',
					disabled: false,
					size: 'medium',
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
			rating: 4.5,
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

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
