import { NgModule, Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
	transform(value: string): string {
		if (!value) {
			return ''
		}
		const phoneNumber = value.replace(/[^0-9]/g, '')
		if (phoneNumber.length < 10) {
			return phoneNumber
		}
		return `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(
			3,
			6
		)}-${phoneNumber.substring(6)}`
	}
}

@NgModule({
	declarations: [PhoneNumberPipe],
	exports: [PhoneNumberPipe],
})
export class PhoneNumberPipeModule {}
