//чистый fetch

const API_URL = 'https://jsonplaceholder.typicode.com/photos'

class FetchApiInstance {
	private baseUrl: string

	constructor(url: string) {
		this.baseUrl = url
	}

	async handleResponse<TResult>(response: Response): Promise<TResult> {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		try {
			return await response.json()
		} catch (error) {
			throw new Error('Error')
		}
	}

	public async get<TResult = unknown>(
		endpoint: string,
		queryParams?: Record<string, string | number>
	) {
		let url = new URL(endpoint, this.baseUrl)

		if (queryParams) {
			Object.entries(queryParams).forEach(([key, value]) => {
				url.searchParams.append(key, value.toString())
			})
		}

		let response = await fetch(url.toString(), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})

		return this.handleResponse<TResult>(response)
	}

	public async post<TResult = unknown, TData = Record<string, unknown>>(
		endpoint: string,
		body: TData
	): Promise<TResult> {
		let url = new URL(endpoint, this.baseUrl)

		const response = await fetch(url.toString(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})

		return this.handleResponse<TResult>(response)
	}
}

export const apiInstance = new FetchApiInstance(API_URL)
