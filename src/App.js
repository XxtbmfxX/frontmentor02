import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Opinions from "./components/Opinions";
import Options from "./components/Options";

function App() {
  return (
    <div className="App section">
      <Header />
      <Landing />
      <Options />
      <Feedback />
      <Opinions />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
