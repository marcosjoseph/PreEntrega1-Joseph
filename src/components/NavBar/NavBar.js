import CartWidget from "../CartWidget/CartWidget";
import "../styles/NavBar.css";
import Logo from "../img/LogoGroot.png";

const NavBar = () => {
    return (
        <nav>
            <a href="https://www.instagram.com/groot.woodwork/" target="_blank"> <img src={Logo} className="logo"/> </a>

            <div id="menu-botones">
                <button>Nosotros</button>
                <button>Nuestros Trabajos</button>
                <button>En Stock</button>
                <button>Presupuestá</button>
                <button>Calculadora</button>
            </div>

            <CartWidget />

        </nav>

    )

}

export default NavBar;