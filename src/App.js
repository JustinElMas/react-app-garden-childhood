import "./App.css";
import Home from "./components/Home"
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Refer } from "./components/Refer";


function App () {
    return <div className="App">
        <Home></Home>
        <About></About>
        <Work></Work>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
        <Refer></Refer>
    </div>
}

export default App;