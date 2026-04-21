import estilo from "./servico.module.css"
import logo from '../../assets/logo.jfif'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Servico({ combos, deletarCombo }) {
    const navigate = useNavigate();


    const api = axios.create({
    baseURL: 'https://countable-dismiss-undoing.ngrok-free.dev',
    headers: {
        'ngrok-skip-browser-warning': 'true'
    }
});


    return (
        <>
            <div className={estilo.container_head}>
                <p className={estilo.p_dourados}>O que oferecemos</p>
                <h1 className={estilo.h1_sections}>Nossos Serviços</h1>
                <p className={estilo.p_branco_head}>Escolha o combo perfeito para seu evento.
                    Cada um foi cuidadosamente elaborado para proporcionar uma experiência inesquecível.</p>
            </div>

            <section className={estilo.section_combo}>
                <div className={estilo.container_card}>
                    <div className={estilo.card}>
                        <div className={estilo.head_card}>
                            <h1>🍽️</h1>
                            <h2 className={estilo.h2_card}>Buffet Premium</h2>
                            <p className={estilo.p_head_card}>Experiência gastronômica completa com variedade
                                de pratos quentes e frios</p>
                        </div>
                        <div className={estilo.card_descricao}>
                            <h1 className={estilo.preco_card}>A partir de R$ 85,00</h1>
                            <p className={estilo.p_card_descricao}>por pessoa</p>
                            <div className={estilo.card_capacidade_horario}>
                                <div className={estilo.informacao_capacidade_horario}>
                                    <p className={estilo.p_capacidade_horario}>Capacidade</p>
                                    <strong>Até 500 pessoas</strong>
                                </div>
                                <div className={estilo.informacao_capacidade_horario}>
                                    <p className={estilo.p_capacidade_horario}>Duração</p>
                                    <strong>4 horas</strong>
                                </div>
                            </div>
                            <div className={estilo.card_lista}>
                                <strong>Incluso no Combo</strong>
                                <ul>
                                    <li>Entrada com 5 opções de pratos</li>
                                    <li>Prato principal com 6 opções</li>
                                    <li>Acompanhamentos variados</li>
                                    <li>Saladas frescas e frutas</li>
                                    <li>Sobremesas artesanais</li>
                                    <li>Bebidas (refrigerante, suco, água)</li>
                                    <li>Garçom durante o evento</li>
                                    <li>Louça e talheres premium</li>
                                </ul>
                            </div>
                            <button className={estilo.butao_banner} onClick={() => {
                                navigate("/", { state: { scrollTo: "formulario" } });
                            }}>SOLICITAR ORÇAMENTO</button>
                        </div>
                    </div>

                    <div className={estilo.card}>
                        <div className={estilo.head_card_coquetel}>
                            <h1>🥂</h1>
                            <h2 className={estilo.h2_card}>Coquetel Executivo</h2>
                            <p className={estilo.p_head_card}>Ambiente sofisticado com seleção de petiscos e
                                bebidas premium</p>
                        </div>
                        <div className={estilo.card_descricao}>
                            <h1 className={estilo.preco_card}>A partir de R$ 65,00</h1>
                            <p className={estilo.p_card_descricao}>por pessoa</p>
                            <div className={estilo.card_capacidade_horario}>
                                <div className={estilo.informacao_capacidade_horario}>
                                    <p className={estilo.p_capacidade_horario}>Capacidade</p>
                                    <strong>Até 300 pessoas</strong>
                                </div>
                                <div className={estilo.informacao_capacidade_horario}>
                                    <p className={estilo.p_capacidade_horario}>Duração</p>
                                    <strong>3 horas</strong>
                                </div>
                            </div>
                            <div className={estilo.card_lista}>
                                <strong>Incluso no Combo</strong>
                                <ul>
                                    <li>Seleção de 8 petiscos variados</li>
                                    <li>Frutas e queijos importados</li>
                                    <li>Bebidas premium (vinhos, espumantes)</li>
                                    <li>Refrigerantes e sucos</li>
                                    <li>Água mineral e gelo</li>
                                    <li>Garçom circulando com bandejas</li>
                                    <li>Louça e talheres descartáveis premium</li>
                                    <li>Decoração elegante</li>
                                </ul>
                            </div>
                            <button className={estilo.butao_banner} onClick={() => {
                                navigate("/", { state: { scrollTo: "formulario" } });
                            }}>SOLICITAR ORÇAMENTO</button>
                        </div>
                    </div>

                    <div className={estilo.card}>
                        <div className={estilo.head_card_desgustacao}>
                            <h1>👨‍🍳</h1>
                            <h2 className={estilo.h2_card}>Menu Degustação</h2>
                            <p className={estilo.p_head_card}>Experiência culinária refinada com pratos assinados
                                do chef</p>
                        </div>
                        <div className={estilo.card_descricao}>
                            <h1 className={estilo.preco_card}>A partir de R$120,00</h1>
                            <p className={estilo.p_card_descricao}>por pessoa</p>
                            <div className={estilo.card_capacidade_horario}>
                                <div className={estilo.informacao_capacidade_horario}>
                                    <p className={estilo.p_capacidade_horario}>Capacidade</p>
                                    <strong>Até 150 pessoas</strong>
                                </div>
                                <div className={estilo.informacao_capacidade_horario}>
                                    <p className={estilo.p_capacidade_horario}>Duração</p>
                                    <strong>3 horas</strong>
                                </div>
                            </div>
                            <div className={estilo.card_lista}>
                                <strong>Incluso no Combo</strong>
                                <ul>
                                    <li>Entrada gourmet assinada</li>
                                    <li>Prato principal com 3 opções</li>
                                    <li>Acompanhamentos especiais</li>
                                    <li>Paleta de queijos finos</li>
                                    <li>Sobremesa gourmet</li>
                                    <li>Vinho harmonizado</li>
                                    <li>Água mineral premium</li>
                                    <li>Serviço de garçom especializado</li>
                                    <li>Louça e talheres premium</li>
                                    <li>Apresentação dos pratos pelo chef</li>
                                </ul>
                            </div>
                            <button className={estilo.butao_banner} onClick={() => {
                                navigate("/", { state: { scrollTo: "formulario" } });
                            }}>SOLICITAR ORÇAMENTO</button>
                        </div>
                    </div>

                    {combos.map((combo) => (
                        <div className={estilo.card} key={combo.id}>
                            <div className={estilo.head_card}>
                                <h1>{combo.icone}</h1>
                                <h2 className={estilo.h2_card}>{combo.nome}</h2>
                                <p className={estilo.p_head_card}>{combo.descricao}</p>
                            </div>

                            <div className={estilo.card_descricao}>
                                <h1 className={estilo.preco_card}>A partir de R$ {combo.preco}</h1>
                                <p className={estilo.p_card_descricao}>{combo.precoPessoa}</p>

                                <div className={estilo.card_capacidade_horario}>
                                    <div className={estilo.informacao_capacidade_horario}>
                                        <p className={estilo.p_capacidade_horario}>Capacidade</p>
                                        <strong>Até {combo.capacidade} pessoas</strong>
                                    </div>
                                    <div className={estilo.informacao_capacidade_horario}>
                                        <p className={estilo.p_capacidade_horario}>Duração</p>
                                        <strong>{combo.duracao}</strong>
                                    </div>
                                </div>

                                <div className={estilo.card_lista}>
                                    <strong>Incluso no Combo</strong>
                                    <ul>
                                        {combo.itensInclusos?.split("\n").map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button className={estilo.butao_banner} onClick={() => {
                                    navigate("/", { state: { scrollTo: "formulario" } });
                                }}>SOLICITAR ORÇAMENTO</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={estilo.compatacao_combo}>
                <h1>Comparação de Combos</h1>
                <table className={estilo.tabela} border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>Buffet Premium</th>
                            <th>Coquetel Executivo</th>
                            <th>Menu Degustação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tipo de Serviço</td>
                            <td>Refeição Completa</td>
                            <td>Petiscos & Bebidas</td>
                            <td>Culinária Refinada</td>
                        </tr>
                        <tr>
                            <td>Ideal Para</td>
                            <td>Casamentos, Corporativos</td>
                            <td>Coquetel, Lançamentos</td>
                            <td>Jantares Especiais</td>
                        </tr>
                        <tr>
                            <td>Pratos Principais</td>
                            <td>6 opções</td>
                            <td>Petiscos variados</td>
                            <td>3 opções gourmet</td>
                        </tr>
                        <tr>
                            <td>Bebidas Incluídas</td>
                            <td>Básicas</td>
                            <td>Premium</td>
                            <td>Vinho Harmonizado</td>
                        </tr>
                        <tr>
                            <td>Garçom</td>
                            <td className={estilo.td_dourado}>✔</td>
                            <td className={estilo.td_dourado}>✔</td>
                            <td className={estilo.td_dourado}>✔</td>
                        </tr>
                        <tr>
                            <td>Preço Médio</td>
                            <td className={estilo.td_dourado}>R$ 85,00</td>
                            <td className={estilo.td_dourado}>R$ 65,00</td>
                            <td className={estilo.td_dourado}>R$ 120,00</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className={estilo.section_orcamento}>
                <h1>Pronto para Escolher?</h1>
                <p>Solicite um orçamento personalizado e nossa equipe entrará em
                    contato para discutir os detalhes do seu evento.</p>
                <button className={estilo.butao_banner} onClick={() => {
                    navigate("/", { state: { scrollTo: "formulario" } });
                }}>SOLICITAR ORÇAMENTO AGORA</button>
            </section>

            <footer className={estilo.footer}>
                <img src={logo} alt="" />
                <div>
                    <p>© 2026 Realize Eventos | Foco em Casamentos e Festas Adultas</p>
                </div>
            </footer>
        </>
    )
}
export default Servico;