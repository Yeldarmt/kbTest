import React from 'react'
import './Footer.css'

class News extends React.Component {
    render() {
        return (
            <div className="footer">
                <div>FORBES SOCIAL MEDIA</div>
                <div className="foot_inf">Feeding your feed with success.</div>
                <div>
                    <img className="foot_img" src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                    <img className="foot_img" src="http://plusodin.info/wp-content/themes/sg-template/img/vk.png"/>
                    <img className="foot_img" src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/>
                    <img className="foot_img" src="https://i.ya-webdesign.com/images/black-facebook-icon-png.png"/>
                    <img className="foot_img" src="https://www.pngitem.com/pimgs/m/11-114651_youtube-dark-png-youtube-icon-vector-transparent-png.png"/>
                </div>
            </div>
        )
    }
}

export default News;