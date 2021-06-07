import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { AuthProvider } from "../contexts/AuthContext";
import ChatRoom from "./ChatRoom";


function App() {
  return (
    <div>
      <section>
        <Router>
          <AuthProvider>
            <Switch>
              
              <Route path="/chats" component={ChatRoom} />
              <Route path="/" component={Login} />
              
            </Switch>
          </AuthProvider>
        </Router>
        </section>
    </div>
  );
}



export default App;
