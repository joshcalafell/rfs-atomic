export interface IEntity {
	id: string
	name: string
	description: string
	price: number | string
	sku: string
}

export interface IProduct {
	entity: IEntity
	buttons: [
		{
			label: 'Cart'
			paletteColor: 'primary'
			disabled: false
			size: 'medium'
		},
		{
			label: 'Wishlist'
			paletteColor: 'secondary'
			disabled: false
			size: 'medium'
		}
	]
	brand: string
	color: string
	material: string
	dimensions: string
	weight: string
	fragrance: string
	size: string
	burnTime: string
	scent: string
	type: string
	shape: string
	wickType: string
	wickMaterial: string
	category: string
	subCategory: string
	tags: string[]
	rating: number
	reviews: number
	stock: number
	isOnSale: boolean
	saleStart?: string
	saleEnd?: string
	cartQty: number
	image: string
	subscription: {
		type: string
		isRecurring: boolean
		entity: IEntity
	}
}
