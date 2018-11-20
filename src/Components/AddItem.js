
import React, { Component } from 'react';


class AddItem extends Component {

constructor(){
	super();
	this.state = {
		NewShoppingList: {}
	}
}

handleEvent(){
	console.log('Hello World');
}

  render() {
    return (
   		<div>
   			<h3>Build your own shopping list!</h3>
   			<form> 
   			<label>Your Item</label><br />
   				<div>
   					<input type="text" />
   				</div>
   				<div><br />
   					<input onSubmit={this.handleEvent} type="submit" value="Add" />
   				</div>
   			</form>
   		</div>
    );
  }
}

export default AddItem;