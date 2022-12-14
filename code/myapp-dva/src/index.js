import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    // history: require("history").createHashHistory()     // 預設為Hash模式(可以不寫)
    // history: require("history").createBrowserHistory()  // 不使用Hash模式
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/maizuo').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
