import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SelectUser ,deleteUser} from '../actions/index'; 
class UserLists extends Component {

    handleDelete=()=>{
    console.log( this.props.users)
    this.props.deleteUser("alex")
    }

    componentDidMount(){
    
    }
    cretaeListItem(){ 
       return  this.props.users.users.map((user) => {
        return (
            <li key={user.id}  onClick={this.handleDelete}> {user.name} {user.age}</li>
        )})
    }
    render() {
        console.log(this.props.users.users);
     const restult=this.props.users.userdeletd 
     
        return (
            <div>
                 <h4> { restult ? "USER DELETE" : "" }</h4> 

                <ul>
                   {this.cretaeListItem()}
                  
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
       users:state.useReducer
        
    };
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({selectUser: selectUser,})
// }
export default connect(mapStateToProps,{SelectUser,deleteUser})(UserLists);