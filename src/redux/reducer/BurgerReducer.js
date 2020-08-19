const initialState ={
    burger :{salad :2,cheese:1,beef:1},
    menu:{
        salad:10,
        cheese:15,
        beef :20
    },
    total:45
}
export default (state = initialState, actions) => {
    switch (actions.type) {
      case "a":{
    
        return { ...state};
      }
      default:
        return state;
    }
  };