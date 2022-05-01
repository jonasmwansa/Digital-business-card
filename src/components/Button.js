const Button=({logo, link, description, title, value})=>{

    return(
        <div className='button-component'>
            <button className='button'>
                <a href={link} title={title} >
                    <img src={logo} alt={description} />
                </a>
            </button>
        </div>
    );
}

export default Button;