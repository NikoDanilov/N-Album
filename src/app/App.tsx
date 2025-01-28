import { Header } from '../widgets/header'
import { Layout } from './layout'

function App() {
	return (
		<Layout
			header={<Header />}
			main={<div>content</div>}
		/>
	)
}

export default App
