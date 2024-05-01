import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      {/* //! Basic User passing with context */}
      {/*
        <Login/>
        <Profile/> 
      */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button */}
            
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}


          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
