import { action, makeAutoObservable, makeObservable, observable, runInAction } from 'mobx'
import axios from 'axios'

// const store = observable({
//     isTabbarShow: true,
//     setTabbarShow(isTabbarShow) {
//         this.isTabbarShow = isTabbarShow
//     },
//     list: [],
//     cityName: "北京"
// }, {
//     setTabbarShow: action
// })

class Store {
    isTabbarShow = true
    list = []
    cityName = "北京"

    constructor() {
        // makeObservable(this, {
        //     isTabbarShow: observable,
        //     list: observable,
        //     cityName: observable,
        //     setTabbarShow: action
        // })
        makeAutoObservable(this)
    }

    setTabbarShow = (value) => {
        this.isTabbarShow = value
    }

    async getList() {
        var list = await axios({
            // url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            url: "https://pcw-api.iq.com/api/albumList?deviceId=1bf4c1d372a30a38baa3a4e0e7bd462c&platformId=4&langCode=zh_tw&modeCode=ntw&pn=1&ps=20&chnId=2"
            , method: "get"
        }).then(res => {
            // console.log(res.data.data.epg)
            // runInAction(() => {
            //     this.list = res.data.data.epg
            // })
            return res.data.data.epg
        })

        runInAction(() => {
            this.list = list
        })
    }
}

const store = new Store()

export default store