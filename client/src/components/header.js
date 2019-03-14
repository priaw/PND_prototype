import React from 'react';
import SideMenu from './menu';
//** IMPORTED STYLE **// 
import '../style/Header.css';

const Header = () => {
    return(
            <div className= "navbar bg-primary"> 
                <div className="col-md-4" ><h1 className="Text-header"> Phanuekdee Transportation </h1></div>
                <div className="col-md-4"></div>
                <div className="col-md-4" ><SideMenu/></div>
            </div>
    )
}

export default Header;