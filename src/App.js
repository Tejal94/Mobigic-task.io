import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import FileList from './Components/FileList';
import FileUpload from './Components/FileUpload';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Login/>} />
        <Route path={'/register'} element={<Register/>} />
        <Route path={'/uploadfile'} element={<FileUpload/>} />
        <Route path={'/filelist'} element={<FileList/>} />
      </Routes>
    </Router>
  );
}

export default App;
