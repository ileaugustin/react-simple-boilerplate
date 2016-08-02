// import $ from 'jquery';
// import { Reactor, Store, toImmutable } from 'nuclear-js'

import React, {Component} from 'react';
import Input from './Input.jsx';
import FolderContainer from './FolderContainer.jsx';
import getters from './getters.jsx';
import reactor from './reactor.jsx'
import actions from './actions.jsx'

// var folders = [];
//
// const reactor = new Reactor({ debug: true });
//
// reactor.registerStores({
//     items: Store({
//         getInitialState(){
//             return toImmutable([]);
//         },
//
//         initialize() {
//             this.on('FILTER', (state,event) =>{
//                 var searchResult = [];
//                 (function filter(obj,event,searchResult){
//                     var search = event.target.value;
//                     var searchResult = searchResult || [];
//                     obj.map((value)=>{
//                         var file = value;
//                         var str = '';
//                         str+= file.name;
//
//                         if(str.indexOf(search) > -1){
//
//                             if(file.type == 'dir')
//                             {
//                                 searchResult.push(file);
//                             }
//                             else if(file.type == 'file')
//                             {
//                                 searchResult.push(file);
//                             }
//                         }
//                         else if(file.children){
//                             filter(file.children,event,searchResult);
//                         }
//
//                     });
//                     return searchResult;
//                 })(folders,event,searchResult);
//
//                 return toImmutable(searchResult);
//                 });
//
//             this.on('FETCH_DATA',() =>{
//                 var items = [];
//                 $.ajax({
//                     url: 'http://localhost:3000/src/json.js',
//                     dataType: 'json',
//                     cache: false,
//                     async : false,
//                     success: function(data) {
//                         items = data;
//                         folders = data;
//                     }.bind(this),
//                     error: function(xhr, status, err) {
//                         console.error(this.props.url, status, err.toString());
//                     }.bind(this)
//                 });
//                 return toImmutable(items);
//             })
//          }
//     })
// });
//
// const filteredItemsGetter = [
//     ['items'],
//     (items) => {
//         return items.toJS();
//     }
// ];
//
// const actions = {
//     setFilter(event) {
//         reactor.dispatch('FILTER', event)
//     },
//
//     fetchData(){
//         reactor.dispatch('FETCH_DATA')
//     }
// };

const App = React.createClass({
    mixins: [reactor.ReactMixin],

    getDataBindings() {
        return {
            initialTree: getters.filteredItems
        }
    },

    handleChange(event){
        actions.setFilter(event);
    },

    componentDidMount(){
        actions.fetchData()
    },

    render(){
        return (
            <div className="widget">
                <Input filter={this.handleChange}/>
                <FolderContainer items={this.state.initialTree} />
            </div>
        );
    }
});
App.propTypes = {initialTree : React.PropTypes.object};
export default App;