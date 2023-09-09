import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

import {Route, Routes, useNavigate} from'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const nav: MenuProps['items'] = [{key: '/', label: 'Home'}, {key: '/favorites', label: 'Favorites'}]

const sub: MenuProps['items'] = []

const App: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const navigate = useNavigate();

	return (
		<Layout>
			<Header style={{ display: 'flex', alignItems: 'center' }}>
				<Menu onClick={({key})=>{navigate(key)}} theme="dark" mode="horizontal" defaultSelectedKeys={['Home']} items={nav} />
			</Header>
			<Routes>
				<Route path="/" element={<Content>
					<Layout style={{ padding: '24px 0', background: colorBgContainer }}>
						<Sider style={{ background: colorBgContainer }} width={200}>
							<Menu
								mode="inline"
								defaultSelectedKeys={['Tops']}
								style={{ height: '100%' }}
								items={sub}
							/>
						</Sider>
						<Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
					</Layout>
				</Content>} />
				<Route path="/favorites" element={<Layout style={{ padding: '24px 0', background: colorBgContainer }}><Content style={{ padding: '0 24px', minHeight: 280 }}>Favorites</Content></Layout>} />
			</Routes>
			<Footer style={{ textAlign: 'center' }}>Ant Design, React-Query, MobX</Footer>
		</Layout>
	);
};

export default App;