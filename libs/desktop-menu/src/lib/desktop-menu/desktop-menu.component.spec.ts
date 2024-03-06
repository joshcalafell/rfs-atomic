import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DesktopMenuComponent } from './desktop-menu.component'
import { ActivatedRoute } from '@angular/router'
import { mockDesktopMenuItems } from './IDesktopMenuItem.mock.ts'
describe('DesktopMenuComponent', () => {
	let component: DesktopMenuComponent
	let fixture: ComponentFixture<DesktopMenuComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DesktopMenuComponent],
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
		fixture = TestBed.createComponent(DesktopMenuComponent)
		component = fixture.componentInstance
		component.menuItems = mockDesktopMenuItems
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
