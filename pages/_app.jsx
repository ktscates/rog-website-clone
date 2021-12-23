import "../styles/global.css"
import Navbar from "../component/Navbar";
import Header from "../component/Header"
import Partner from "../component/Partner";
import Why from "../component/Why";
import What from "../component/What";
import Testimony from "../component/Testimony";
import Twitter from "../component/Twitter";
import Journalist from "../component/Journalist";
import Logo from "../component/Logo";
import Footer from "../component/Footer";

function MyApp() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Partner />
      <Why />
      <What />
      <Testimony />
      <Twitter />
      <Journalist />
      <Logo />
      <Footer /> 
    </div>
  );
}

export default MyApp
