import holbertonlogo from './holbertonlogo.jpg';
import './Header.css';

export default function Header(props) {
    return (
        <header className="App-header">
            <img src={holbertonlogo} alt="Holberton Logo" />
            <h1>
                School dashboard
            </h1>
        </header>
    );
};

