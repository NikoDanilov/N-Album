import { RouteObject } from 'react-router'
import { HomePage } from '../../pages/Home'

export const router: RouteObject[] = [
	{ id: '0', path: '/', element: <HomePage /> },
	{ id: '1', path: '/:id', element: <div>id</div> }
]
