import './App.css';
import Overlay from './components/Overlay';
import { useOverlayWithContext } from './hooks/useOverlayWithContext';
import Footer from './components/Footer';

function App() {
  const { isOpen, toggleIsOpen } = useOverlayWithContext();
  return (
    <div className="App">
      {isOpen && <Overlay />}
      <main>
        <h1
          style={{
            paddingBottom: '100px',
          }}
        >
          Context and Hook Example
        </h1>
        <hr />
        <button onClick={toggleIsOpen}>Toggle Overlay</button>
      </main>

      <Footer />
    </div>
  );
}

export default App;
