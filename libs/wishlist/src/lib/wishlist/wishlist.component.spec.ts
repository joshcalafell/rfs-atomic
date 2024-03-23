import { ComponentFixture, TestBed } from '@angular/core/testing'
import { WishlistComponent } from './wishlist.component'
import { WishlistItemComponent } from '@rfs-atomic/wishlist-item'

describe('WishlistComponent', () => {
	let component: WishlistComponent
	let fixture: ComponentFixture<WishlistComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WishlistComponent, WishlistItemComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(WishlistComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
