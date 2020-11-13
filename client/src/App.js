import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Save from './components/Save';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Jumbotron />
            <Container maxWidth="md">
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route exact path="/search">
                        <Search isSearch={true} />
                    </Route>
                    <Route exact path="/save">
                        <Save isSearch={false} />
                    </Route>

                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
