
import Tuiter from "./tuiter/index";
// navigation in Web application
import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";


function App() {
    return (
        <BrowserRouter>
            {/*in reactjs use className instead of class*/}
            <div className="container">
                {/*declare paths and map them to corresponding component */}
                <Routes>

                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                    <Route path="/" element={<Navigate to="/tuiter" replace/>} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
