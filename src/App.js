import './App.css';
import About from './components/About';
import MainComponent from './components/MainComponent';
import Button from './components/Button';
import Footer from './components/Footer';
import HeaderComponent from './components/HeaderComponent';
import Interest from './components/Interest';
import gmail_logo from './images/Gmail-logo.png';
import linkedin_logo from './images/LinkedIn_Logo.png';


function App() {
  return (
    <div >
        <HeaderComponent />
        <MainComponent name='Jonas Mwansa' title='Full Stack Developer' />
          <div className='buttons'>
            <Button link='mailto:jonasmwansa7@gmail.com' title='email' logo={gmail_logo} description='email me' />
            <Button link='https://www.linkedin.com/in/jonas-mwansa-787259155/' title='linkedin' logo={linkedin_logo} description='add me on linkedin' />  
          </div>
        <div className='main-content'>
            <About />
            <Interest />
        </div>
        <Footer />
    </div>
  );
}

export default App;
