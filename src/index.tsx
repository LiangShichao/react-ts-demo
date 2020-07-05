import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import ReactHighcharts from './components/ReactHighcharts';
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
		<ReactHighcharts options={combinationsOptions} />
	</AppContainer>,
	document.getElementById('root')
);
