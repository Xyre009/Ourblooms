import log from '../path-to-your-image-file'; // Update the path to the correct location of your image file

function Hero() {
    return(
        <>
        <picture>
            <source media="(min-width: 1200px)" srcSet={log} />
        </picture>
        </>
    )
}

export default Hero;