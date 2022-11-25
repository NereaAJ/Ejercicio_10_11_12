import './App.css';
import TaskListComponents from './components/container/task_list';
import Ejercicio from './components/pure/ejercicio';
import Optionalrender from './components/pure/optionalRender';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente de listado de Estado de Contacto */}
       {/* <TaskListComponents></TaskListComponents> */}

       <Optionalrender></Optionalrender>
       {/* <Ejercicio></Ejercicio> */}
      </header>
    </div>
  );
}

export default App;
