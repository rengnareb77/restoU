import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Login from "./Login";

function PageLogin() {

    return(<div className="PageLogin">
        <Header/>
        <div>
            <Login/>
        </div>
        <Footer/>
    </div>
    );
}

export default PageLogin;
