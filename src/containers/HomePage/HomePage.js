import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import "./HomePage.css";

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <h1 className="home-greeting">Hello this is the main page </h1>
            </div>
        );
    }
}

export default HomePage;
