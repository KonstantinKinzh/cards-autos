import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';

const rootId = document.getElementById("root");
const root = ReactDOM.createRoot(rootId!);
root.render(<App/>);