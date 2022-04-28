import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Signup } from "../Pages/Signup";

export function Routes() {
    const history = useHistory();

    return(
        <Switch>
            <Route exact path="/">

            </Route>
            <Route path="/Entrar">

            </Route>
            <Route exact path="/Cadastro">
                <Signup/>
            </Route>
        </Switch>
    )
}