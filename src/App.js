import ReactDOM from "react-dom/client";
import React from "react";
import Button from "react-bootstrap/Button";
import PageAcceuil from "./page_acceuil/PageAcceuil";
import PageUser from "./page_user/PageUser";
import PageAdmin from "./page_admin/PageAdmin";
import Login from "./page_login/Login";

function App() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    return (
        <div>
            <Button onClick={() =>root.render(<React.StrictMode><PageAcceuil/></React.StrictMode>)}> Page Acceuil</Button>
            <Button onClick={() =>root.render(<React.StrictMode><PageUser/></React.StrictMode>)}> Page User</Button>
            <Button onClick={() =>root.render(<React.StrictMode><PageAdmin/></React.StrictMode>)}> Page Admin</Button>
            <Button onClick={() =>root.render(<React.StrictMode><Login/></React.StrictMode>)}> Page Login</Button>
        </div>
    );
}

export default App;
