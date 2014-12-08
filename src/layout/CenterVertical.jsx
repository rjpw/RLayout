/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Layout = require('./Layout');
var Spacer = require('./Spacer');

var CenterVertical = React.createClass({
	getDefaultProps() {
		return {
			contentSize: "weight 1"
		};
	},
	render() {
		return (
			<Layout {...this.props} orientation="vertical">
				<Spacer />
				<Layout size={this.props.contentSize}>
					{this.props.children}
				</Layout>
				<Spacer />
			</Layout>
		);
	}
});

module.exports = CenterVertical;