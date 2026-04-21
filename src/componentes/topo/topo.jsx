import estilo from "./Topo.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import Logo from "../../assets/logo.jfif";

function Topo() {
    const [menuAberto, setMenuAberto] = useState(false);
    return (
        <>
            <header>
                <nav className={estilo.navbar}>
                    <img src={Logo} alt="" className={estilo.logo} />
                    <button
                        className={estilo.menuToggle}
                        onClick={() => setMenuAberto(!menuAberto)}
                    >
                        ☰
                    </button>
                    <div className={`${estilo.container_link} ${menuAberto ? estilo.ativo : ""
                        }`}>
                        <Link to="/" className={estilo.links} onClick={() => setMenuAberto(false)}>Início</Link>
                        <Link to="/Servico" className={estilo.links} onClick={() => setMenuAberto(false)}>Serviços</Link>
                        <HashLink
                            smooth
                            to={`${import.meta.env.BASE_URL}#galeria`}
                            className={estilo.links}
                            onClick={() => setMenuAberto(false)}
                        >
                            Galeria
                        </HashLink>
                        <Link to="/Historia" className={estilo.links} onClick={() => setMenuAberto(false)}>Sobre Nós</Link>
                        <Link to="/AreaAdministrador" className={estilo.links} onClick={() => setMenuAberto(false)}>Contato</Link>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Topo;