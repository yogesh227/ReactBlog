

export default (state=[], action) =>{

    


// if(action.type==='FETCH_POST'){
//     return action.payload;
// }
// return state;

switch(action.type){

    case'FETCH_POST':
    return action.payload;

    default:
    return state;

}
};