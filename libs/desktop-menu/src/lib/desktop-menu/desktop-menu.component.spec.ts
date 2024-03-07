import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DesktopMenuComponent } from './desktop-menu.component'
import { ActivatedRoute } from '@angular/router'
import { mockDesktopMenuItems } from './IDesktopMenuItem.mock.ts'
import { RouterTestingModule } from '@angular/router/testing'
import { LinkComponent } from '@rfs-atomic/link'

describe('DesktopMenuComponent', () => {
	let component: DesktopMenuComponent
	let fixture: ComponentFixture<DesktopMenuComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DesktopMenuComponent, RouterTestingModule, LinkComponent],
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
