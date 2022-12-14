import { Switch, Route } from "react-router-dom";

import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import Calculator from "./components/Calculator"
import UploadImage from "./components/UploadImage";
import AddText from "./components/AddText";
import Notification from "./components/Notification";


function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/uploadimage" component={UploadImage} />
        <Route path="/addtext" component={AddText} />
        <Route path="/notification" component={Notification} />
      </Switch>
    </div>
  );
}

export default App;
