import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
	selector: 'rfs-atomic-settings',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './settings.component.html',
	styleUrl: './settings.component.scss',
})
export class SettingsComponent {
	title = 'Settings'
}
