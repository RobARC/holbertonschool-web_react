import holbertonlogo from './holbertonlogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonlogo} alt="Holberton Logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
