import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import { Header } from '../widgets/header'
import { Layout } from './layout'
import { router } from './routes/router'

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Layout
							header={<Header />}
							main={<Outlet />}
						/>
					}
				>
					{router.map((route) => (
						<Route
							element={route.element}
							key={route.id}
							path={route.path}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export function UnWrappedApp() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout
						header={<Header />}
						main={<Outlet />}
					/>
				}
			>
				{router.map((route) => (
					<Route
						element={route.element}
						key={route.id}
						path={route.path}
					/>
				))}
			</Route>
		</Routes>
	)
}
