import estilo from './orcamento.module.css'


function Orcamento({ orcamento, deletarCombo }) {

  return (
    <div className={estilo.app}>

      <main className={estilo.dashboard}>

        <div className={estilo.topbar}>
          <h2>Orçamentos</h2>
          <span>{new Date().toLocaleDateString('pt-BR')}</span>
        </div>

        <div className={estilo.content}>
          <div className={estilo.actions}>
            <h4>Orçamentos Recebidos</h4>
            <button>Limpar Todos</button>
          </div>

          {!orcamento?.length ?  (
            <div className={estilo.recent}>
              <h3>📋</h3>
              <h4>Nenhum orçamento recebido</h4>
              <p>Os orçamentos enviados pelo site aparecerão aqui.</p>
            </div>
          ) : (
            <div className={estilo.lista}>
              {orcamento.map((orcamentos) => (
                <div key={orcamentos.id} className={estilo.card}>

                  <h3>{orcamentos.nome}</h3>

                  <p><strong>Telefone:</strong> {orcamentos.telefone}</p>
                  <p><strong>Email:</strong> {orcamentos.email}</p>

                  <p><strong>Tipo Do Evento:</strong> {orcamentos.tipoEvento}</p>
                  <p><strong>Numero De Convidados:</strong> {orcamentos.nConvidados}</p>
                  <p><strong>Data Do Evento:</strong> {orcamentos.dataEvento}</p>
                  <p><strong>Mensagem:</strong>{orcamentos.mensagem}</p>

                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Orcamento;