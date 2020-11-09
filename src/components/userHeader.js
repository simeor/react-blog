import React from 'react';
import {connect} from "react-redux";
import {fetchUser} from '../actions';

class userHeader extends React.Component{


  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }


  render(){
    return(
      <div>
        user headder comp
      </div>
    );
  };
}


export default connect(null, {fetchUser}) (userHeader);