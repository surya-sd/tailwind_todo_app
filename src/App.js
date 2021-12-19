import { Todo } from "./Pages/Todo";

function App() {
  return (
    <div className="container  w-[100vw] h-[100vh] flex flex-col items-center justify-center mx-auto bg-slate-900 overflow-x-hiddenl">
      <h1 className="mb-5 text-4xl font-bold text-slate-300 font-mono from-neutral-200">Todo App</h1>
      <Todo />
    </div>
  );
}

export default App;
