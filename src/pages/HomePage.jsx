import React, { Component } from "react";
import FavouritesList from "../components/lists/FavouritesList";
import Logo from "../components/Logo";
import NavBar from "../NavBar.js";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="homepage" className="page">
        <section id="sidebar">
          <NavBar />
        </section>
        <section id="main">
          <header id="homepage-header" className="page-header">
            <Logo />
            <h2>Tournament Management System</h2>
          </header>
          <FavouritesList />
        </section>
      </div>
    );
  }
}

export default HomePage;
