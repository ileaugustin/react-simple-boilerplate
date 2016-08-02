import {Store, toImmutable} from 'nuclear-js'
import $ from 'jquery';
import actions from './actionTypes.jsx'

export default Store({
    getInitialState(){
        return toImmutable([])
    },
    
    initialize(){
        this.on(actions.FILTER, filterFolders)
        this.on(actions.FETCH_DATA, fetch_data)
    }
});

var folders = [];

function filterFolders(state,event){
    var searchResult = [];
    (function filter(obj,event,searchResult){
        var search = event.target.value;
        var searchResult = searchResult || [];
        obj.map((value)=>{
            var file = value;
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
                filter(file.children,event,searchResult);
            }

        });
        return searchResult;
    })(folders,event,searchResult);

    return toImmutable(searchResult);
}


function fetch_data(){
    var items = [];
    //function get(){

            $.ajax({
                url: 'http://localhost:3000/src/json.js',
                dataType: 'json',
                cache: false,
                async : false,
                success: function(data) {
                    items = data;
                    folders = data;
                    //resolve(data);
                },
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }
            })

    return toImmutable(items)

   // }

    // get().then(function (response) {
    //     console.log(toImmutable(response))
    //     return toImmutable(response);
    // })
    // return get()


}

