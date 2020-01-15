import React from 'react'
import {connect} from "react-redux";
import './Main.css'
import News from '../News/News'
import Footer from '../Footer/Footer'
import Images from "../Images/Images";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: ""
        };
    }
    render() {
        const articles = this.props.articles;
        return (
            <div>
                <div className="main">
                    <div className="forbes_now">
                        <h1>Forbes Now</h1>
                    </div>
                    <div>
                        <News/>
                    </div>
                    <div>
                        <Footer/>
                    </div>

                </div>
                <div>
                    <Images/>
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
export default connect(mapStateTOProps)(Main);