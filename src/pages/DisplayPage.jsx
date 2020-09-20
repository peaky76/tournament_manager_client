import React, { Component } from "react";

import DisplayList from "../components/display_lists/DisplayList";
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
    let container = null;
    if (collection === "tournaments") {
      container = <TournamentContainer tournaments={this.state.itemList} />;
    }
    if (collection === "people") {
      container = <PersonContainer people={this.state.itemList} />;
    }
    if (collection === "teams") {
      container = <TeamContainer teams={this.state.itemList} />;
    }
    return (
      <div id="content-page" className="page">
        <header id="page-header-content" className="page-header">
          Header!!!!
        </header>
        <section id="sidebar">
          <DisplayList items={this.state.itemList} onClick={this.handleItemSelect} />
          {/* <Link to="/teams/new">Add new</Link> */}
        </section>
        <section id="main-content">{container}</section>
      </div>
    );
  }
}

export default DisplayPage;
