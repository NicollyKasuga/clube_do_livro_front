import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Dashboard } from "../Pages/Dashboard/indes";

export function Routes() {
     const history = useHistory();

    return(
        <Switch>
            <Route exact path="/">
                <Dashboard/>
            </Route>
            <Route path="/Entrar">

            </Route>
            <Route path="Cadastro">

            </Route>
        </Switch>
    )
}