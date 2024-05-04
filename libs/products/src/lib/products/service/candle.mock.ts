const buttons = [
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
]

export const candleMock = {
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
			description: 'A warm, woody scent.',
			price: 24.99,
			sku: 'C1',
		},
	},
}
