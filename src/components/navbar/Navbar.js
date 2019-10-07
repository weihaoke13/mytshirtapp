import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    
    render(){
        return(
           <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
               <div className='container'>
                    <Link to='/' className='nav-brand text-white'>Tshirt MEME Design</Link>
                    <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navbarNav'>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Sign-up</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Log-in</Link>
                        </li>
                        
                    </ul>
               </div>
               </div>
              
           </nav>
        )
    }
}

export default Navbar;