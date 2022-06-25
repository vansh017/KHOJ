import react from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
 import {ResultContextprovider} from './contexts/ResultContextprovider';
import './global.css';

const root1 = ReactDom.createRoot(document.getElementById('root'))

root1.render(
   
<ResultContextprovider>

<Router>
<App/>
</Router>
  
</ResultContextprovider>
    ,
//  document.getElementById('root'),
);

