import React from 'react'

import { Layout, theme } from 'antd';
const { Content } = Layout;

export const Favorites = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ padding: '24px 0', background: colorBgContainer }}>
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				Favorites
			</Content>
		</Layout>
	)
}
