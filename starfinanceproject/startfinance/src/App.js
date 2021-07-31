import './App.css';
import LoginPage from './component/LoginPage.js';
import RegisterPage from './component/RegisterPage';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import DashBoard from './component/DashBoard';
import KYCrule from './component/KYCrule';
import Kycdocument from './component/Kycdocument';
import Admindashboard from './component/Admindashboard';
import Emicalc from './component/Emicalc';
import Customerproof from './component/Customerproof';
import MessageCreate from './component/MessageCreate';
import Adminloanform from './component/Adminloanform';
import Loanform from './component/Loanform';
import EditLoanform from './component/EditLoanform';
import Adminapproval from './component/Adminapproval';
import AdminView from './component/AdminView';
import PrivateRoute from './component/PrivateRoute';


function App() {
  const isAuthenticated = false;

  return (
   <Router>
      <Switch>
          <Route exact path="/" component={LoginPage}></Route>

          <Route path="/register" component={RegisterPage}></Route>

          <PrivateRoute path="/dashboard" flag={isAuthenticated} component={DashBoard}/>

          <Route path="/login" component={LoginPage}></Route>

          <PrivateRoute path="/kycrulebook" flag={isAuthenticated} component={KYCrule}/>

          <PrivateRoute path="/kycdocument" flag={isAuthenticated} component={Kycdocument}/>

          <PrivateRoute path="/admindashboard" flag={isAuthenticated} component={Admindashboard}/>

          <PrivateRoute path="/proofcheck" flag={isAuthenticated} component={Customerproof}/>

          <PrivateRoute path="/emical" flag={isAuthenticated} component={Emicalc}/>

          <PrivateRoute path="/message" flag={isAuthenticated} component={MessageCreate}/>

          <PrivateRoute path="/aloanform" flag={isAuthenticated} component={Adminloanform}/>

          <PrivateRoute path="/loanform" flag={isAuthenticated} component={Loanform}/>
       
         {/* <Route path="/editloan" component={EditLoanform}></Route> */}

         <PrivateRoute path="/approval" flag={isAuthenticated} component={Adminapproval}/>

         <PrivateRoute path="/adminview" flag={isAuthenticated} component={AdminView}/>
        </Switch>
   </Router>
  );
}

export default App;
