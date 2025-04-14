import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/hello-world">Hello World</Link>
                    </li>
                    <li>
                        <Link to="/calc">Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/imc">IMC</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;