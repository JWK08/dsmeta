import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsm-meta-logo-container">
                <img src={logo} alt="DSmeta"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/http.wk/ "> @http.wk</a>
                    </p>
            </div>
        </header>

    )
}

export default Header
