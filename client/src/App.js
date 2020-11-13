import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Save from './components/Save';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <NavBar />
            <Jumbotron />
            <Container maxWidth="md">
                <Search isSearch={true} />
                <Save isSearch={false} />
            </Container>
        </div>
    );
}

export default App;
