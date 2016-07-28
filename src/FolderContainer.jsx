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
        //var index = new Date().getMilliseconds();
        // console.log(index);
        // console.log(++index);
        var counter = Math.floor(Math.random()*100);
        var immutable = require('immutable');
        var items = immutable.List(this.props.items);
        let output = [];
        //var items = immutable.fromJS(this.props.items);
        // for (var i in items) {
        //
        //     var item = items[i];
        //
        //     if(item.type == 'dir')
        //     {
        //         output.push(<FolderItem name={item.name}/>);
        //     }
        //     else if(item.type == 'file')
        //     {
        //         output.push(<FileItem name={item.name}/>);
        //     }
        //
        //     if (item.children) {
        //         output.push(this.renderChildren(item.children));
        //     }
        //
        // }
        //console.log(items);
        items.map((value,index)=>{
            //console.log(Math.floor(Math.random()*100));
            var item = value;

            //console.log(item.children);
            if(item.type == 'dir')
            {
                output.push(<FolderItem name={item.name} key={index}/>);
                //console.log(output);
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


