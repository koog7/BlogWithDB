import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Add from "./components/Add.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
const App = () => {
    return (
        <div>
            <div>
                <div className={'navbar'}>
                    <h2>My blog</h2>
                    <div>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/new-post">Add</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={(
                        <Home />
                    )}/>
                    <Route path="/new-post" element={(
                        <Add/>
                    )}/>
                    <Route path="/about" element={(
                        <About/>
                    )}/>
                    <Route path="/contacts" element={(
                        <Contact/>
                    )}/>
                </Routes>
            </div>
        </div>
    );
};

export default App
