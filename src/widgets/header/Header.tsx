import { UiButton } from '../../shared/ui/ui-button'
import { UiLogo } from '../../shared/ui/ui-logo/ui-logo'
import { UiTextField } from '../../shared/ui/ui-text-field'
import { HeaderLayout } from './ui/HeaderLayout/HeaderLayout'

export const Header = () => {
	return (
		<HeaderLayout
			logo={<UiLogo />}
			addCar={<UiButton>Разместить обьявление</UiButton>}
			search={<UiTextField />}
		/>
	)
}
