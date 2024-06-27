import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Add from "./container/Add.tsx";
import Home from "./container/Home.tsx";
import About from "./container/About.tsx";
import Contact from "./container/Contact.tsx";
import ReadMore from "./container/ReadMore.tsx";
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
                    <Route path="/posts/:id" element={(
                        <ReadMore/>
                    )}/>
                </Routes>
            </div>
        </div>
    );
};

export default App
