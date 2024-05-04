import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { ChipComponent } from '@rfs-atomic/chip'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import { ProductCardComponent } from './product-card.component'
import { RouterTestingModule } from '@angular/router/testing'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductCardHeaderComponent } from '@rfs-atomic/product-card-header'
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
				ProductCardHeaderComponent,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductCardComponent)
		component = fixture.componentInstance

		// Settings (basic happy path)
		component.product = {
			entity: {
				id: '1',
				name: 'Cedarwood & Vanilla',
				description: 'A warm, woody scent.',
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
			isOnSale: true,
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
					description: 'A warm, woody scent.',
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

	it('should have a product', () => {
		expect(component.product).toBeTruthy()
	})

	it('should have a product with a name', () => {
		expect(component.product.entity.name).toBeTruthy()
	})

	it('should have a product with a description', () => {
		expect(component.product.entity.description).toBeTruthy()
	})

	it('should have a product with a price', () => {
		expect(component.product.entity.price).toBeTruthy()
	})

	it('should have a product with a SKU', () => {
		expect(component.product.entity.sku).toBeTruthy()
	})

	it('should have a product with a brand', () => {
		expect(component.product.brand).toBeTruthy()
	})

	it('should have a product with a color', () => {
		expect(component.product.color).toBeTruthy()
	})

	it('should have a product with a material', () => {
		expect(component.product.material).toBeTruthy()
	})

	it('should have a product with dimensions', () => {
		expect(component.product.dimensions).toBeTruthy()
	})

	it('should have a product with a weight', () => {
		expect(component.product.weight).toBeTruthy()
	})

	it('should have a product with a fragrance', () => {
		expect(component.product.fragrance).toBeTruthy()
	})

	it('should have a product with a size', () => {
		expect(component.product.size).toBeTruthy()
	})

	it('should have a product with a burn time', () => {
		expect(component.product.burnTime).toBeTruthy()
	})

	it('should have a product with a scent', () => {
		expect(component.product.scent).toBeTruthy()
	})

	it('should have a product with a type', () => {
		expect(component.product.type).toBeTruthy()
	})

	it('should have a product with a shape', () => {
		expect(component.product.shape).toBeTruthy()
	})

	it('should have a product with a wick type', () => {
		expect(component.product.wickType).toBeTruthy()
	})

	it('should have a product with a wick material', () => {
		expect(component.product.wickMaterial).toBeTruthy()
	})

	it('should have a product with a category', () => {
		expect(component.product.category).toBeTruthy()
	})

	it('should have a product with a sub category', () => {
		expect(component.product.subCategory).toBeTruthy()
	})

	it('should have a product with tags', () => {
		expect(component.product.tags).toBeTruthy()
	})

	it('should have a product with a rating', () => {
		expect(component.product.rating).toBeTruthy()
	})

	it('should have a product with reviews', () => {
		expect(component.product.reviews).toBeTruthy()
	})

	it('should have a product with stock', () => {
		expect(component.product.stock).toBeTruthy()
	})

	it('should have a product with isOnSale', () => {
		expect(component.product.isOnSale).toBeTruthy()
	})

	it('should have a product with cartQty', () => {
		expect(component.product.cartQty).toBeTruthy()
	})

	it('should have a product with an image', () => {
		expect(component.product.image).toBeTruthy()
	})

	it('should have a product with a subscription', () => {
		expect(component.product.subscription).toBeTruthy()
	})

	it('should have a product with buttons', () => {
		expect(component.product.buttons).toBeTruthy()
	})

	it('should have a product with a subscription type', () => {
		expect(component.product.subscription.type).toBeTruthy()
	})

	it('should have a product with a subscription isRecurring', () => {
		expect(component.product.subscription.isRecurring).toBeTruthy()
	})

	it('should have a product with a subscription entity', () => {
		expect(component.product.subscription.entity).toBeTruthy()
	})

	it('should have a product with a subscription entity id', () => {
		expect(component.product.subscription.entity.id).toBeTruthy()
	})

	it('should have a product with a subscription entity name', () => {
		expect(component.product.subscription.entity.name).toBeTruthy()
	})

	it('should have a product with a subscription entity description', () => {
		expect(component.product.subscription.entity.description).toBeTruthy()
	})

	it('should have a product with a subscription entity price', () => {
		expect(component.product.subscription.entity.price).toBeTruthy()
	})

	it('should have a product with a subscription entity sku', () => {
		expect(component.product.subscription.entity.sku).toBeTruthy()
	})

	it('should have a product with buttons', () => {
		expect(component.product.buttons).toBeTruthy()
	})
})
