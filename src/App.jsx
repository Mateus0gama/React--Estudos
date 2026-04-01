import NovasTarefas from "./componets/NovasTarefas";
import Tarefas from "./componets/Tarefas";


function App (){
    return (
      <div>
        <h1 className="text-red-500"> Gererenciador de Tarefas</h1>
        <Tarefas />
        <NovasTarefas />
      </div>
    );
}
export default App;

