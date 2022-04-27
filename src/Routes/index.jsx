import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Routes() {
    const history = useHistory();

    return(
        <Switch>
            <Route exact path="/">

            </Route>
            <Route path="/Entrar">

            </Route>
            <Route path="Cadastro">

            </Route>
        </Switch>
    )
}