import './App.css'

function App() {

  const titulo = "Titulo do vídeo"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
   
      <div className='tela-inteira'>
          <header>
              <h1>LabeTube</h1>
              <input type="text" placeholder="Busca" id="campoDeBusca"/>
          </header>

          <main>
              <nav className='menu-vertical'>
                  <ul>
                    <li className='botoes-meunu-vertical'>Início</li>
                    <li className='botoes-meunu-vertical'>Em alta</li>
                    <li className='botoes-meunu-vertical'>Incrições</li>
                    <hr/>
                    <li className='botoes-meunu-vertical'>Originais</li>
                    <li className='botoes-meunu-vertical'>Histórico</li>
                  </ul>
              </nav>

              <section className='painel-de-videos'>
                  <div className='box-pagina-principal media1' onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=1 "/>
                      <h4>{titulo}</h4>
                  </div>

                  <div className='box-pagina-principal media2' onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=2 " />
                      <h4>{titulo}</h4>
                  </div>

                  <div className='box-pagina-principal media3' onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=3 "/>
                      <h4>{titulo}</h4>
                  </div>

                  <div className='box-pagina-principal media4' onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=4 "/>
                      <h4>{titulo}</h4>
                  </div>

                  <div className='box-pagina-principal media5' onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=5 "/>
                      <h4>{titulo}</h4>
                  </div>

                  <div className='box-pagina-principal media6' onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=6 "/>
                      <h4>{titulo}</h4>
                  </div>

                  <div className='box-pagina-principal media7' onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=7 "/>
                      <h4>{titulo}</h4>
                  </div>

                  <div className='box-pagina-principal media8' onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=8 "/>
                      <h4>{titulo}</h4>
                  </div>
              </section>
          </main>

          <footer>
              <h4>Oi! Eu moro no footer!</h4>
          </footer>
        </div>
        
  
  )
}

export default App
