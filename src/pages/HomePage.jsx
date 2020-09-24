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
          <h2>Quick links</h2>
          <NavBar />
        </section>
        <section id="main">
          <header id="homepage-header" className="page-header">
            <Logo />
            <h2>Tournament Management System</h2>
            <p>
              Welcome to Sportify, the place to manage your own tournaments and fixtures and player
              rosters, generate league tables and more! Browse existing tournaments or just head in
              and set up your own!
            </p>
          </header>
          <FavouritesList />
        </section>
      </div>
    );
  }
}

export default HomePage;
