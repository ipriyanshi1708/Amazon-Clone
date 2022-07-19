import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './component/Home';
import SignUp from './component/SignUp';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
