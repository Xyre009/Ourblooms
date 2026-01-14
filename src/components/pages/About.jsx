import footer from "../../footer";
import styles from "../../styles/About.module.css"
import lady from "../../assets/images/lady.jpg"
import lady1 from "../../assets/images/lady1.jpg" 
import lady2 from "../../assets/images/lady2.jpg"   
function About(){ 
    return(
        <>
     <div className= {styles.header}>
<p className="heading1"> About</p>
<div className={styles.container}>
    <div>
        <p className="caption1">Our Story</p>

    </div>
    <div className={styles.rightColumnContainer}></div>
    </div>
    <div className={styles.AuthorInformation}></div>
    <picture>
        <source media="(min-width: 1200px)" srcSet={lady} />
        <source media="(min-width: 800px)" srcSet={lady1} />
    </picture>
    <div className={styles.authorDetails}>
      <p className="caption2">Lily smith</p>  
      <p className="paragraph1">Owner</p>
    </div>

</div>
<footer/>
        </>
    )
}
export default About;