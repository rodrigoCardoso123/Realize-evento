import estilo from "./Home.module.css";
import img1 from "../../assets/imagem-do-bufft1.jpg"
import img2 from "../../assets/imagem-do-bufft2.jpg"
import img3 from "../../assets/imagem-do-bufft3.jpg"
import img4 from "../../assets/imagem-do-bufft4.jpg"
import img5 from "../../assets/imagem-do-bufft5.jpg"
import img6 from "../../assets/imagem-do-bufft6.jpg"
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Footer from "../../componentes/footer/footer"
import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


const data = [
    {
        text: "Mais uma vez, gostaria de agradecer de coração. Foi unânime: todos adoraram! Todo mundo saiu satisfeito.",
        name: "Eduarda Andrade",
        role: "Gestora da CAIXA · Jantar",
    },
    {
        text: "Serviço impecável e comida deliciosa.",
        name: "João Silva",
        role: "Evento Corporativo",
    },
];

const opcoes = [
    { value: "almoco_jantar", label: " Almoço/Jantar" },
    { value: "feijoada", label: " Feijoada" },
    { value: "brunch", label: " Brunch" },
    { value: "finger_food", label: " Finger Food" },
    { value: "coffee_break", label: " Coffee Break" },
    { value: "salgados", label: " Salgados Volante" },
    { value: "crepe", label: " Crepe Francês" },
    { value: "kids", label: " Festa Kids" },
];

