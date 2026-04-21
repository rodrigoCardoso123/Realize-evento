import styles from "./NovoCombo.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function NovoCombo({ adicionarCombo, combos }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    icone: '',
    descricao: '',
    preco: '',
    precoPessoa: '',
    capacidade: '',
    duracao: '',
    corCabecalho: '',
    itensInclusos: ''
    
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit() {
     const novoCombo = {

    nome: form.nome,
    icone: form.icone,
    descricao: form.descricao,
    preco: form.preco,
    precoPessoa: form.precoPessoa,
    capacidade: form.capacidade,
    duracao: form.duracao,
    corCabecalho: form.corCabecalho,
    itensInclusos: form.itensInclusos
  };

 try {
    await axios.post(
      "https://countable-dismiss-undoing.ngrok-free.dev/combos",
      novoCombo,
      {
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      }
    );

    adicionarCombo(novoCombo);
    navigate('/Servico');

  } catch (erro) {
    console.error("Erro ao salvar:", erro);
  }
}
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <div className={styles.header}>
          <h2>Novo Combo</h2>
          <button className={styles.close} onClick={() => navigate('/Dashboard/combos')}>✕</button>
        </div>

        <div className={styles.form}>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Nome do Combo *</label>
              <input type="text" name="nome" onChange={handleChange} placeholder="Ex: Buffet Premium" />
            </div>

            <div className={styles.field}>
              <label>Ícone (emoji)</label>
              <input type="text" name="icone" onChange={handleChange} placeholder="📷" />
            </div>
          </div>

          <div className={styles.field}>
            <label>Descrição</label>
            <textarea onChange={handleChange} name="descricao" placeholder="Breve descrição do combo"></textarea>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Preço (texto)</label>
              <input type="text" name="preco" onChange={handleChange} placeholder="A partir de R$ 85,00" />
            </div>

            <div className={styles.field}>
              <label>Preço por pessoa</label>
              <input type="text" name="precoPessoa" onChange={handleChange} placeholder="por pessoa" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Capacidade</label>
              <input type="text" name="capacidade" onChange={handleChange} placeholder="Até 500 pessoas" />
            </div>

            <div className={styles.field}>
              <label>Duração</label>
              <input type="text" name="duracao" onChange={handleChange} placeholder="4 horas" />
            </div>
          </div>

          <div className={styles.field}>
            <label>Cor do cabeçalho (gradiente CSS)</label>
            <input
              type="text" onChange={handleChange} name="corCabecalho"
              placeholder="linear-gradient(to right,#D4AF37,#B8960C)"
            />
            <span className={styles.hint}>
              Ex: linear-gradient(to right,#D4AF37,#B8960C)
            </span>
          </div>

          <div className={styles.field}>
            <label>Itens Inclusos (um por linha)</label>
            <textarea onChange={handleChange} name="itensInclusos" placeholder="Entrada com 5 opções"></textarea>
          </div>
          <div className={styles.actions}>
            <button className={styles.cancel} onClick={() => navigate('/Dashboard/combos')}>Cancelar</button>
            <button className={styles.submit} onClick={handleSubmit}>Salvar Combo</button>
          </div>
        </div>
      </div>
    </div>
  );
}