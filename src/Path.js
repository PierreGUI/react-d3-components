let React = require('./ReactProvider');
let d3 = require('./D3Provider');

let Path = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		stroke: React.PropTypes.string.isRequired,
		fill: React.PropTypes.string,
		d: React.PropTypes.string.isRequired,
		data: React.PropTypes.object.isRequired
	},

	getDefaultProps() {
		return {
			className: 'path',
			fill: 'none'
		};
	},

	render() {
		let {className,
			 stroke,
			 fill,
			 d,
			 data,
			 onMouseEnter,
			 onMouseLeave} = this.props;

		return (
				<path
			className={className}
			strokeWidth={"2"}
			stroke={stroke}
			fill={fill}
			d={d}
			onMouseMove={ evt => { onMouseEnter(evt, data); } }
			onMouseLeave={  evt => { onMouseLeave(evt); } }
				/>
		);
	}
});

module.exports = Path;
