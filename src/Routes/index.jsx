import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Signup } from '../Pages/Signup';
import { Dashboard } from '../Pages/Dashboard/index';
import { Login } from '../Pages/Login/index';
import { useEffect } from 'react';

export function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('@Clube_do_livro:token');

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Dashboard history={history} authenticated={authenticated} />
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
    </Switch>
  );
}

export default Routes;
