import { NgModule, Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'addressFormat',
})
export class AddressFormatPipe implements PipeTransform {
	transform(address: string): string {
		const addressParts = address.split('\n')
		return addressParts.join(' ')
	}
}

@NgModule({
	declarations: [AddressFormatPipe],
	exports: [AddressFormatPipe],
})
export class AddressFormatPipeModule {}
