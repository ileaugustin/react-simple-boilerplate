import React, {Component} from 'react';
import Input from './Input.jsx';
import $ from 'jquery';
import FolderContainer from './FolderContainer.jsx';


class App extends Component {

    constructor(props){

        super(props);
        this.state = {initialTree:''};
        this.state = {permanentTree : ''};
    }

    filterFolder(obj,searchResult,event) {

    var search = event.target.value;
    var searchResult = searchResult || [];
    for(var i in obj){

        var file = obj[i];
        var str = '';
        str+= file.name;

        if(str.indexOf(search) > -1){

            if(file.type == 'dir')
            {
                searchResult.push(file);
            }
            else if(file.type == 'file')
            {
                searchResult.push(file);
            }
        }
        else if(file.children){
            this.filterFolder(file.children,searchResult,event);
        }

    }

    return searchResult;
    }

    handleChange(event){
        var searchResult = [];
        //console.log('handleChange');
        //console.log(this.props.items);
        this.filterFolder(this.state.permanentTree,searchResult,event);
        
        this.setState({
            initialTree : searchResult
        })
    }


    //imm(){
        //var immutable = require('immutable');
        // var map1 = immutable.Map({a:1,b:2,c:3});
        // var map2 = map1.set('b',50);
        // console.log(map1.get('b'));
        // console.log(map2.get('b'));
        // console.log(map1.equals(map2) === false);
        // var list1 = immutable.List.of(1,2);
        // var list2 = list1.push(3,4,5);
        // var list3 = list2.unshift(0);
        // var list4 = list1.concat(list2,list3);
        // console.log(list1);
        // console.log(list2);
        // console.log(list3);
        // console.log(list4);
        // var alpha = immutable.Map({a:1,b:2,c:3,d:4})
        // alpha.map((value,index) => {console.log(index,value)});
        // var map1 = immutable.Map({a:1,b:2,c:3,d:4})
        // var map2 = immutable.Map({c:10,a:20,t:30});
        // var obj = {d:100,o:200,g:300};
        // var map3 = map1.merge(map2,obj);
        // console.log(map3);
        // var myObject = {a:1,b:2,c:3};
        // var obj2 = immutable.Seq(myObject).map(x => x*x).toObject();
        // console.log(obj2);

    //}
    loadData() {
    $.ajax({
        url: 'http://localhost:3000/src/json.js',
        dataType: 'json',
        cache: false,
        success: function(data) {
            this.setState({permanentTree: data});
            this.setState({initialTree: this.state.permanentTree});
            //console.log(this.state.initialTree);
            //console.log('success');
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });

    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        //this.imm();
                return (
                    <div className="widget">
                        <Input filter={this.handleChange.bind(this)}/>
                        <FolderContainer items={this.state.initialTree} key={Math.floor(Math.random()*100)}/>
                    </div>
                );
    }
}
App.propTypes = {initialTree : React.PropTypes.object};
//App.defaultProps = {initialTree: App.props.data};
export default App;