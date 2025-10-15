import Header from "./components/organisms/Header";
import HomePage from "./components/pages/HomePage";
 
 
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <footer className="p-4 text-center text-sm bg-gray-200">
        © {new Date().getFullYear()} Huerto Hogar
      </footer>
    </div>
  );
}
 
 
export default App;