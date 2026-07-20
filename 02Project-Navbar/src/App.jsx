import Header from "./components/Header/Header";
import Page from "./components/Meinpage/Page";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-300">
      <Header />

      {/* Header ki height 64px (h-16) hai, isliye mt-16 */}
      <main className="pt-16 p-6">
        <Page />
      </main>
    </div>
  );
};

export default App;