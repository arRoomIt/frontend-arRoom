import './App.scss';
import AppRouter from './components/sections/Routers/AppRouter';

import {UserProvider} from './auth/UserContext';

function App() {
  return (
    <UserProvider>
      <AppRouter/>
    </UserProvider>
  );
}

export default App;
