var BoardCell = React.createClass({

	render: function() {
		return (
			<td style={{border: '1px solid black', width: 60, height: 60}}
			     onClick={this.props.handleClick}>
				<div className={this.props.type}></div>
			</td>
		);
	}
});

var Board = React.createClass({
	getInitialState: function() {
		return {
			pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(x) {
							return [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
			}),
			player: 0
		};
	},

	translate: function(value) {
		if (value === 0) {
			return "stone-black"; 
		}

		if (value === 1) {
			return "stone-white";
		}

		return "";
	},

	updatePiece: function(y, x) {
		if (this.state.pieces[y][x] === 2) {
			var newPieces = this.state.pieces.slice();
			newPieces[y][x] = this.state.player;
			this.setState({
				pieces: newPieces,
				player: 1 - this.state.player
			});
		}
	},

	render: function() {
		var translate = this.translate;
		var updatePiece = this.updatePiece;
		return (
			<table>{
				this.state.pieces.map(function(row, y) {
					return (
						<tr>{
								row.map(function(piece, x) {
									return (<BoardCell type={translate(piece)} 
										               handleClick={function(){
										               		updatePiece(y, x);
										               }}/>);
								})
						}</tr>
					);
				})
			}</table>
		);
	}
});

React.render(<Board />, document.getElementById("content"));