const FILTER = 'FILTER';
const FETCH_DATA = 'FETCH_DATA';

export default {FILTER,FETCH_DATA}

///
// action-types
// const FILTER = 'FILTER';
//
// export FITLER;
//
// // actions
// import FILTER from 'action-types'
// import reactor from 'reactor';
// export function filter(query) {
//     reactor.dispatch(FITLER, { query });
// }
//
// // component.js
//
//
// class MyComp {
//
//     onClick() {
//         filter('asdasdasd');
//     }
//
//     render() {
//         return (<button onClick={this.click}></button>)
//     }
// }
//
// // store
//
// Store({
//     defaultState: {
//       items: {},
//       query: '',
//       filteretItems: []
//     },
//     initiliziate() {
//         this.on(FILTER, filterHandler);
//     }
// });
//
// function filterhandler(currentState, payload) {
//
// }
//
// // getter
//
// const filteredItems = [
//     ['folderData', 'filteredItemsw'],
//     function(filtereditems) {
//         ///....
//         return filtereditems;
//     }
// ];