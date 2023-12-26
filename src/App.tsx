import Body from "@/components/Body";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

function App() {
  return (
    <div className="fixed w-full">
      <Header />
      <div className="flex viewport-height-minus-header">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
