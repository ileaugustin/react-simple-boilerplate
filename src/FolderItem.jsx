import React, {Component} from 'react';

class FolderItem extends Component{
    render (){
                return (<li className="folder-item">{this.props.name}</li>);
            }
}

export default FolderItem;