import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import {
	DescriptionListComponent,
	IDescriptionListItem,
} from '@rfs-atomic/description-list'
@Component({
	selector: 'rfs-atomic-detail-group',
	standalone: true,
	imports: [CommonModule, DescriptionListComponent],
	templateUrl: './detail-group.component.html',
	styleUrl: './detail-group.component.scss',
})
export class DetailGroupComponent {
	@Input() items: IDescriptionListItem[] = []

	constructor() {
		console.log('DetailGroupComponent', this.items)
	}
}
