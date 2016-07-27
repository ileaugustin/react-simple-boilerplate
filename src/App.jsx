import React, {Component} from 'react';
import Input from './Input.jsx';

import FolderContainer from './FolderContainer.jsx';


class App extends Component {

    constructor(props){

        super(props);
        this.state = {tree : this.props.data}

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

        this.filterFolder(this.props.data,searchResult,event);
        
        this.setState({
            tree : searchResult
        })
    }

    render(){
                return (
                    <div className="widget">
                        <Input filter={this.handleChange.bind(this)}/>
                        <FolderContainer items={this.state.tree}/>
                    </div>
                );
    }
}
App.propTypes = {initialTree : React.PropTypes.object};
//App.defaultProps = {initialTree: App.props.data};
export default App;