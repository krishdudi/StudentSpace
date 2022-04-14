import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Contests from './components/Contest/Contests';
import Expenses from './components/Expense/Expenses';
import FileState from './context/files/FileState';
import Workspace from './components/WorkSpace/Workspace';
import Addfile from './components/AddFile/Addfile';
import Viewfile from './components/ViewFile/Viewfile';
import Editfile from './components/EditFile/Editfile';
import ExpenseState from './context/expense/ExpenseState';
// import Allfiles from './components/AllFiles/Allfiles';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <FileState>
      <ExpenseState>
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reminder" element={<Contests />} />
        {/* <Route path="/expenses" element={<Expenses />} /> */}
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/addfiles" element={<Addfile />} />
        <Route path='/view/:id' element={<Viewfile/>}/>
        <Route path='/update/:id' element={<Editfile/>}/>
        {/* <Route path='/allfiles' element={<Allfiles />}/> */}
      </Routes>
    </Router>
    </ExpenseState>
    </FileState>
    </>
  );
}

export default App;
