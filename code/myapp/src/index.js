import React from 'react';
import ReactDOM from 'react-dom/client';

// =================================================================
// import App from './01-base/01-class組件'
// import App from './01-base/02-function組件'
// import App from './01-base/03-組件的嵌套'
// import App from './01-base/04-組件的樣式'
// import App from './01-base/05-事件綁定-1'
// import App from './01-base/06-事件綁定-2'
// import App from './01-base/07-ref'
// import App from './01-base/08-state'
// import App from './01-base/09-循環渲染'
// import App from './01-base/10-todoList'
// import App from './01-base/11-dangerouslySetinnerHTML'
// import App from './01-base/12-賣座選項卡'
// import App from './01-base/13-setState同步異步'
// import App from './01-base/14-betterScroll'
// import App from './01-base/15-betterscroll-cinema'
// import App from './01-base/16-props'
// import App from './01-base/17-props函數式組件'
// import App from './01-base/18-狀態vs屬性'
// import App from './01-base/19-非受控'
// import App from './01-base/20-受控'
// import App from './01-base/21-受控Cinema'
// import App from './01-base/22-受控todoList'

// =================================================================
// import App from './02-advanced/01-子傳父'
// import App from './02-advanced/02-非受控賣座選項卡'
// import App from './02-advanced/03-受控賣座選項卡'
// import App from './02-advanced/04-父子通信版-表單域組件'
// import App from './02-advanced/05-ref版-表單域組件'
// import App from './02-advanced/06-中間人模式'
// import App from './02-advanced/07-發布訂閱'
// import App from './02-advanced/08-訂閱發布模式案例'
// import App from './02-advanced/09-context'
// import App from './02-advanced/10-插槽'
// import App from './02-advanced/11-插槽抽屜'
// import App from './02-advanced/12-生命週期-初始化'
// import App from './02-advanced/13-生命週期-初始化案例'
// import App from './02-advanced/14-生命週期-更新階段1'
// import App from './02-advanced/15-生命週期-更新階段2'
// import App from './02-advanced/16-生命週期-更新階段2-案例'
// import App from './02-advanced/17-生命週期-更新階段3'
// import App from './02-advanced/18-生命週期-更新階段3-案例'
// import App from './02-advanced/19-生命週期-銷毀'
// import App from './02-advanced/20-新生命週期-1'
// import App from './02-advanced/21-新生命週期-1-案例'
// import App from './02-advanced/22-新生命週期-2'
// import App from './02-advanced/23-新生命週期-2-案例'
// import App from './02-advanced/24-性能優化'
// import App from './02-advanced/25-swiper-同步'
// import App from './02-advanced/26-swiper-異步'
// import App from './02-advanced/27-swiper-組件'

// =================================================================
// import App from './03-hooks/01-useState'
// import App from './03-hooks/02-todolist'
// import App from './03-hooks/03-useEffect'
// import App from './03-hooks/04-useEffect2'
// import App from './03-hooks/05-useEffect2-案例'
// import App from './03-hooks/06-useEffect3'
// import App from './03-hooks/07-useCallback1'
// import App from './03-hooks/08-useCallback2'
// import App from './03-hooks/09-useMemo'
// import App from './03-hooks/10-useRef'
// import App from './03-hooks/11-useRef-保存值'
// import App from './03-hooks/12-useContext'
// import App from './03-hooks/13-useReducer1'
// import App from './03-hooks/14-useReducer2'
// import App from './03-hooks/15-useReducer3'
// import App from './03-hooks/16-自定義hooks'

// =================================================================
// import App from './04-router/App'

// =================================================================
// import App from './05-redux/App'

// =================================================================
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
// import store from './06-react-redux/redux/stroe';
// import App from './06-react-redux/App'

// let persistor = persistStore(store)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // 注意React.StrictMode會讓子元件Create=>Destroy=>Create，換句話說會創建2次...
//     // <React.StrictMode>
//         <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 <App />
//             </PersistGate>
//         </Provider>
//     // </React.StrictMode>
// );

// // =================================================================
// import 'antd/dist/antd.css'

// import App from './07-antd/01-antd引入'
// import App from './07-antd/02-柵格系統'
// import App from './07-antd/03-layout'
// import App from './07-antd/04-下拉選單'
// import App from './07-antd/05-進度條'
// import App from './07-antd/06-輪播'
// import App from './07-antd/07-table'
// import App from './07-antd/08-tree'
// import App from './07-antd/09-Modal'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <React.StrictMode>
//     <App />
//     // </React.StrictMode>
// );

// // =================================================================
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
// import store from './08-antd-mobile/redux/stroe';
// import App from './08-antd-mobile/App'

// let persistor = persistStore(store)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // 注意React.StrictMode會讓子元件Create=>Destroy=>Create，換句話說會創建2次...
//     // <React.StrictMode>
//         <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 <App />
//             </PersistGate>
//         </Provider>
//     // </React.StrictMode>
// );

// =================================================================
// import App from './09-immutable/01-base'
// import App from './09-immutable/02-map'
// import App from './09-immutable/03-map2'
// import App from './09-immutable/04-list'
// import App from './09-immutable/05-個人信息修改'
// import App from './09-immutable/06-個人信息修改2'
// import App from './09-immutable/redux/App'
// import App from './10-mobx/App'
// import App from './10-mobx/04-router/App'
// import App from './11-styled-components/App'
// import App from './11-styled-components/01-passProps'
// import App from './11-styled-components/02-樣式化組件'
// import App from './11-styled-components/03-樣式擴展'
// import App from './11-styled-components/04-動畫'
// import App from './12-UnitTest/App'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <React.StrictMode>
//     <App />
//     // </React.StrictMode>
// );

// =================================================================
// import { Provider } from 'react-redux'
// import store from './13-redux-saga/redux/store'

// // import App from './13-redux-saga/App'
// import App from './13-redux-saga/maizuo/App'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
//     // </React.StrictMode>
// );

// =================================================================
import App from './14-react-補充/portal/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);