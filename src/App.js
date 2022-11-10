import ReactDOM from "react-dom/client";
import React from "react";

import PageUser from "./page_user/PageUser";
import PageAdmin from "./page_admin/PageAdmin";
import PageLogin from "./page_login/PageLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page_acceuil/Home";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pageUser" element={<PageUser/>}/>
          <Route path="/pageAdmin" element={<PageAdmin/>}/>
          <Route path="/pageLogin" element={<PageLogin/>}/>

  
          {/*si n'importe quoi dans l'url on redirige vers home */}
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    );
  };

export default App;
