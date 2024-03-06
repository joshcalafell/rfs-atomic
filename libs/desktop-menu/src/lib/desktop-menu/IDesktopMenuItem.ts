export interface IDesktopMenuItem {
	label: string
	path: string
	icon?: string
	paletteColor?: string
	children?: IDesktopMenuItem[]
}
