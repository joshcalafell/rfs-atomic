import { ComponentFixture, TestBed } from '@angular/core/testing'
import { OrdersComponent } from './orders.component'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { OrdersService } from './service/orders.service'

describe('OrdersComponent', () => {
	let component: OrdersComponent
	let fixture: ComponentFixture<OrdersComponent>

	const fakeActivatedRoute = {
		snapshot: {
			data: {},
			params: {},
			queryParams: {},
			fragment: {},
			outlet: {},
		},
	} as ActivatedRoute

	const mockService = {
		items: [
			{
				id: 1,
				name: 'Candle',
				description: 'A candle',
				price: 10,
				quantity: 1,
				image: 'https://via.placeholder.com/150',
			},
		],
		cart: [
			{
				id: 1,
				name: 'Candle',
				description: 'A candle',
				price: 10,
				quantity: 1,
				image: 'https://via.placeholder.com/150',
			},
		],
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OrdersComponent, RouterTestingModule.withRoutes([])],
			providers: [
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
				{ provide: OrdersService, useValue: mockService },
			],
		}).compileComponents()
		fixture = TestBed.createComponent(OrdersComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
