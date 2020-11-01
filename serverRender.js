import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';



const getInitialData = () => {
    return {
        message: 'Hello World'
    };
};

const serverRender = () => {
    const initialData = getInitialData();
    return new Promise((resolve, reject)=> {
        resolve({
            initialMarkup: ReactDOMServer.renderToString(
                <App initialData={initialData} />
            ),
            initialData: initialData
        });
        reject(null);
    }) 
    
    
    ;
};

export default serverRender;
