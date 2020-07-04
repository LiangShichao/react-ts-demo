import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { App } from './components/App';
import {
	combinationsOptions,
	gaugesOptions,
	basicBubbleOptions,
	basicScatterOptions,
	basicPieOptions,
	basicBarOptions,
	basicAreaOptions,
	basicLineOptions
} from './testdata/highcharts';

ReactDOM.render(
	<AppContainer>
		<App options={combinationsOptions} />
	</AppContainer>,
	document.getElementById('root')
);
