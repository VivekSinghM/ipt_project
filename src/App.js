import './App.css';
import Home from './components/home/Home';
import SideNav from './components/UI/side_nav/SideNav';

function App() {
  return (
    <div className="row App">
      <SideNav></SideNav>
      <Home></Home>
    </div>
  );
}

export default App;
