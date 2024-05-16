import { Route, Routes } from 'react-router-dom';
import CurrencyConverterApp from './Pages/MainPage';
import RouteNotFound from './Pages/RouteNotFound/RouteNotFound';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' Component={CurrencyConverterApp} />
      <Route path='*' Component={RouteNotFound} />
    </Routes>
    </>
  )
}

export default App
