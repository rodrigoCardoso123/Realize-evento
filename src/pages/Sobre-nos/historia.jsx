import estilo from './historia.module.css'
import logo from '../../assets/logo.jfif'
import { useNavigate } from 'react-router-dom';

function Historia() {
    const navigate = useNavigate();
    return (
        <>
            <main className={estilo.main}>
                <div className={estilo.banner}>
                    <div className={estilo.banner_texto}>
                        <p className={estilo.p_dourados}>Conheça nossa trajetória</p>
                        <h1 className={estilo.banner_h1}>Nossa História</h1>
                        <div className={estilo.linha}></div>
                    </div>
                </div>
                <section className={estilo.section_quem_somos}>
                    <p className={estilo.p_dourados}>Quem Somos</p>
                    <h1>Mais de uma Década Criando Memórias</h1>
                    <p>A <strong>Realize Eventos</strong> é uma empresa especializada em casamentos luxuosos e festas adultas
                        exclusivas, fundada com o propósito de transformar cada celebração em uma experiência
                        verdadeiramente inesquecível.</p>
                    <p>Com uma equipe apaixonada e altamente qualificada, atendemos eventos em todo o estado
                        de Pernambuco, sempre com o compromisso de superar as expectativas de cada cliente e
                        tornar seus momentos especiais ainda mais memoráveis.</p>
                </section>

                <section className={estilo.trajetoria}>
                    <p className={estilo.p_dourados}>Nossa Trajetória</p>
                    <h1>Uma Jornada de Excelência</h1>
                    <div className={estilo.container_trajetoria}>
                        <div className={estilo.container_card} data-year="2010">
                            <div className={estilo.card}>
                                <h1>O Começo de um Sonho</h1>
                                <p>A Realize Eventos nasceu da paixão de sua fundadora pela
                                    gastronomia e pela arte de criar momentos inesquecíveis.
                                    Com uma pequena equipe e muita dedicação, os primeiros eventos foram realizados com excelência e carinho.</p>
                            </div>
                           
                        </div>

                        <div className={estilo.container_card} data-year="2013">
                            <div className={estilo.card}>
                                <h1>Crescimento e Reconhecimento</h1>
                                <p>Após três anos de trabalho árduo, a Realize Eventos conquistou sua reputação no mercado de Pernambuco. O boca a boca dos clientes satisfeitos impulsionou o crescimento, e a empresa passou a atender eventos de maior porte.</p>
                            </div>
                        </div>

                        <div className={estilo.container_card} data-year="2016">
                            <div className={estilo.card}>
                                <h1>Especialização em Casamentos</h1>
                                <p>Identificando a demanda crescente por eventos de casamento de alto padrão, a empresa investiu em treinamento especializado e parcerias estratégicas, tornando-se referência em cerimônias e recepções luxuosas.</p>
                            </div>
                        </div>

                        <div className={estilo.container_card} data-year="2019">
                            <div className={estilo.card}>
                                <h1>Expansão dos Serviços</h1>
                                <p>Com a consolidação no mercado de casamentos, a Realize Eventos expandiu seu portfólio para incluir festas adultas exclusivas, eventos corporativos e comemorações privadas, sempre mantendo o padrão de excelência.</p>
                            </div>
                        </div>

                        <div className={estilo.container_card} data-year="2022">
                            <div className={estilo.card}>
                                <h1>Inovação e Modernidade</h1>
                                <p>Investindo em novas tendências gastronômicas e decorativas, a empresa incorporou conceitos modernos como finger food gourmet, estações interativas e experiências sensoriais únicas para os convidados.</p>
                            </div>
                        </div>

                        <div className={estilo.container_card} data-year="2024">
                            <div className={estilo.card}>
                                <h1>Referência Regional</h1>
                                <p>Hoje, a Realize Eventos é reconhecida como uma das principais empresas de eventos de luxo do Nordeste. Com centenas de eventos realizados e clientes fidelizados, continuamos crescendo e inovando para oferecer sempre o melhor.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className={estilo.nossos_valores}>
                        <p className={estilo.p_dourados}>O Que Nos Guia</p>
                        <h1>Nossos Valores</h1>
                        <div className={estilo.contaner_card}>
                            <div className={estilo.card_valores}>
                                <h1>✨</h1>
                                <h2>Excelência</h2>
                                <p>Cada detalhe é cuidado com perfeição para superar as expectativas dos nossos clientes.</p>
                            </div>

                            <div className={estilo.card_valores}>
                                <h1>💛</h1>
                                <h2>Paixão</h2>
                                <p>Amamos o que fazemos e isso se reflete em cada evento que realizamos.</p>
                            </div>

                            <div className={estilo.card_valores}>
                                <h1>🤝</h1>
                                <h2>Comprometimento</h2>
                                <p>Cumprimos cada promessa feita e garantimos a satisfação total dos nossos clientes.</p>
                            </div>

                            <div className={estilo.card_valores}>
                                <h1>🌟</h1>
                                <h2>Inovação</h2>
                                <p>Estamos sempre em busca de novas tendências para oferecer experiências únicas.</p>
                            </div>
                        </div>
                </section>

                <section className={estilo.numeros}>
                        <p className={estilo.p_dourados}>Em Números</p>
                        <h1>Nossa Trajetória em Dados</h1>
                        <div className={estilo.container_card_numeros}>
                            <div className={estilo.card_numeros}>
                                <h1>14+</h1>
                                <p>Anos de Experiência</p>
                            </div>

                            <div className={estilo.card_numeros}>
                                <h1>500+</h1>
                                <p>Eventos Realizados</p>
                            </div>

                            <div className={estilo.card_numeros}>
                                <h1>2000+</h1>
                                <p>Clientes Satisfeitos</p>
                            </div>

                            <div className={estilo.card_numeros}>
                                <h1>100%</h1>
                                <p>Comprometimento</p>
                            </div>
                        </div>
                </section>

                <section className={estilo.section_contato}>
                        <h1>Faça Parte da Nossa História</h1>
                        <p>Deixe-nos criar uma experiência inesquecível para o seu próximo evento especial.</p>
                        <button className={estilo.butao_banner} onClick={() => navigate('/#formulario')}>Solicitar Orçamento</button>
                </section>
                <footer className={estilo.footer}>
                    <img src={logo} alt="" />
                    <div>
                        <p>© 2026 Realize Eventos | Foco em Casamentos e Festas Adultas</p>
                    </div>
                </footer>
            </main>
        </>
    )
}
export default Historia;