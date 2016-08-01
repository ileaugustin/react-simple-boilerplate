import React, {Component} from 'react';
import FolderItem from './FolderItem.jsx';
import FileItem from './FileItem.jsx';

class FolderContainer extends Component{
    
    renderChildren(obj,index){
        var index = index || 0;
        return (
            <li className="folder-wrapper">
                <FolderContainer items = {obj} key={Math.floor(Math.random()*100)}/>
            </li>
        );
    }

    render (){
        var immutable = require('immutable');
        var items = immutable.List(this.props.items);
        let output = [];

        items.map((value,index)=>{
            var item = value;

            if(item.type == 'dir')
            {
                output.push(<FolderItem name={item.name} key={index}/>);
            }
            else if(item.type == 'file')
            {
                output.push(<FileItem name={item.name} key={index}/>);
            }

            if (item.children) {
                output.push(this.renderChildren(item.children,index));
            }

        });
        return (
            <ul className="folder-container">{output}</ul>
        );
            }
}

export default FolderContainer;


