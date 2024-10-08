import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./Layout/WebsiteLayout";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Signup from "./auth/Signup/Signup";
import Login from "./auth/Login/Login";
import PasswordChange from "./auth/PasswordChanged/PasswordChange";
import ResetPassword from "./auth/Resetpassword/ResetPassword";
import CreateNewPassword from "./auth/CreateNewPassword/CreateNewPassword";
import DashBoard from "./Pages/DashBoard";
import Campaign from "./Pages/Campaign";
import Track from "./Pages/Donor";
import Payout from "./Pages/Payout";
import Account from "./Pages/Account";
import CreateCampaign from "./Pages/CreateCampaign";
import FundraisingPage from "./Pages/FundraisingPage";
import ChangePassword from "./components/AccountComponents/ChangePassword";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import DonorDetails from "./Pages/DonorDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route path="/createpassword" element={<CreateNewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/fundraising-page/:ev" element={<FundraisingPage />} />
        <Route path="/change-password" element={<ChangePassword/>}/>,
        <Route path="*" element={<div>page not found</div>} />
        <Route
          // path="/dashboard"  
          element={<WebsiteLayout />}
          children={[
            <Route path="/dashboard" element={<DashBoard/>}/>,
            <Route path="/campaign" element={<Campaign/>}/>,
            <Route path="/donor" element={<Track/>}/>,
            <Route path="/donor/details" element={<DonorDetails/>}/>,
            <Route path="/payout" element={<Payout/>}/>,
            <Route path="/account" element={<Account/>}/>,
            <Route path="/campaign/create.campaign" element={<CreateCampaign/>}/>,
            // [['l;ljh.i6yyyyyyyii']]
          ]}
        />
        <Route element={<AdminLayout/>} 
        children={[
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        ]}
        />
      </Routes>
    </Router>
  );
};

export default App;
