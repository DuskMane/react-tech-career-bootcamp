import './App.css';
import Content from './components/Content';
import { TodoProvider } from './components/Context/TodoContext';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <TodoProvider>
        <section className='todoapp'>
          <Header />
          <Content />
        </section>
        <Footer />
      </TodoProvider>
    </div>
  );
}

export default App;
