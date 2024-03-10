import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { ProductRatingsStarComponent } from '@rfs-atomic/product-ratings-star'

const buttons = [
	{
		label: 'Cart',
		palleteColor: 'primary',
		size: 'medium',
		disabled: false,
	},
	{
		label: 'Wishlist',
		palleteColor: 'secondary',
		size: 'medium',
		disabled: false,
	},
]
@Component({
	selector: 'rfs-atomic-product-ratings',
	standalone: true,
	imports: [CommonModule, ProductRatingsStarComponent],
	templateUrl: './product-ratings.component.html',
	styleUrl: './product-ratings.component.scss',
})
export class ProductRatingsComponent implements OnInit {
	@Input() product = {
		entity: {
			id: '2',
			name: 'Cinnamon & Clove',
			description: 'A warm, spicy scent with a hint of sweetness.',
			price: 24.99,
			sku: 'C2',
		},
		buttons,
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
		isGift: false,
		isWishListed: false,
		cartQty: 1,
		image:
			'https://res.cloudinary.com/rfsdev/image/upload/v1631069943/rfsdev/cinnamon-clove-candle.jpg',

		subscription: {
			type: 'One-Time Purchase',
			isRecurring: true,
			entity: {
				id: '2',
				name: 'Cinnamon & Clove',
				description: 'A warm, spicy scent with a hint of sweetness.',
				price: 24.99,
				sku: 'C2',
			},
		},
	}

	stars: { icon: string; color: string; size: string }[] = []

	ngOnInit(): void {
		this.stars = this.getStars(this.product)
	}

	public getStars(
		product: any
	): { icon: string; color: string; size: string }[] {
		const rounded = Math.ceil(Number(product.rating))

		if (rounded === 5) {
			return Array(5).fill({ icon: 'star', color: 'black', size: 'small' })
		} else {
			return [
				...Array(rounded).fill({ icon: 'star', color: 'black', size: 'small' }),
				...Array(5 - rounded).fill({
					icon: 'empty-star',
					color: 'black',
					size: 'small',
				}),
			]
		}
	}
}
