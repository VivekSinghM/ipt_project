import { Switch, Route } from 'react-router-dom';
import './App.css';
import DataTable from './components/datatable/DataTabe';
import Home from './components/home/Home';
import SideNav from './components/UI/sideNav/SideNav';

function App() {
  return (
    <div className="row App">
      <SideNav></SideNav>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/dataTable' component={DataTable}/>
      </Switch>
    </div>
  );
}

export default App;
