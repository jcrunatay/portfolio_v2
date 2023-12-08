import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollToTopOnRefresh from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
        <ScrollToTopOnRefresh />
        <Header />
        <Main />
        <Footer/>
    </div>
  );
}

export default App;
