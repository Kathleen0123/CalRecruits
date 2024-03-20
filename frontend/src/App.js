import './App.css'
import Router from './components/Router'
import Context from './components/Context'

function App() {
  const userInfo = {
    name: "Cal Recruits",
    email: "berkeleycalrecruits@gmail.com",
    loggedIn: true,
    admin: true
  }

  return (
    <>
      <Context.Provider value={userInfo}>
        <Router />
      </Context.Provider>
    </>
  );
}

export default App;
