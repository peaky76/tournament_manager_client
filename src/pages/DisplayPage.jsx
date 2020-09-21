import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import DisplayList from "../components/lists/DisplayList";
import MatchContainer from "../containers/MatchContainer";
import PersonContainer from "../containers/PersonContainer";
import TeamContainer from "../containers/TeamContainer";
import TournamentContainer from "../containers/TournamentContainer";
import VenueContainer from "../containers/VenueContainer";
import Request from "../helpers/request";

class DisplayPage extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      selectedItemId: "",
    };
    this.findItemById = this.findItemById.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    const collection = this.props.match.params.collection;
    const id = this.props.match.params.id;

    request.get("/api/" + collection).then((data) => {
      this.setState({ itemList: data });
    });

    this.setState({
      selectedItemId: id,
    });
  }

  findItemById(id) {
    return this.state.itemList.find((item) => {
      return item.id === parseInt(id);
    });
  }

  handleSelectItem(id) {
    window.location = "/" + this.props.match.params.collection + "/" + id;
  }

  render() {
    let collection = this.props.match.params.collection;
    let selectedItem = this.findItemById(this.state.selectedItemId);
    let container = null;

    if (collection === "matches") {
      container = <MatchContainer match={selectedItem} />;
    }
    if (collection === "people") {
      container = <PersonContainer person={selectedItem} />;
    }
    if (collection === "teams") {
      container = <TeamContainer team={selectedItem} />;
    }
    if (collection === "tournaments") {
      container = <TournamentContainer tournament={selectedItem} />;
    }
    if (collection === "venues") {
      container = <VenueContainer venue={selectedItem} />;
    }
    if (!selectedItem) {
      container = null;
    }
    return (
      <div id="display-page" className="page">
        <section id="sidebar">
          <Logo />
          <h2>{collection}</h2>
          <DisplayList items={this.state.itemList} onClick={this.handleSelectItem} />
          <Link to={"/" + collection + "/new"}>Add new</Link>
        </section>
        <section id="main">{container}</section>
      </div>
    );
  }
}

export default DisplayPage;
