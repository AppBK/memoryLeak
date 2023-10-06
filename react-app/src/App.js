import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import OpenModalButton from "./components/OpenModalButton";
import LeakyModal from "./components/Leaky";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route path="/">
            <div id="landing">
              <OpenModalButton
                modalComponent={<LeakyModal />}
                buttonText={"MAKE A MEMORY LEAK!!!"}
                buttonStyle={"open-me"}
              />
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
