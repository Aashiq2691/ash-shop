import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen'
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <HomeScreen></HomeScreen>
        </Container>
      </main>
      <Footer />
   </>
  );
}

export default App;
