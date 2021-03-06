import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../Context/Alert/AlertContext";
import AuthContext from "../../Context/Auth/AuthContext";

const LogIn = (props) => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const {
        register,
        error,
        clearError,
        isAuthenticated,
        loginUser,
    } = authContext;

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { email, password } = user;

    const onchange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const onsubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setAlert("Please Fill The Form", "danger");
        } else {
            loginUser({
                email,
                password,
            });
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/");
        }
        if (error == "Invalid Credentials") {
            setAlert(error, "danger");
            clearError();
        }
    }, [error, isAuthenticated, props.history]);

    return (
        <div
            className="container register"
            style={{ width: "40%", marginTop: "10vh" }}
        >
            <h1 className="text-center">
                Account <span style={{ color: "#f9a323" }}>Log-In</span>
            </h1>
            <form onSubmit={onsubmit}>
                <div className="m-lg-3">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onchange}
                    />
                </div>
                <div className="m-lg-3">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onchange}
                    />
                </div>
                <button className="btn btn-primary w-100 m-lg-1">Log-In</button>
                <Link to="/register">
                    <button
                        className="btn btn-light w-100 m-lg-1"
                        style={{ color: "#f9a323" }}
                    >
                        Create a Account ?
          </button>
                </Link>
            </form>
        </div>
    );
};

export default LogIn;