function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);

            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    }, [location]);
    const swiperRef = useRef(null);
    const [selecionados, setSelecionados] = useState([]);

    const [form, setForm] = useState({
        nome: "",
        telefone: "",
        email: "",
        cardapio: [],
        tipoEvento: "",
        nConvidados: "",
        dataEvento: "",
        mensagem: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const dados = {
            ...form,
            nConvidados: Number(form.nConvidados),
            cardapio: form.cardapio.join(", ")
        };

        console.log("ENVIANDO:", dados);

        axios.post(
            "https://realizeventos.onrender.com/orcamentos",
            dados,
            {
                headers: {
                    "ngrok-skip-browser-warning": "true"
                }
            }
        )
            .then((res) => {
                alert("Orçamento enviado com sucesso!");


                if (res.data.url) {
                    window.open(res.data.url, "_blank");
                }
            })
            .catch((err) => {
                console.error("ERRO:", err);
                alert("Erro ao enviar!");
            });
    }
    return (
        <>
            <main className={estilo.mainn}>
                <div className={estilo.banner}>
                    <div className={estilo.banner_texto}>
                        <p className={estilo.p_dourados}>casamentos & Festas Exclusivas</p>
                        <h1 className={estilo.banner_h1}>Transformamos <br /> momentos em <br /> experiências <br /> inesquecíveis...</h1>
                        <p className={estilo.p_branco_banner}>Casamentos luxuosos, festas exclusivas para adultos e <br /> eventos corporativos memoráveis</p>
                        <button className={estilo.butao_banner} onClick={() => {
                            const el = document.getElementById("formulario");

                            if (el) {
                                el.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });
                            }
                        }}>Solicitar Orçamento</button>
                    </div>
                </div>

                <section className={estilo.container_servicos}>
                    <p className={estilo.p_dourados}>O que oferecemos</p>
                    <h1 className={estilo.h1_sections}>Nossos Serviços</h1>
                    <div className={estilo.container_card}>
                        <div className={estilo.card}>
                            <h3>Buffet Social</h3>
                            <p>Menu completo e personalizável para aniversário,
                                casamentos,confraternizações e celebrações,com ingredientes
                                frescos e apresentação elegante.
                            </p>
                        </div>
                        <div className={estilo.card}>
                            <h3>Buffet Corporativo</h3>
                            <p>Soluções gastronômicas sob medida para eventos empresariais.
                                Coffee breaks, brunches, almoços e jantares Completos com qualidade impecável.
                            </p>
                        </div>
                        <div className={estilo.card}>
                            <h3>Eventos em Grande Escala</h3>
                            <p>Estrutura e equipe especializada para eventos com até 500 convidados.
                                Logística eficiente e cardápio personalizados mantendo qualidade.
                            </p>
                        </div>
                    </div>
                    <button className={estilo.butao_banner} onClick={() => navigate("/Servico")}>Ver todos os combos</button>
                </section>

                <section className={estilo.container_gastronomia}>
                    <p className={estilo.p_dourados}>Gastronomia</p>
                    <h1 className={estilo.h1_sections}>Descubra o Menu Ideal para Você</h1>
                    <p className={estilo.p_cinza_gastronomia}>Oferecemos uma variedade de cardápios personalizáveis
                        para atender <br /> perfeitamente às necessidades do seu evento</p>
                    <div className={estilo.container_card_gastronomina}>
                        <div className={estilo.card_gastronomia}>
                            <h1>🍽️</h1>
                            <h3>Almoço/Jantar</h3>
                            <p>Cardápio completo com pratos principais, entradas e sobremesas</p>
                        </div>

                        <div className={estilo.card_gastronomia}>
                            <h1>🫘</h1>
                            <h3>Feijoada</h3>
                            <p>Servida com acompanhamentos típicos e sabor da tradição</p>
                        </div>

                        <div className={estilo.card_gastronomia}>
                            <h1>🥐</h1>
                            <h3>Brunch</h3>
                            <p>Pratos leves e sofisticados, perfeito para ocasiões descontraídas</p>
                        </div>

                        <div className={estilo.card_gastronomia}>
                            <h1>🍤</h1>
                            <h3>Finger Food</h3>
                            <p>Seleção variada em pequenas porções para interação</p>
                        </div>

                        <div className={estilo.card_gastronomia}>
                            <h1>☕</h1>
                            <h3>Coffee Break</h3>
                            <p>Bebidas e petiscos leves, ideal para eventos corporativos</p>
                        </div>

                        <div className={estilo.card_gastronomia}>
                            <h1>🥟</h1>
                            <h3>Salgados Volante</h3>
                            <p>Coxinhas, empadinhas e delícias para festas</p>
                        </div>

                        <div className={estilo.card_gastronomia}>
                            <h1>🥞</h1>
                            <h3>Crepe Francês</h3>
                            <p>Crepes feitos na hora com recheios variados</p>
                        </div>

                        <div className={estilo.card_gastronomia}>
                            <h1>🎂</h1>
                            <h3>Festa Kids</h3>
                            <p>Opções deliciosas e divertidas para crianças</p>
                        </div>
                    </div>
                </section>

                <section className={estilo.container_portifolio} id="galeria">
                    <p className={estilo.p_dourados}>Portfólio</p>
                    <h1 className={estilo.h1_sections}>Nossos Eventos</h1>
                    <div className={estilo.container_imgs_portifolio}>
                        <img src={img1} alt="" className={estilo.imgs_portifolio} />
                        <img src={img2} alt="" className={estilo.imgs_portifolio} />
                        <img src={img3} alt="" className={estilo.imgs_portifolio} />
                        <img src={img4} alt="" className={estilo.imgs_portifolio} />
                        <img src={img5} alt="" className={estilo.imgs_portifolio} />
                        <img src={img6} alt="" className={estilo.imgs_portifolio} />
                    </div>
                </section>

                <section className={estilo.container_processo}>
                    <p className={estilo.p_dourados}>Processo</p>
                    <h1 className={estilo.h1_sections}>Como nos Contratar?</h1>
                    <div className={estilo.container_card}>
                        <div className={estilo.card_processo}>
                            <h1>01</h1>
                            <h3>Solicite um Orçamento</h3>
                            <p>Clique em "Solicitar Orçamento" e informe os detalhes do seu evento:
                                tipo de cardápio, data, local e número de convidados.</p>
                        </div>
                        <div className={estilo.card_processo}>
                            <h1>02</h1>
                            <h3>Personalize o Cardápio</h3>
                            <p>Nossa equipe entrará em contato para entender suas preferências
                                e personalizar o menu conforme suas necessidades específicas.</p>
                        </div>
                        <div className={estilo.card_processo}>
                            <h1>03</h1>
                            <h3>Confirmação e Preparação</h3>
                            <p>Formalizamos o contrato e reservamos a data. Nossa equipe cuidará
                                de cada detalhe para transformar seu evento em experiência memorável.</p>
                        </div>
                    </div>
                </section>

                <section className={estilo.container_clientes}>
                    <p className={estilo.p_dourados}>Clientes</p>
                    <h1 className={estilo.h1_sections}>Avaliações dos Nossos Clientes</h1>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className={estilo.mySwiper}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={estilo.card_carrosel}>
                                    <div className={estilo.estrela}>★★★★★</div>
                                    <p>"{item.text}"</p>
                                    <strong>{item.name}</strong>
                                    <span>{item.role}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={estilo.controls}>
                        <button onClick={() => swiperRef.current.slidePrev()}>‹</button>
                        <button onClick={() => swiperRef.current.slideNext()}>›</button>
                    </div>
                </section>

                <section className={estilo.section_form} id="formulario">
                    <h1 className={estilo.h1_sections}>Solicite seu Orçamento Personalizado</h1>
                    <p>Conte-nos sobre seu evento e criaremos uma experiência única. <br /> Preencha o formulário abaixo e nossa equipe entrará em contato.</p>
                    <form className={estilo.formulario} onSubmit={handleSubmit}>
                        <div className={estilo.container_inputs}>
                            <input type="text"
                                name="nome"
                                placeholder="Nome completo"
                                className={estilo.input}
                                onChange={handleChange} />
                            <input type="number"
                                placeholder="Telefone"
                                name="telefone"
                                className={estilo.input}
                                onChange={handleChange} />
                            <input type="email"
                                placeholder="Email"
                                name="email"
                                className={estilo.input}
                                onChange={handleChange} />
                            <Select options={opcoes}
                                isMulti
                                onChange={(selected) => {
                                    setSelecionados(selected || []);

                                    setForm({
                                        ...form,
                                        cardapio: selected ? selected.map(item => item.value) : []
                                    });
                                }}
                                className={estilo.select}
                                classNamePrefix="customSelect"
                                placeholder="Cardápio">
                            </Select>
                            <select name="tipoEvento" id=""
                                className={estilo.input_evento}
                                onChange={handleChange}>
                                <option>Tipo de Evento</option>
                                <option>Buffet Social</option>
                                <option>Buffet Corporativo</option>
                                <option>Eventos em Grande Escala</option>
                            </select>
                            <input type="number"
                                placeholder="N* Convidados"
                                name="nConvidados"
                                className={estilo.input}
                                onChange={handleChange} />
                            <input type="date"
                                placeholder="Data de Eventos"
                                name="dataEvento"
                                className={estilo.input}
                                onChange={handleChange} />
                            <input type="text"
                                placeholder="Mensagem"
                                name="mensagem"
                                className={estilo.caixa_de_texto}
                                onChange={handleChange} />
                        </div>
                        <button type="submit" className={estilo.butao_banner}>Solicitar Orçamento Personalizado</button>
                    </form>
                </section>

                <section className={estilo.container_contato}>
                    <p className={estilo.p_dourados}>Fale Conosco</p>
                    <h1 className={estilo.h1_sections}>Entre em Contato</h1>
                    <div className={estilo.container_informacao_contato}>
                        <div className={estilo.container_divido}>
                            <strong className={estilo.titulos_contato}>Informações de Contato</strong>
                            <div className={estilo.container_contatos_juntos}>
                                <p className={estilo.p_label}>WhatsApp</p>
                                <a href="https://wa.me/5581992895675" target="_blank" className={estilo.link_dourados}>(81) 99289-5675</a>
                            </div>

                            <div className={estilo.container_contatos_juntos}>
                                <p className={estilo.p_label}>Email</p>
                                <a href="mailto:realizeventos2026@gmail.com" className={estilo.link_dourados}>realizeventos2026@gmail.com</a>
                            </div>

                            <div className={estilo.container_contatos_juntos}>
                                <p className={estilo.p_label}>Horário de Atendimento</p>
                                <p>Seg-Sex: 9:00 - 18:00</p>
                                <p>Sab-Dom: 9:00 - 13:00</p>
                            </div>

                            <strong className={estilo.titulos_contato}>Redes Sociais</strong>
                            <div className={estilo.container_contatos_links}>
                                <a href="https://www.instagram.com/realiz_eventos/" target="_blank" className={estilo.link_dourados}>Instagram</a>
                                <a  href="https://wa.me/5581986596934?text=Olá,%20quero%20um%20orçamento"
                                    target="_blank" className={estilo.link_dourados}>WhatsApp</a>
                            </div>

                            <Link to="/Servico" className={estilo.link_dourados}>Conheça nossa história →</Link>
                        </div>
                        <div className={estilo.container_divido}>
                            <strong className={estilo.titulos_contato}>Fale pelo WhatsApp</strong>
                            <p className={estilo.p_label}>Clique abaixo para iniciar uma conversa direta <br /> com nossa equipe</p>
                            <button className={estilo.butao_wwp}><a
                                href="https://wa.me/5581986596934?text=Olá,%20quero%20um%20orçamento"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={estilo.link_butao}
                            >
                                Conversar no WhatsApp
                            </a></button>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}
export default Home;