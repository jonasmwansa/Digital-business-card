import main_image from '../images/main_image.jpg';

const MainComponent=({name, title})=>{

    return(
        <div className='main-content'>
            <div className='main-image'>
                <img src={main_image} alt='jonas mwansa'/>
            </div>
            <div className='description'>
                <h1>{name}</h1>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default MainComponent;