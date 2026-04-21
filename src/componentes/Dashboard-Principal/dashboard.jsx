import estilo from './dashboard.module.css'
import { useNavigate } from 'react-router-dom';

function Dashboardd({orcamento, combos}) {
  const navigate = useNavigate( );

  const novos = orcamento?.filter(orc => {
  const dataCriacao = new Date(orc.createdAt);
  const agora = new Date();

  const diffHoras = (agora - dataCriacao) / (1000 * 60 * 60);

  return diffHoras <= 24;
}).length;

  return (
    <div className={estilo.app}>

      <main className={estilo.dashboard}>

        <div className={estilo.topbar}>
          <h2>Dashboard</h2>
          <span>{new Date().toLocaleDateString('pt-BR')}</span>
        </div>

        <div className={estilo.cards}>
          <div className={estilo.card}>
            <span>🍽️</span>
            <div>
              <h3>{combos?.length || 0}</h3>
              <p>Combos Ativos</p>
            </div>
          </div>

          <div className={estilo.card}>
            <span>📋</span>
            <div>
              <h3>{orcamento?.length || 0}</h3>
              <p>Orçamentos</p>
            </div>
          </div>

          <div className={estilo.card}>
            <span>🆕</span>
            <div>
              <h3>{novos || 0}</h3>
              <p>Novos</p>
            </div>
          </div>

          <div className={estilo.card}>
            <span>✅</span>
            <div>
              <h3>0</h3>
              <p>Atendidos</p>
            </div>
          </div>
        </div>


        <div className={estilo.content}>
          <div className={estilo.actions}>
            <h4>Ações Rápidas</h4>
            <button className={estilo.primary} onClick={() => navigate('/Dashboard/Novocombo')} >+ Novo Combo</button>
            <button onClick={() => navigate('/Dashboard/orcamentos')}>📋 Ver Orçamentos</button>
            <button onClick={() => navigate('/')}>🌐 Abrir Site</button>
          </div>

          <div className={estilo.recent}>
            <h4>Últimos Orçamentos</h4>
            <p>Nenhum orçamento ainda.</p>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Dashboardd;