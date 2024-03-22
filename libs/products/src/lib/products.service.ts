import { Injectable } from '@angular/core'
import { productsMock } from './IProduct.mock'
import { of } from 'rxjs'

interface IEntity {
	id: string
	name: string
	description: string
	price: number
	currency: string
	sku: string
}

interface IProductSubscription {
	type: string
	entity: IEntity
	isRecurring: boolean
}

interface IProductButton {
	label: string
	paletteColor?:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'danger'
		| 'warning'
		| 'success'
		| 'info'
		| 'light'
		| 'dark'
		| 'link'
	disabled?: boolean
	size?: 'medium' | 'large' | 'small'
}

interface IProduct {
	entity: IEntity
	image: string
	category: string
	subCategory: string
	tags: string[]
	rating: number
	reviews: number
	stock: number
	isOnSale: boolean
	saleStart: string
	saleEnd: string
	isFeatured: boolean
	isTopSeller: boolean
	isNew: boolean
	isBestSeller: boolean
	isSale: boolean
	isAvailable: boolean
	isOutOfStock: boolean
	isComingSoon: boolean
	isDiscontinued: boolean
	isLimited: boolean
	isSoldOut: boolean
	isBackOrder: boolean
	isPreOrder: boolean
	isWishListed: boolean
	cartQty: number
	isGift: boolean
	subscription: IProductSubscription
	buttons: IProductButton[]
}

export interface ICandleProduct extends IProduct {
	fragrance: string
	color: string
	size: string
	burnTime: string
	scent: string
	brand: string
	type: string
	material: string
	shape: string
	weight: string
	dimensions: string
	wickType: string
	wickMaterial: string
}

export const testCandles = []

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	mockProductService = {
		getProducts() {
			return of(productsMock)
		},

		cart: (<never>[]) as ICandleProduct[],
		wishlist: (<never>[]) as ICandleProduct[],

		addToCart(product: ICandleProduct) {
			this.cart.push(product)
		},

		addToWishlist(product: ICandleProduct) {
			console.log('Added to wishlist', product)
		},

		getProductById(id: number) {
			return of(
				productsMock.find((product) => product.entity.id === new String(id))
			) // eslint-disable-line
		},
	}

	// Mock the GET request for a single Product
	mockSingleProductService = {
		getProductById(id: number) {
			return of(
				productsMock.find((product) => product.entity.id === new String(id))
			) // eslint-disable-line
		},
	}
}
