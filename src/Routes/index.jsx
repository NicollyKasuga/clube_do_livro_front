import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Signup } from "../Pages/Signup";
import { Dashboard } from "../Pages/Dashboard/index";
import { Login } from "../Pages/Login/index"
import { useEffect } from "react";

export function Routes() {
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() =>{
        const token = JSON.parse(localStorage.getItem("@Clube_do_livro:token"));

         if(token) {
             return setAuthenticated(true);
         }
    },[authenticated])

    const history = useHistory();

    return(
        <Switch>
            <Route exact path="/">
                <Dashboard authenticated={authenticated}/>
            </Route>
            <Route exact path="/Entrar">
                <Login history={history} authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
            <Route exact path="/Cadastro">
                <Signup history={history} authenticated={authenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes;