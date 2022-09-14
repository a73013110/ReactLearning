
export default {

    namespace: 'maizuo',
  
    state: {
        isShow: true
    },

    reducers: {
        hide(prevState, action) {
            return {...prevState, isShow: false}
        },        
        show(prevState, action) {
            return {...prevState, isShow: true}
        }
    }

}