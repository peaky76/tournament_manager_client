import React, { Component } from "react";
import FavouritesList from "../components/FavouritesList";
import NavBar from "../NavBar.js";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="homepage" className="page">
        <header id="homepage-header" className="page-header">
          <div id="logo">
            <img src="/images/soccer_icons/png/001-trophy.png" alt="Sportify logo" />
            <h1>Sportify</h1>
          </div>
          <h2>Tournament Management System</h2>
        </header>
        <section id="homepage-nav">
          <NavBar />
        </section>
        <section id="homepage-fav">
          <FavouritesList />
        </section>
      </div>
    );
  }
}

export default HomePage;
