import React from 'react'
import {connect} from "react-redux";
import './SideBar.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popularClicked: true
        }
    }
    popClick = () => {
        this.setState({popularClicked: true})
    };
    editClick = () => {
        this.setState({popularClicked: false})
    };
    render() {
        const articles = this.props.articles;
        return (
                <div className="channel_sidebar">
                    <div className="barSide">
                        <div className="popular" onClick={this.popClick}>Popular</div>
                        <div className="editors" onClick={this.editClick}>Editor's Picks</div>
                    </div>
                    {
                        this.state.popularClicked && <div className="pop_titles">
                        <ul>
                            {articles.slice(0,12).map(article =>
                                <li>{article.title}</li>
                            )}
                        </ul>
                    </div>
                    }
                    {
                        !this.state.popularClicked && <div className="pop_titles">
                            <ul>
                                {articles.slice(3,12).map(article => (
                                    <li>
                                        {article.title}
                                        <div className="newss_one">
                                            <span>By </span>
                                            <a>{article.author}</a>
                                            <span>Forbes Staff</span>
                                        </div>
                                    </li>
                                    )
                                )}
                            </ul>
                        </div>
                    }
                </div>
        )
    }
}
const mapStateTOProps = (state) => {
    return {
        articles: state.articles
    }
};
export default connect(mapStateTOProps)(SideBar);