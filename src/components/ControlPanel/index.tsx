import React, { Component } from 'react';
import ReactHighcharts from '../ReactHighcharts';

interface IProps {
	chartList: Array<IChart>;
}

interface IState {
	currentChart: IChart;
}

interface IChart {
	chart?: {
		type?: string;
	};
	series: Array<any>;
}

export default class ControlPanel extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			currentChart: this.props.chartList && this.props.chartList[0],
		};
	}

	render() {
		return (
			<div className="pnel">
				<div className="control">
					{this.props.chartList.map((item, index) => (
						<button
							key={index}
							style={{
								height: '25px',
								width: '80px',
								margin: '5px 10px',
								backgroundColor: 'skyblue',
							}}
							onClick={() => {
								this.setState({ currentChart: item });
							}}>
							{(item && item.chart && item.chart.type) ||
								'default' + index}
						</button>
					))}
				</div>
				<div className="content">
					<ReactHighcharts options={this.state.currentChart} />
				</div>
			</div>
		);
	}
}
