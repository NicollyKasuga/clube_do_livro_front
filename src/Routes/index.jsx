import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Signup } from '../Pages/Signup';
import { Dashboard } from '../Pages/Dashboard/index';
import { Login } from '../Pages/Login/index';
import { useEffect } from 'react';
import { ConfirmEmail } from '../Pages/ConfirmEmail';

export function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@Clube_do_livro:token'));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Dashboard authenticated={authenticated} />
      </Route>
      <Route exact path="/entrar">
        <Login
          history={history}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/cadastro">
        <Signup history={history} authenticated={authenticated} />
      </Route>
      <Route path="/confirmacao_de_email/:token">
        <ConfirmEmail history={history}/>
      </Route>
    </Switch>
  );
}

export default Routes;
