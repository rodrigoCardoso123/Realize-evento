import estilo from "./footer.module.css"
import logo from "../../assets/logo.jfif"

function Footer(){
    return(
        <>
        <footer className={estilo.footerr}>
            <div className={estilo.container_footer}>
                <div className={estilo.card_footer}>
                    <img src={logo} alt="" className={estilo.logo_img}/>
                    <p className={estilo.p_branco}>Transformando momentos em 
                       experiências inesquecíveis desde 2010.</p>
                </div>
                <div className={estilo.card_footer}>
                    <p className={estilo.p_dourado}>Links</p>

                    <a href="/">Início</a>
                    <a href="/Servico">Serviços</a>
                    <a href="/Historia">Nossa História</a>
                    <a>Contato</a>
                </div>
                <div className={estilo.card_footer}>
                    <p className={estilo.p_dourado}>Contato</p>
                    <a>WhatsApp: (81) 99289-5675</a>
                    <a>letodie8344@gmail.com</a>
                </div>
            </div>
            <p className={estilo.p_branco}>© 2026 Realize Eventos | Foco em Casamentos e Festas Adultas</p>
        </footer>
        </>
    )
}
export default Footer;