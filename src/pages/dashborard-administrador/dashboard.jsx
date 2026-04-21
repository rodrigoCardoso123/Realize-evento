import { Routes, Route, NavLink } from 'react-router-dom'
import estilo from './dashboard.module.css'
import logo from '../../assets/logo.jfif'
import Dashboardd from '../../componentes/Dashboard-Principal/dashboard'
import Combos from '../../componentes/Combos/combos'
import Orcamento from '../../componentes/orçamentos/orcamento'
import Configuração from '../../componentes/Configuração/configuracao'
import NovoCombo from '../../componentes/Combos/NovoCombo'
import { useNavigate } from 'react-router-dom'

function Dashboard({ adicionarCombo, deletarCombo, combos, orcamento }) {
  const navigate = useNavigate();
  return (
    <div className={estilo.app}>

      {/* Sidebar */}
      <aside className={estilo.sidebar}>
        <div>
          <div className={estilo.logo}>
            <img src={logo} alt="" />
            <p>PAINEL ADMINISTRATIVO</p>
          </div>

          <ul className={estilo.menu}>
            <li>
              <NavLink to="/Dashboard" className={estilo.nav}>📊 Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/Dashboard/combos" className={estilo.nav}>🍽️ Combos</NavLink>
            </li>
            <li>
              <NavLink to="/Dashboard/orcamentos" className={estilo.nav}>📋 Orçamentos</NavLink>
            </li>
            <li>
              <NavLink to="/Dashboard/config" className={estilo.nav}>⚙️ Configurações</NavLink>
            </li>
          </ul>
          <a href="/" className={estilo.nav_link}>🌐 Ver Site</a>
        </div>

         <div className={estilo.footer}>
          <small>admin@seusite.com</small>
          <button onClick={() => navigate('//AreaAdministrador')}>Sair do Painel</button>
        </div>
      </aside>

      <main className={estilo.dashboard}>
        <Routes>
          <Route path="/" element={<Dashboardd orcamento={orcamento} combos={combos}/>} />
          <Route path="combos" element={<Combos combos={combos} adicionarCombo={adicionarCombo} deletarCombo={deletarCombo}/>} />
          <Route path="orcamentos" element={<Orcamento
          orcamento={orcamento} deletarCombo={deletarCombo}/>} />
          <Route path="config" element={<Configuração/>} />
          <Route path="Novocombo" element={<NovoCombo combos={combos} adicionarCombo={adicionarCombo} deletarCombo={deletarCombo}/>} />
        </Routes>
      </main>

    </div>
  )
}

export default Dashboard;