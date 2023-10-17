import './App.css';
import Nav from './components/nav';
import Section from './components/sections';
import Details from "./components/pageDeatails";


function App() {
  return (
    <>
      <Nav />
      <Section modelName={Details[0].name} modelPrice={Details[0].price} gasSavings="Electric Vehicle" showVideo={true} showFooterText={false} />
    </>
  );
}

export default App;
