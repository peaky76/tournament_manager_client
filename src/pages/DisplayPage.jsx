import React, { Component } from "react";
import { Link } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import DisplayList from "../components/lists/DisplayList";
import PersonContainer from "../containers/PersonContainer";
import TeamContainer from "../containers/TeamContainer";
import TournamentContainer from "../containers/TournamentContainer";
import Request from "../helpers/request";

class DisplayPage extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      selectedItemId: 1,
    };
    this.findItemById = this.findItemById.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  componentDidMount() {
    const request = new Request();

    request.get("/api/" + this.props.match.params.collection).then((data) => {
      this.setState({ itemList: data });
    });
  }

  findItemById(id) {
    return this.state.itemList.find((item) => {
      return item.id === parseInt(id);
    });
  }

  handleItemSelect(id) {
    this.setState({ selectedItemId: id });
  }

  render() {
    let collection = this.props.match.params.collection;
    let selectedItem = this.findItemById(this.state.selectedItemId);
    let container = null;

    if (collection === "tournaments") {
      container = <TournamentContainer tournament={selectedItem} />;
    }
    if (collection === "people") {
      container = <PersonContainer person={selectedItem} />;
    }
    if (collection === "teams") {
      container = <TeamContainer team={selectedItem} />;
    }

    if (!selectedItem) {
      return <ErrorPage />;
    }
    return (
      <div id="display-page" className="page">
        <section id="sidebar">
          <DisplayList items={this.state.itemList} onClick={this.handleItemSelect} />
          <Link to={collection + "/new"}>Add new</Link>
        </section>
        <section id="main">{container}</section>
      </div>
    );
  }
}

export default DisplayPage;
