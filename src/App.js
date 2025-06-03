import './App.css';

import Card from './components/card';

function App() {
  const biografia = "Aluno da escola SMG....";
  return (
    <div>
     <header>
        <Card
        fotoPerfil="fotoPerfil.jpeg"
        nome="Leonardo Castelan Barboza"
        biografia = {biografia}/>
     </header>
     <main>
        <section>
          <h1>Projetos</h1>
        </section>
     </main>
     <footer>
        <p>Desenvolvido por Leonardo Castelan - 2025</p>
     </footer>
    </div>
  );
}

export default App;