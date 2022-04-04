import './navbar.css'
import Navlogo from './navlogo';
// import '../../../public/png/menu'

function Navbar() {

    return ( 
        <div className="navbar">

            
            <div className="nav">
                
                <Navlogo /> 
                <ul className='nav-list'>
                    <li>Live</li>
                    <li>Push</li>
                    <li>Link</li>
                    <li>Shop</li>
                    <li>Help</li>
                </ul>
                <h3 className='button'>Menu</h3>
            </div>
            
        </div>
    );
}

export default Navbar;