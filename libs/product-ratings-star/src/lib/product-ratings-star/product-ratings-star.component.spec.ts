import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductRatingsStarComponent } from './product-ratings-star.component'

describe('ProductRatingsStarComponent', () => {
	let component: ProductRatingsStarComponent
	let fixture: ComponentFixture<ProductRatingsStarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductRatingsStarComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductRatingsStarComponent)
		component = fixture.componentInstance

		component.icon = {
			icon: 'star',
			color: 'black',
			size: 'medium',
		}

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
