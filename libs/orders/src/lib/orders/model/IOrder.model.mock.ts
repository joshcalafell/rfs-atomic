/* eslint-disable @nx/enforce-module-boundaries */

import { Order } from './IOrder.model'

export const randomFirstNames = [
	'Alice',
	'Bob',
	'Charlie',
	'David',
	'Eve',
	'Fred',
	'Ginny',
	'Harriet',
	'Ileana',
	'Joseph',
	'Kincaid',
	'Larry',
	'Jane',
	'Oscar',
	'Peggy',
	'Quentin',
	'Rene',
	'Steve',
	'Trent',
	'Victor',
	'Walter',
	'Xavier',
	'Yvonne',
	'Zelda',
	'Aaliyah',
	'Aaron',
	'Abigail',
	'Adam',
	'Addison',
	'Adeline',
	'Adrian',
	'Aiden',
]

export const randomLastNames = [
	'Thomas',
	'Jackson',
	'White',
	'Harris',
	'Martin',
	'Thompson',
	'Garcia',
	'Martinez',
	'Robinson',
	'Clark',
	'Rodriguez',
	'Lewis',
	'Lee',
	'Walker',
	'Hall',
	'Allen',
	'Young',
	'Hernandez',
	'King',
	'Wright',
	'Lopez',
	'Hill',
	'Scott',
	'Green',
	'Adams',
	'Baker',
	'Gonzalez',
	'Nelson',
	'Carter',
	'Mitchell',
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

export const data = JSON.stringify([
	new Order(
		'1000',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'Completed',
		17.5,
		[candleMock]
	),
	new Order(
		'1001',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'InTransit',
		13.5,
		[candleMock]
	),
	new Order(
		'1002',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'Disputed',
		12.25,
		[candleMock]
	),
	new Order(
		'1003',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'AwaitingPickup',
		27.5,
		[candleMock]
	),
	new Order(
		'2007',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'Backordered',
		21,
		[candleMock]
	),
	new Order(
		'3301',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'Completed',
		17.75,
		[]
	),
	new Order(
		'3402',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'Shipped',
		14,
		[]
	),
	new Order(
		'3406',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'AwaitingPayment',
		19.25,
		[]
	),
	new Order(
		'6880',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'DeliveryAttempted',
		15,
		[]
	),
	new Order(
		'9281',
		(Math.random() * 1000 + 9000).toString(),
		randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)] +
			' ' +
			randomLastNames[Math.floor(Math.random() * randomLastNames.length)],
		new Date(Math.random() * 1000000000000),
		'Completed',
		23.5,
		[candleMock, candleMock]
	),
])
