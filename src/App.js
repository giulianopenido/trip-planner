import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Views/Dashboard/Dashboard';
import smoothscroll from 'smoothscroll-polyfill';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

smoothscroll.polyfill();

function App() {

    return (
        <>
            <BrowserRouter>
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
