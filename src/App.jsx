import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { ThemeProvider } from "./context/Theme/theme";
import UserContextProvider from "./context/UserContextProvider";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // ! actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    //! Basic User passing with context
    //! <UserContextProvider>
    //!    <Login/>
    //!     <Profile/> 
    //! </UserContextProvider>
<ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme Button */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* Card */}
          <Card/>

        </div>
      </div>
  </div>
</ThemeProvider>

  );
}

export default App;
