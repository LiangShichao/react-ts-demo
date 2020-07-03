import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'antd/dist/antd.css';
import { App } from './components/App';

ReactDOM.render(
	<AppContainer>
		<App title="Home/Setings" sider="sider" header="header" content="content" footer="footer" />
	</AppContainer>,
	document.getElementById('root')
);
