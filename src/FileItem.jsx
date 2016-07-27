import React, {Component} from 'react';

class FileItem extends Component{
    render (){
        return (<li className="file-item">{this.props.name}</li>);
    }
}

export default FileItem;