import { Link } from 'react-router'
import { UiLogo } from '../../shared/ui/ui-logo/ui-logo'
import { UiTextField } from '../../shared/ui/ui-text-field'
import { HeaderLayout } from './ui/HeaderLayout/HeaderLayout'

export const Header = () => {
	return (
		<HeaderLayout
			logo={<UiLogo />}
			addCar={<Link to="/34">Разместить обьявление</Link>}
			search={<UiTextField />}
		/>
	)
}
