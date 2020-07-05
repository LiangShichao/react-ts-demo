import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import './index.css';

HighchartsMore(Highcharts);

interface IProps {
	options: {
		chart?: {
			type?: string;
		};
		series: Array<any>;
	};
}


export default class ReactHighcharts extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<div className="app-highcharts">
					<HighchartsReact
						highcharts={Highcharts}
						immutable = {true}
						options={this.props.options}
					/>
				</div>
				<div className="app-title">
					Received {this.props.options.chart && this.props.options.chart.type || 'default'} JSON:
				</div>
				<textarea className="app-data">
					{JSON.stringify(this.props.options, null, 2)}
				</textarea>
			</div>
		);
	}
}
