import '../css/App.scss';

import Navbar from './components/Navbar';
import Header from './components/Header';
import LibMagSys from './components/LibMagSys';
import SmallProjects from './components/SmallProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LibMagSys />
      <SmallProjects />
      <Footer />
    </div>
  );
}

export default App;
