import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CardCtaComponent } from './card-cta.component'

describe('CardCtaComponent', () => {
	let component: CardCtaComponent
	let fixture: ComponentFixture<CardCtaComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CardCtaComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(CardCtaComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
