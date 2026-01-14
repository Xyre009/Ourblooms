import footer from "../../footer";
import g from "../../assets/images/g.jpg"
import g1 from "../../assets/images/g1.jpg"    
import g2 from "../../assets/images/g2.jpg" 
import g3 from "../../assets/images/g3.jpg"
import g4 from "../../assets/images/g4.jpg"
import g5 from "../../assets/images/g5.jpg" 
import g6 from "../../assets/images/g6.jpg" 
import g7 from "../../assets/images/g7.jpg" 
import g8 from "../../assets/images/g8.jpg"
import footer from "../../footer";
import WorkWithUs from "./WorkWithUS";
import Services from "./Services";
function Gallery(){
    return (
        <>
        <Navbar/>
        <div className= {styles.header}>
            <hi className="heading1">Gallery Page</hi>

            </div>
            <div className= {styles.main}>
                <div ClassName = {styles.image}>
                    <img src={image1} alt="Description of image1" className="image1" />
                    <img src={image2} alt="Description of image2" className="image2" />
                </div>
            </div>
        <Footer/>
        <workWithUs/>
        <Services/>
        </>
    )
}
export default Gallery;