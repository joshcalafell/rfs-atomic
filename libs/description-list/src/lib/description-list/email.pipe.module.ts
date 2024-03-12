import { NgModule, Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'emailFormatter',
})
export class EmailFormatterPipe implements PipeTransform {
	transform(value: string): string {
		// Convert the email address to lowercase.
		value = value.toLowerCase()

		// Remove any spaces from the email address.
		value = value.replace(/\s/g, '')

		// Add the `@` symbol if it is not already present.
		if (!value.includes('@')) {
			value = value + '@'
		}

		// Return the formatted email address.
		return value
	}
}

@NgModule({
	declarations: [EmailFormatterPipe],
	exports: [EmailFormatterPipe],
})
export class EmailFormatterPipeModule {}
