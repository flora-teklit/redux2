export const SelectUser =(user)=>{
    console.log('u clicked:',user.name);
    return{
        type:'USER_SELECTED',
        payload:user
    }
};

export const deleteUser =(user)=>{
    //console.log('u clicked:',user.name);
    return{
        type:'USER_DELETED',
        payload: delete_user(user)
    }
};






function delete_user(user){



 return "user deleted"


}