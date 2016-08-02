import reactor from './reactor.jsx'

import actions from './actionTypes.jsx'

export default {
    setFilter(event){
        reactor.dispatch(actions.FILTER,event)
    },

    fetchData(){
        reactor.dispatch(actions.FETCH_DATA)
    }
}
