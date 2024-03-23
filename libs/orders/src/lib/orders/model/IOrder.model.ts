/* eslint-disable @nx/enforce-module-boundaries */
import { ICandleProduct } from 'libs/products/src/lib/products.service'

export enum OrderStatus {
	Processing = 1,
	InTransit = 2,
	Fulfilled = 3,
	Pending = 4,
	Cancelled = 5,
	Returned = 6,
	Delivered = 7,
	AwaitingPayment = 8,
	AwaitingPickup = 9,
	AwaitingShipment = 10,
	Completed = 11,
	Closed = 12,
	Shipped = 13,
	Disputed = 14,
	VerificationRequired = 15,
	PartiallyShipped = 16,
	Refunded = 17,
}

export class Order {
	constructor(
		public id: string,
		public sku: string,
		public customer_name: string,
		public order_date: Date,
		public order_status: string,
		public order_total: number,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		public order_inventory: any[]
	) {
		this.id = id
		this.sku = sku
		this.customer_name = customer_name
		this.order_date = order_date
		this.order_status = order_status
		this.order_total = order_total
		this.order_inventory = order_inventory
	}
}
