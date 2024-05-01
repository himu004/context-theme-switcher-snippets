import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName,password})
    }

    return (
        <div className="border space-y-5">
            <h2>Login</h2>
            <input 
            type="text" 
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <input 
            type="text" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit} 
            className="py-3 px-2 bg-slate-600 text-white rounded-md">
                Submit
            </button>
        </div>
    );
};

export default Login;