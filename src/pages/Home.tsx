import Navbar from '../components/Navbar';
import './home.css'
const Home = () => {
  return (
    <>
<div className="hide-on-mobile">
  <h1 className="text-3xl md:text-6xl font-bold text-center">Nexus OS</h1>
</div>
    <br/>
    <br/>
    <Navbar/>
    </>
  );
};

export default Home;
