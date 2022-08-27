import { createStore } from 'redux'

const reducer = (prevState = {
    show: true
}, action) => {
    console.log("store", action)
    let newStat = {...prevState}
    switch (action.type) {
        case "hide-tabbar":
            newStat.show = false;
            break;
        case "show-tabbar":
            newStat.show = true;
            break;
        default:
            break;
    }
    return newStat
}

const store = createStore(reducer)

export default store