import React from 'react';
import './Header.css';

function Header(){
    return(
        <div className="header">
            <div className="forbes_icon">
                <span>Forbes</span>
            </div>
            <div>
                <ul className="navbar">
                    <li>Billioners</li>
                    <li>Innovation</li>
                    <li>Leadership</li>
                    <li>Money</li>
                    <li>Business</li>
                    <li>Small Business</li>
                    <li>Lifestyle</li>
                    <li>Lists</li>
                    <li>Advisor</li>
                    <li>Featured</li>
                    <li>Breaking</li>
                    <li>More</li>
                </ul>
            </div>

        </div>
    );
}

export default Header;
