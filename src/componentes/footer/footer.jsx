import estilo from "./footer.module.css"
import logo from "../../assets/logo.jfif"
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className={estilo.footerr}>
            <div className={estilo.container_footer}>
                <div className={estilo.card_footer}>
                    <img src={logo} alt="" className={estilo.logo_img}/>
                    <p className={estilo.p_branco}>
                        Transformando momentos em experiências inesquecíveis desde 2010.
                    </p>
                </div>

                <div className={estilo.card_footer}>
                    <p className={estilo.p_dourado}>Links</p>

                    <Link to="/">Início</Link>
                    <Link to="/Servico">Serviços</Link>
                    <Link to="/Historia">Nossa História</Link>
                    <a href="#formulario">Contato</a>
                </div>

                <div className={estilo.card_footer}>
                    <p className={estilo.p_dourado}>Contato</p>

                    <a href="https://wa.me/5581992895675" target="_blank">
                        WhatsApp: (81) 99289-5675
                    </a>

                    <a href="mailto:letodie8344@gmail.com">
                        letodie8344@gmail.com
                    </a>
                </div>
            </div>

            <p className={estilo.p_branco}>
                © 2026 Realize Eventos | Foco em Casamentos e Festas Adultas
            </p>
        </footer>
    )
}

export default Footer;