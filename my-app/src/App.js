import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
    </div>
  );
}

export default App;