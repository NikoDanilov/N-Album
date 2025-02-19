import styles from './Home.module.scss'

// interface IPhoto {
// 	albumId: number
// 	id: number
// 	title: string
// 	url: string
// 	thumbnailUrl: string
// }

export const HomePage = () => {
	// const [data, setData] = useState<IPhoto[]>([])
	// const query = { _limit: 5 }

	// useEffect(() => {
	// 	async function getData() {
	// 		try {
	// 			let res = await apiInstance.get<IPhoto[]>('', query)
	// 			setData(res)
	// 		} catch (e) {
	// 			throw new Error(`Error ${e}`)
	// 		}
	// 	}

	// 	getData()
	// }, [])

	return (
		<div className={styles.home}>
			{/* {data &&
				data.map((item) => (
					<img
						key={item.id}
						src={item.url}
					/>
				))} */}
			Home
		</div>
	)
}
