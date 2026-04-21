import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Topo from './componentes/topo/topo.jsx'
import './App.css'
import Servico from './pages/Servicos/servico.jsx'
import Historia from './pages/Sobre-nos/historia.jsx'
import AreaAdministrador from './pages/area-administrador/area-administrador.jsx'
import Dashboard from './pages/dashborard-administrador/dashboard.jsx'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { HashRouter } from 'react-router-dom'

function Layout({ combos, adicionarCombo, deletarCombo, orcamento }) {
  const location = useLocation();

  const esconderTopo =
    location.pathname === '/AreaAdministrador' ||
    location.pathname === '/Dashboard' ||
    location.pathname === '/Dashboard/combos' ||
    location.pathname === '/Dashboard/orcamentos' ||
    location.pathname === '/Dashboard/config' ||
    location.pathname === '/Dashboard/Novocombo';

  return (
    <>
      {!esconderTopo && <Topo />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Servico' element={<Servico combos={combos} deletarCombo={deletarCombo} />} />
        <Route path='/Historia' element={<Historia />} />
        <Route path='/AreaAdministrador' element={<AreaAdministrador />} />
        <Route path='/Dashboard/*' element={<Dashboard combos={combos} 
        adicionarCombo={adicionarCombo} 
        deletarCombo={deletarCombo} 
        orcamento={orcamento}/>} />
      </Routes>
    </>
  );
}

function App() {
  const [combos, setCombos] = useState([]);

  const [orcamento, setOrcamento] = useState([])

  function adicionarCombo(novoCombo) {
    setCombos(prev => [...prev, novoCombo]);
  }

  useEffect(() => {
    async function carregar() {
      try {
        const res = await axios.get(
          "https://realizeventos.onrender.com/combos",
          {
            headers: { "ngrok-skip-browser-warning": "true" }
          }
        );

        setCombos(res.data); 

      } catch (erro) {
        console.error("Erro ao carregar combos:", erro);
      }
    }

    carregar();
  }, []);

  useEffect(() => {
    async function carregarOrcamentos() {
      try {
        const resposta = await axios.get(
          "https://realizeventos.onrender.com/orcamentos",
          {
            headers: { "ngrok-skip-browser-warning": "true" }
          }
        );

        setOrcamento(resposta.data.dados || []); 

      } catch (erro) {
        console.error("Erro ao carregar combos:", erro);
      }
    }

   carregarOrcamentos();
  }, []);

  async function deletarCombo(id) {
    try {
      await axios.delete(
        `https://realizeventos.onrender.com/combos/${id}`,
        {
          headers: { "ngrok-skip-browser-warning": "true" }
        }
      );

      setCombos(prev => prev.filter(c => c.id !== id));

    } catch (erro) {
      console.error("Erro ao deletar:", erro);
    }
  }

  return (
    <BrowserRouter>
      <Layout combos={combos}
        adicionarCombo={adicionarCombo}
        deletarCombo={deletarCombo} 
        orcamento={orcamento}/>
    </BrowserRouter>
  )
}

export default App;
