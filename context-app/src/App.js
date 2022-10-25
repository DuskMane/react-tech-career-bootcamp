import './App.css';
import Container from './components/Container';

import {ThemeProvider} from "./context/ThemeContext"
import {UserProvider} from "./context/UserContext"
import ChangeBtn from './components/ChangeBtn'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

function App() {
  return (
    <ThemeProvider>
    <UserProvider>
      <Container />
      <ComponentA />
      <hr />
      <ComponentB />
      <br />
      <br />
      <ChangeBtn />
    </UserProvider>
    </ThemeProvider>
  );
}

export default App;
