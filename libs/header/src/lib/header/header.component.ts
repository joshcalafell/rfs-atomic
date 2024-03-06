import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DesktopMenuComponent } from '@rfs-atomic/desktop-menu'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { IDesktopMenuItem } from 'libs/desktop-menu/src/lib/desktop-menu/IDesktopMenuItem'
import { IPerson } from './IPerson'

@Component({
	selector: 'rfs-atomic-header',
	standalone: true,
	imports: [CommonModule, DesktopMenuComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	@Input() user: IPerson = {} as IPerson

	@Input() title = 'INVENTORY'

	@Input() menuItems = [] as IDesktopMenuItem[]
}
