import React from 'react'
import {connect} from "react-redux";
import './Images.css'

class News extends React.Component {
    render() {
        const articles = this.props.articles;
        return (
            <div className="photos">
                <div className="featured_div">
                    <span>Featured</span>
                </div>
                <div className="images">
                    <img className="img1" src={articles[14].urlToImage}/>
                    <img className="img2" src={articles[3].urlToImage}/>
                    <img className="img3" src={articles[6].urlToImage}/>
                </div>
            </div>
        )
    }
}
const mapStateTOProps = (state) => {
    return {
        articles: state.articles
    }
};
export default connect(mapStateTOProps)(News);