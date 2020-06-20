import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {
   render() {
     if(!this.props.user){
       return (<h4>Select a user...</h4>);
     }
     return(
       <div>
          <h4>Name: {this.props.user.first}</h4>
          <h4>Last Name: {this.props.user.last}</h4>
          <h4>Age: {this.props.user.age}</h4>
          <h4>Info: {this.props.user.description}</h4>
       </div>
     );
   }
}

function mapStateToProps(state){
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);