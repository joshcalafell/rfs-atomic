import { Injectable } from '@angular/core'
import { Order } from '../model/IOrder.model'
import { data } from '../model/IOrder.model.mock'

@Injectable({
	providedIn: 'root',
})
export class OrdersService {
	items: Order[] = JSON.parse(data) // Temp for now...
	cart: Order[] = []
}
