import React from 'react'
import { Layout, theme } from 'antd';

import { fetchNews } from '../../api/FetchNews';
import { useQuery } from 'react-query';

const { Content } = Layout;

import { NewsCard } from '../../components';

import { Button } from 'antd';

export const Home = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { data, isLoading, isError } = useQuery('AppleNews', fetchNews);

	if (isLoading) {
		return <h3>Loading...</h3>
	}

	if (isError) {
		return <h3>Error fetch</h3>
	}

	if(!data) {
		return <h3>Not data</h3>
	}

	return (
		<Layout style={{ padding: '24px 0', background: colorBgContainer }}>
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<NewsCard data={data} />
				<Button>Prev</Button>
				<Button>Next</Button>
			</Content>
		</Layout>
	)
}
