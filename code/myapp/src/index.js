import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './01-base/01-class組件'
// import App from './01-base/02-function組件'
// import App from './01-base/03-組件的嵌套'
// import App from './01-base/04-組件的樣式'
// import App from './01-base/05-事件綁定-1'
// import App from './01-base/06-事件綁定-2'
// import App from './01-base/07-ref'
// import App from './01-base/08-state'
// import App from './01-base/09-循環渲染'
import App from './01-base/10-todoList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);