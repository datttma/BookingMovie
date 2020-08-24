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
      case "TANG_GIAM":{
        console.log('loai',actions.propsBurger);
        let burgerUpdate ={...state.burger};
        if(actions.amount ===-1 && state.burger[actions.propsBurger]<1){
          return {...state}
        }
        burgerUpdate[actions.propsBurger]+= actions.amount;
        state.burger= burgerUpdate;
        //tính tiền
        // let tien = {...state.total};
        // tien += actions.amount * state.menu[actions.propsBurger];
        state.total += actions.amount * state.menu[actions.propsBurger];
        
        // state.total=tien;
        return { ...state};
      }
      default:
        return state;
    }
  };