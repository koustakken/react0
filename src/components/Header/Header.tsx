import React from 'react'
import type { MenuProps } from 'antd';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

import { useNavigate } from'react-router-dom';

const nav: MenuProps['items'] = [{key: '/', label: 'Home'}, {key: '/favorites', label: 'Favorites'}]

export const CustomHeader = () => {
	const navigate = useNavigate();

	return (
		<Header style={{ display: 'flex', alignItems: 'center' }}>
			<Menu
				onClick={({ key }) => { navigate(key) }}
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={[window.location.pathname]}
				items={nav}
			/>
		</Header>
	)
}
