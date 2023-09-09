import axios from 'axios'
const url = 'https://newsapi.org/v2/everything?q=Apple&pageSize=6&apiKey=6860e2ccccaa4a18a71a394e9aba8dce'

export async function fetchNews() {
	const { data } = await axios.get(url);
	return data.articles;
}