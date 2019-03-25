import React, { Component } from 'react';
import './Articles.scss';
import content from '../../assets/content.js';
import {Link} from 'react-router-dom';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    updateDimensions() {
        this.forceUpdate();
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    render() {
        var rows = [];
        var sub_rows = [];
        if (window.innerWidth <= 768 || document.body.clientWidth <= 768) {
            for (let i = 0; i<content.length; i++) {
                rows.push (
                    <Link to={content[i].url}>
                        <div className = "articles-mediaquery">
                            <div className = "articles-image w-p-98" style = {{backgroundImage: 'url('+ content[i].image + ')'}}></div>
                            <div className = "articles-description w-p-60">
                                    <div className = "articles-description-title">{content[i].title}</div>
                                    <span className = "articles-description-p">{content[i].description}</span>
                                </div>
                        </div>
                    </Link>
                );
            }
        }
        else {
            for (let i = 0; i<content.length; i++) {
                if (i===0) {
                    rows.push (
                        <Link to={content[i].url}>
                            <div className = "articles-primary">
                                <div className = "articles-image w-p-60" style = {{backgroundImage: 'url('+ content[i].image + ')'}}></div>
                                <div className = "articles-description w-p-35">
                                    <div className = "articles-description-title">{content[i].title}</div>
                                    <span className = "articles-description-p">{content[i].description}</span>
                                </div>
                            </div>
                        </Link>
                    );
                }
                else {
                    sub_rows.push (
                            <div className = "articles-image w-p-48" style = {{backgroundImage: 'url('+ content[i].image + ')'}}>
                                <Link to={content[i].url}>
                                <div className = "articles-description-overlay">
                                    <div className = "articles-description-title">{content[i].title}</div>
                                    <span className = "articles-description-p">{content[i].description}</span>
                                </div>
                                </Link>
                            </div>
                    );
                }


            }
        }
        rows.push(<div className="articles-secondary">{sub_rows}</div>);
        return <div className="articles-fullwrapper">{rows}</div>;

    }
}

export default Articles;
