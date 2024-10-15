import "./App.css";
import "./ConvertSCSS/main.css";
import "./ConvertSCSS/font-awesome.css";
import { Menu } from "./components/menu";
import { Header } from "./components/Header";
import { Partners } from "./components/Partners";
import { Contact } from "./components/contact";
import { Solutions } from "./components/Solutions";
import { Details } from "./components/Details";
import { Expertise } from "./components/Expertise";
import { VideoModal } from "./components/VideoModal";
import { Pricing } from "./components/Pricing";
import { Projects } from "./components/Projects";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <Partners />
      <Contact />
      <Solutions />
      <Details />
      <Expertise />
      <VideoModal />
      <Pricing />
      <Projects />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
