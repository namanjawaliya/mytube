import Body from "@/components/Body";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
