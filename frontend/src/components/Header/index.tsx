import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>&nbsp;
                    Developed by
                    <a href="https://github.com/JWK08" target="_blank"> <u>José Wilken</u></a>&nbsp;
                </p>
            </div>
        </header>
    )
}


export default Header;
