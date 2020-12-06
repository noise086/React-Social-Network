import './index.css';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export const renderedEntiresTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App
                store={store}
                state={store.getState()}
                 />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderedEntiresTree();

store.subscribe(renderedEntiresTree);

