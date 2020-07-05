import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import ReactHighcharts from './components/ReactHighcharts';
import ControlPanel from './components/ControlPanel';

import MockData from './testdata/highcharts';

ReactDOM.render(
	<AppContainer>
		<ControlPanel chartList={MockData} />
	</AppContainer>,
	document.getElementById('root')
);
