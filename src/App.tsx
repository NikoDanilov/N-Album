import { UiButton } from './shared/ui/ui-button'
import { UiForm } from './shared/ui/ui-form'
import { UiLogo } from './shared/ui/ui-logo/ui-logo'
import { UiTextField } from './shared/ui/ui-text-field'

function App() {
	return (
		<div>
			<div>Hello N-bank!</div>
			<UiLogo />
			<UiForm>
				<UiTextField
					label="Login"
					error="try"
				/>
				<UiButton>s</UiButton>
			</UiForm>
		</div>
	)
}

export default App
