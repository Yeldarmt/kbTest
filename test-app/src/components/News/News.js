import React from 'react'
import {connect} from "react-redux";
import './News.css'
import SideBar from "../SideBar/SideBar";

class News extends React.Component {
    render() {
        const articles = this.props.articles;
        return (
            <div className="news">
                <div className="channel">
                    <div className="channel_content">
                        <img src={articles[6].urlToImage}/>
                        <div className="content_title">
                            <a>{articles[6].title}</a>
                        </div>
                        <div className="news_one">
                            <span>By </span>
                            <a>{articles[6].author}</a>
                            <span> Forbes Staff</span>
                        </div>
                        <div className="card_description">{articles[6].description}</div>
                    </div>
                    <div className="channel_columns">
                        <div className="first_channel">
                            <img src={articles[1].urlToImage}/>
                            <p>FORBES</p>
                            <div className="card_title">
                                <a>{articles[1].title}</a>
                            </div>
                            <p className="card_desc">{articles[1].description}</p>
                        </div>
                        <div className="second_channel">
                        </div>
                    </div>
                </div>
                <div className="channel_sidebar">
                    <SideBar/>
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