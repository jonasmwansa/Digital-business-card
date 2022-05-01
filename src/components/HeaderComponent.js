import logo from '../logo.svg';

function HeaderComponent(){
    
    return(
        <header>
            <nav>
                <img src={logo} alt='description' id='App-logo'/>
                <ul>
                    <li><a href='#'>About Me</a></li>
                    <li><a href='#'>Testimonials</a></li>
                    <li><a href='#'>Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;