import { getCinemaListService } from "../services/maizuo"

export default {

    namespace: 'maizuo',

    state: {
        isShow: true,
        list: []
    },

    reducers: {
        hide(prevState, action) {
            return { ...prevState, isShow: false }
        },
        show(prevState, action) {
            return { ...prevState, isShow: true }
        },
        changeCinemaList(prevState, action) {
            return { ...prevState, list: action.payload }
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            console.log("初始化")
        },
    },

    // 異部 redux-sage
    effects: {
        *getCinemaList(action, obj) {
            // console.log(obj)
            let { call, put } = obj
            var res = yield call(getCinemaListService)
            // console.log(res.data.data.epg)
            yield put({
                type: "changeCinemaList",
                payload: res.data.data.epg
            })
        }
    }

}