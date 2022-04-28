import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {Login} from "../Pages/Login/index"

function Routes() {
    const history = useHistory();

    return(
        <Switch>
            <Route exact path="/">
                
            </Route>
            <Route exact path="/Entrar">
                <Login/>
            </Route>
            <Route path="Cadastro">

            </Route>
        </Switch>
    )
}

export default Routes;