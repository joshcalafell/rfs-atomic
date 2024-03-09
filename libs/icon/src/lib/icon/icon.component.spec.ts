import { ComponentFixture, TestBed } from '@angular/core/testing'
import { IconComponent } from './icon.component'

describe('IconComponent', () => {
	let component: IconComponent
	let fixture: ComponentFixture<IconComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [IconComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(IconComponent)
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
