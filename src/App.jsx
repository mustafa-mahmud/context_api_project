import { useEffect } from 'react';
import { Navbar, CartContainer, Modal } from './components';
import { useContextAPI } from './context/contextAPI.js';

function App() {
  const { isOpen, isLoading, errMsg, getCartItems } = useContextAPI();

  useEffect(() => {
    getCartItems();
  }, []);
  //////////////////////////////////////////////////
  if (errMsg) {
    return <h2>{errMsg}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
