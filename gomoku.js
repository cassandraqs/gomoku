var BoardCell = React.createClass({

	render: function() {
		return (
			<td style={{border: '1px solid black', width: 60, height: 60}}>
				<div className={this.props.type}></div>
			</td>
		);
	}
});

var Board = React.createClass({
	render: function() {
		return (
			<table>
				<tr> 
					<BoardCell type="stone-white" />
					<BoardCell type="stone-black" />
					<BoardCell type="" />
				</tr>
				<tr> 
					<BoardCell type="stone-white" />
					<BoardCell type="stone-white" />
					<BoardCell type="stone-white" />
				</tr>
			</table>
		);
	}
});

React.render(<Board/>, document.getElementById("content"));