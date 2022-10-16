import Labs from "./labs/index";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index";
// navigation in Web application
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
            {/*in reactjs use className instead of class*/}
            <div className="container">
                {/*declare paths and map them to corresponding component */}
                <Routes>
                    {/*declare the Lab component as the default landing screen */}
                    <Route index
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
