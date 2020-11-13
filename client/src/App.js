import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Container from '@material-ui/core/Container';

function App() {
    return (
        <div>
            <NavBar />
            <Jumbotron />
            <Container maxWidth="md">
                <Search />
            </Container>
        </div>
    );
}

export default App;
