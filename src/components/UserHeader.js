import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../actions';

class UserHeader extends Component{
    componentDidMount(){
        
        this.props.getUser(this.props.userId);
    }
    render(){
        // const user = this.props.user.find(user=>user.id === this.props.userId);
        if(!this.props.user) return null
        return(
            <div>
              <i> User:- {this.props.user.name}</i> 
            </div>

        )
           
        
    }
}

const mapStateToProps = (state, ownProps) =>{
    return{
        user: state.user.find(user=>user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps, {getUser})(UserHeader)