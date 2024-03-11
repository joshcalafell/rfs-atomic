import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonRowComponent } from '@rfs-atomic/button-row'
import { DetailGroupComponent } from '@rfs-atomic/detail-group'
import { HashesComponent } from '@rfs-atomic/hashes'
import { ProductRatingsComponent } from '@rfs-atomic/product-ratings'
import { of } from 'rxjs'
import { ProductDetailComponent } from './product-detail.component'
import { candleMock } from './product.mock'

describe('ProductDetailComponent', () => {
	let component: ProductDetailComponent
	let fixture: ComponentFixture<ProductDetailComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ProductDetailComponent,
				HashesComponent,
				ButtonRowComponent,
				DetailGroupComponent,
				ProductRatingsComponent,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ProductDetailComponent)
		component = fixture.componentInstance

		component.product$ = of(candleMock)
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should render product name', () => {
		const compiled = fixture.nativeElement
		expect(compiled.querySelector('.product-name')).toBeTruthy()
	})
})
