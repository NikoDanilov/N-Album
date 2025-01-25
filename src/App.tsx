import { UiButton } from './shared/ui/ui-button'
import { UiTextField } from './shared/ui/ui-text-field'

function App() {
	return (
		<div>
			<div>Hello N-bank!</div>
			<UiTextField
				label="Login"
				error="try"
			/>
			<UiButton>s</UiButton>
		</div>
	)
}

export default App
