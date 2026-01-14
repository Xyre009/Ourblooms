import styles from '../styles/Navbar.module.css';
function Navbar() { 
    return(
        <>
    <nav className ={styles.navbar}>
        <div className="display"> Our Blooms
            <ul className= {styles.ul}>
                <li >GALLERY</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </nav>
    <hr className='divider'/>
    </>

    )
}
export default Navbar;