import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CardNavComponent } from './card-nav.component'

describe('CardNavComponent', () => {
	let component: CardNavComponent
	let fixture: ComponentFixture<CardNavComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CardNavComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(CardNavComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
