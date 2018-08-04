import React from "react";
import {BrowserRouter,Route,Swich} from "react-router-dom";
import Categorie from "./categorie";
import App from "./App";

class Router extends React.component{
   render(){
       return(
           <BrowserRouter>
               <switch>
                   <Route exact path="/" component={App} />
                   <Route exact path="/categorie/:storeId" component={Categorie} />
               </switch>
           </BrowserRouter>
       );
   }
}

export default Router;