import estilo from './combos.module.css'
import axios, { Axios } from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Combos({ combos, deletarCombo }) {
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'https://countable-dismiss-undoing.ngrok-free.dev',
    headers: {
      'ngrok-skip-browser-warning': 'true'
    }
  });

  return (
    <div className={estilo.app}>


      <main className={estilo.dashboard}>

        <div className={estilo.topbar}>
          <h2>Combos</h2>
          <span>{new Date().toLocaleDateString('pt-BR')}</span>
        </div>

        <div className={estilo.content}>
          <div className={estilo.actions}>
            <h4>Gerenciar Combos</h4>
            <button onClick={() => navigate('/Dashboard/Novocombo')}>+ Novo Combo</button>
          </div>

          {combos.length === 0 ? (

            <div className={estilo.recent}>
              <h3>🍽️</h3>
              <h4>Nenhum combo cadastrado</h4>
              <p>Clique em "Novo Combo" para adicionar o primeiro.</p>
            </div>

          ) : (

            <div className={estilo.lista}>
              {combos.map((combo) => (
                <div key={combo.id} className={estilo.card}>

                  <h3>{combo.icone} {combo.nome}</h3>
                  <p>{combo.descricao}</p>

                  <p><strong>Preço:</strong> {combo.preco}</p>
                  <p>{combo.precoPessoa}</p>

                  <p><strong>Capacidade:</strong> {combo.capacidade}</p>
                  <p><strong>Duração:</strong> {combo.duracao}</p>

                  <ul>
                    {(combo.itensInclusos || "").split("\n").map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <button
                    className={estilo.btnDelete}
                    onClick={() => deletarCombo(combo.id)}
                  >
                    🗑️ Deletar
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Combos;