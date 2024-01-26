import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import Home from './pages/home';
import Produtos from './pages/Produtos';


function App(){
return(
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Produtos" element={<Produtos />} />
  </Routes>
</Router>
)
}

export default App;