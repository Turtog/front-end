import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            
        <nav>
            <img src="../src/logo.png" alt="Logo do Site" className="logo"/>
            <ul className="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="perfil.php">Perfil</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="suporte.html">Suporte</a></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;