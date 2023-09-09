import React from 'react';

import { Layout } from 'antd';

import { Home, Favorites } from './pages';
import { CustomHeader, CustomFooter } from './components';

import {Route, Routes} from'react-router-dom';

const App: React.FC = () => {

	return (
		<Layout>
			<CustomHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
			<CustomFooter />
		</Layout>
	);
};

export default App;