import React from 'react';
import ReactDOM from 'react-dom';
import {ExampleA, ExampleB} from './Example/Example';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <ExampleA/>
        <ExampleB/>
    </div>, document.getElementById('root'));
serviceWorker.unregister();
