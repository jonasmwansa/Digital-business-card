import twitter_logo from '../images/Twitter-Logo.png'
import facebook_logo from '../images/Facebook_Logo.png'
import instagram_logo from '../images/Instagram_logo.svg'
import gitHub_logo from '../images/github-logo-png-github-icon-blue-png-transparent.png'


const Footer=()=>{



    return(
        <footer>
            <div className='footer-item'>
                <a href='https://twitter.com/jonas18939942' target="external">
                    <img src={twitter_logo} alt='follow me on twitter'/>
                </a>
            </div>
            <div className='footer-item'>
            <a href='https://web.facebook.com/jonas.mwansa.125/'>
                    <img src={facebook_logo} alt='add me on facebook'/>
                </a>
            </div>
            <div className='footer-item'>
            <a href='https://www.instagram.com/jonasmwansa7/'>
                    <img src={instagram_logo} alt='follow me on instagram'/>
                </a>
            </div>
            <div className='footer-item'>
            <a href='https://github.com/jomlink' >
                    <img src={gitHub_logo} alt='Check some of my work on github'/>
                </a>
            </div>
        </footer>
        ); 
}

export default Footer;