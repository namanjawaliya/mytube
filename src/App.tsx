import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import RouterOutlet from "./components/routes/RouterOutlet";

function App() {
  return (
    <div className="fixed w-full h-screen scroll-smooth">
      <Header />
      <div className="flex h-full w-full">
        <Sidebar />
        <RouterOutlet />
      </div>
    </div>
  );
}

export default App;
