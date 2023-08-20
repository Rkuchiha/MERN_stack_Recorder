import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
import './App.css'
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes />
      <Footer />
    </AuthProvider>
  );
}

export default App;