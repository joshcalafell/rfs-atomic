/* eslint-disable @nx/enforce-module-boundaries */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonComponent } from '@rfs-atomic/button'
import { HashesComponent } from '@rfs-atomic/hashes'
import { UiComponent } from './ui.component'
import { DescriptionListComponent } from '@rfs-atomic/description-list'
import { ChipComponent } from '@rfs-atomic/chip'
import { ActivatedRoute } from '@angular/router'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { mockDesktopMenuItems } from 'libs/desktop-menu/src/lib/desktop-menu/IDesktopMenuItem.mock.ts'
import { HeaderComponent } from '@rfs-atomic/header'
import { RouterTestingModule } from '@angular/router/testing'
import { mockPerson } from 'libs/header/src/lib/header/IPerson'
describe('UiComponent', () => {
	let component: UiComponent
	let fixture: ComponentFixture<UiComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				UiComponent,
				ButtonComponent,
				HashesComponent,
				DescriptionListComponent,
				ChipComponent,
				HeaderComponent,
				RouterTestingModule,
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							data: {
								menuItems: mockDesktopMenuItems,
							},
						},
					},
				},
			],
		}).compileComponents()

		fixture = TestBed.createComponent(UiComponent)
		component = fixture.componentInstance
		component.button = {
			label: 'Click me',
			palleteColor: 'primary',
			disabled: false,
			size: 'medium',
			type: 'animated-arrow',
		}
		component.hashes = [
			'rock',
			'pop',
			'jazz',
			'blues',
			'country',
			'folk',
			'classical',
			'hip-hop',
			'rap',
			'reggae',
			'rhythm-and-blues',
			'soul',
			'electronic',
			'dance',
			'house',
			'techno',
		]

		component.user = mockPerson
		component.menuItems = mockDesktopMenuItems

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
