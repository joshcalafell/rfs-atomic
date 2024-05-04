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
			entity: {
				id: '2',
				name: 'Cinnamon & Clove',
				description: 'A warm, spicy scent.',
				price: 24.99,
				sku: 'C2',
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
			fragrance: 'Cinnamon & Clove',
			size: '3.5" x 3.5" x 3.5"',
			burnTime: '60 hours',
			scent: 'Spicy, Sweet',
			type: 'Candle',
			shape: 'Cylinder',
			wickType: 'Cotton',
			wickMaterial: 'Cotton',
			category: 'Candles',
			subCategory: 'Candle',
			tags: ['Cinnamon', 'Clove', 'Soy Wax', 'Brown', 'Candle'],
			rating: 2.5,
			reviews: 23,
			stock: 100,
			isOnSale: false,
			saleStart: '',
			saleEnd: '',
			cartQty: 1,
			image:
				'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cinnamon-clove-candle.jpg',

			subscription: {
				type: 'One-Time Purchase',
				isRecurring: true,
				entity: {
					id: '2',
					name: 'Cinnamon & Clove',
					description: 'A warm, spicy scent.',
					price: 24.99,
					sku: 'C2',
				},
			},
		}

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should have a rating of 2.5', () => {
		expect(component.product.rating).toEqual(2.5)
	})

	it('should have 23 reviews', () => {
		expect(component.product.reviews).toEqual(23)
	})

	it('should have a stock of 100', () => {
		expect(component.product.stock).toEqual(100)
	})

	it('should have a cart quantity of 1', () => {
		expect(component.product.cartQty).toEqual(1)
	})

	it('should have a price of 24.99', () => {
		expect(component.product.entity.price).toEqual(24.99)
	})

	it('should have a subscription type of One-Time Purchase', () => {
		expect(component.product.subscription.type).toEqual('One-Time Purchase')
	})

	it('should have an id of 2', () => {
		expect(component.product.entity.id).toEqual('2')
	})

	it('should have a name of Cinnamon & Clove', () => {
		expect(component.product.entity.name).toEqual('Cinnamon & Clove')
	})

	it('should have a description of A warm, spicy scent.', () => {
		expect(component.product.entity.description).toEqual('A warm, spicy scent.')
	})

	it('should have a sku of C2', () => {
		expect(component.product.entity.sku).toEqual('C2')
	})

	it('should have a primary button with label Cart', () => {
		expect(component.product.buttons[0].label).toEqual('Cart')
	})

	it('should have a primary button with paletteColor primary', () => {
		expect(component.product.buttons[0].paletteColor).toEqual('primary')
	})

	it('should have a primary button with size medium', () => {
		expect(component.product.buttons[0].size).toEqual('medium')
	})

	it('should have a primary button with disabled false', () => {
		expect(component.product.buttons[0].disabled).toEqual(false)
	})

	it('should have a secondary button with label Wishlist', () => {
		expect(component.product.buttons[1].label).toEqual('Wishlist')
	})

	it('should have a secondary button with paletteColor secondary', () => {
		expect(component.product.buttons[1].paletteColor).toEqual('secondary')
	})

	it('should have a secondary button with size medium', () => {
		expect(component.product.buttons[1].size).toEqual('medium')
	})

	it('should have a secondary button with disabled false', () => {
		expect(component.product.buttons[1].disabled).toEqual(false)
	})

	it('should have a brand of RFS', () => {
		expect(component.product.brand).toEqual('RFS')
	})

	it('should have a color of Brown', () => {
		expect(component.product.color).toEqual('Brown')
	})

	it('should have a material of Soy Wax', () => {
		expect(component.product.material).toEqual('Soy Wax')
	})

	it('should have dimensions of 3.5" x 3.5" x 3.5"', () => {
		expect(component.product.dimensions).toEqual('3.5" x 3.5" x 3.5"')
	})

	it('should have a weight of 12 oz', () => {
		expect(component.product.weight).toEqual('12 oz')
	})

	it('should have a fragrance of Cinnamon & Clove', () => {
		expect(component.product.fragrance).toEqual('Cinnamon & Clove')
	})

	it('should have a size of 3.5" x 3.5" x 3.5"', () => {
		expect(component.product.size).toEqual('3.5" x 3.5" x 3.5"')
	})

	it('should have a burn time of 60 hours', () => {
		expect(component.product.burnTime).toEqual('60 hours')
	})

	it('should have a scent of Spicy, Sweet', () => {
		expect(component.product.scent).toEqual('Spicy, Sweet')
	})

	it('should have a type of Candle', () => {
		expect(component.product.type).toEqual('Candle')
	})

	it('should have a shape of Cylinder', () => {
		expect(component.product.shape).toEqual('Cylinder')
	})

	it('should have a wick type of Cotton', () => {
		expect(component.product.wickType).toEqual('Cotton')
	})

	it('should have a wick material of Cotton', () => {
		expect(component.product.wickMaterial).toEqual('Cotton')
	})

	it('should have a category of Candles', () => {
		expect(component.product.category).toEqual('Candles')
	})

	it('should have a sub category of Candle', () => {
		expect(component.product.subCategory).toEqual('Candle')
	})

	it('should have tags of Cinnamon, Clove, Soy Wax, Brown, Candle', () => {
		expect(component.product.tags).toEqual([
			'Cinnamon',
			'Clove',
			'Soy Wax',
			'Brown',
			'Candle',
		])
	})

	it('should have an image of https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cinnamon-clove-candle.jpg', () => {
		expect(component.product.image).toEqual(
			'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cinnamon-clove-candle.jpg'
		)
	})

	it('should have a stock of 100', () => {
		expect(component.product.stock).toEqual(100)
	})

	it('should have a sale start of an empty string', () => {
		expect(component.product.saleStart).toEqual('')
	})

	it('should have a sale end of an empty string', () => {
		expect(component.product.saleEnd).toEqual('')
	})

	it('should have a cart quantity of 1', () => {
		expect(component.product.cartQty).toEqual(1)
	})

	it('should have a subscription type of One-Time Purchase', () => {
		expect(component.product.subscription.type).toEqual('One-Time Purchase')
	})

	it('should have a recurring subscription', () => {
		expect(component.product.subscription.isRecurring).toEqual(true)
	})

	it('should have a subscription id of 2', () => {
		expect(component.product.subscription.entity.id).toEqual('2')
	})

	it('should have a subscription name of Cinnamon & Clove', () => {
		expect(component.product.subscription.entity.name).toEqual(
			'Cinnamon & Clove'
		)
	})

	it('should have a subscription description of A warm, spicy scent.', () => {
		expect(component.product.subscription.entity.description).toEqual(
			'A warm, spicy scent.'
		)
	})

	it('should have a subscription price of 24.99', () => {
		expect(component.product.subscription.entity.price).toEqual(24.99)
	})
})
