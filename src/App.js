import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages";
import Doctors from "./pages/Doctors";
import Test from "./pages/Test";
import Faq from "./pages/Faq";
import Profil from "./pages/Profil";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Videos from "./pages/Videos";
import News from "./pages/News";
import Events from "./pages/Events";
import SideBar from "../src/components/SideBar";
import Navbar from "../src/components/Navbar";
import OneBlog from "../src/components/OneBlog";
import Login from "../src/components/Login";

import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";

import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is: ", authUser)
      if (authUser) {
        // The user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        })
        );
      } else {
        // The user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch])

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      {user ? (
        <>
          <SideBar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/videos">
              <Videos />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profil">
              <Profil />
            </Route>
            <Route path="/blogs" exact>
              <Blogs />
            </Route>
            <Route path="/blogs/:id" component={OneBlog}/>
          </Switch>
        </>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
