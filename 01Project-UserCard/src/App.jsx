import Card from "./Card";

function App() {
  return (
    <>
      <div className="bg-slate-800 w-3xl m-auto flex justify-center rounded-full">
        <h1 className="bg-green-400 text-4xl p-5 m-5 rounded-full text-center w-2xl">
          Hello Sky!
        </h1>
      </div>
      <Card btn="Click me sky" userName="My Name Sky"/>
      <Card btn="Click me sky" userName="My Name Sky"/>
    </>
  );
}

export default App;