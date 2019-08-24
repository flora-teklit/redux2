const initialState={
    userdeletd:{},
    users:[ {
        id: 1,
        name: "lily",
        age: 12
      },
      {
        id: 2,
        name: "lila",
        age: 13
      },{
        id: 3,
        name: "lulu",
        age: 14
      },{
        id: 4,
        name: "lulu",
        age: 14
      },
      {
        id: 5,
        name: "lulu",
        age: 14
      }]
}

export default function useReducer(state=initialState, action){
  switch(action.type){
      case "USER_SELECTED":
          console.log(action);
          return {
              ...state,
              users:action.payload

        }
        case "USER_DELETED":
          console.log(action);

                return {
                    ...state,
                    userdeletd:action.payload
      
              }


        default:
            return state
  }


}