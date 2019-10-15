import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions';
import UserHeader from './UserHeader';

class Posts extends Component{
    componentWillMount(){

        if(this.props){
            this.props.getPosts()
        }else{
            return false
        }

    }
    render(){
        return(
            <div>{this.props.posts.map(post=>{
               const color= post.id%2 === 0 ? '#f0f0f0':'white'
                return (
                    <div key={post.id} style={{background:color}}>
                        <h3>{post.title}</h3>
                        <UserHeader key={post.id} userId={post.userId}/>
                        <hr/>
                    </div>
                )
            })}</div>
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {getPosts})(Posts)