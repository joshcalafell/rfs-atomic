type TGenderAffiliation =
	| 'Female'
	| 'Male'
	| 'Non-Binary'
	| 'Other'
	| 'Prefer Not To Say'

interface IAddress {
	street: string
	city: string
	state: string
	zip: string
	country: string
}

interface ISocialMedia {
	blog?: string
	codepen?: string
	discord?: string
	facebook?: string
	github?: string
	instagram?: string
	linkedin?: string
	linkedIn?: string
	other?: string
	pinterest?: string
	portfolio?: string
	skype?: string
	slack?: string
	snapchat?: string
	stackoverflow?: string
	teams?: string
	telegram?: string
	tiktok?: string
	twitter?: string
	website?: string
	whatsapp?: string
	youtube?: string
	zoom?: string
}

interface IPersonContactInfo {
	email: string
	phoneNumber: string
	socialMedia: ISocialMedia
}

interface IPersonName {
	first: string
	middle?: string
	last: string
	suffix?: string
	prefix?: string
}

interface IPersonImages {
	avatar: string
	cover: string
}

export interface IPerson {
	name: IPersonName
	contactInfo: IPersonContactInfo
	gender: TGenderAffiliation
	dateOfBirth: Date
	address: IAddress
	images: IPersonImages
}

export const mockPerson = (<IPerson>{
	name: {
		prefix: 'Miss',
		first: 'Ada',
		middle: 'Mary',
		last: 'Lovelace',
		suffix: 'Esq.',
	},
	contactInfo: {
		email: 'aloveless@someting.com',
		phoneNumber: '+13334445555',
		socialMedia: {
			github: '#',
			linkedIn: '#',
			instagram: '#',
		},
	},
	gender: 'Female',
	dateOfBirth: new Date('08/23/1981'),
	images: {
		avatar: 'https://imgur.com/EYzmAVr.png',
		cover: 'https://imgur.com/cHHHHrh.png',
	},
	address: {
		street: '29324 Applewood Blossom Lane',
		city: 'Eugene',
		state: 'Oregon',
		zip: '90210',
		country: 'United States',
	},
}) as IPerson
