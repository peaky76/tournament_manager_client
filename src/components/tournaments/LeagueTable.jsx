import React from "react";
import Request from "../helpers/request";

class TournamentTable extends Component {
  constructor () {
    super();
    this.state = {
      table: null,
    }
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/tournaments/1/table")
    .then((data) => this.setState({
      table: data,
    }));
  }

  render() {
  const columnTitles = ["Team", "W", "D", "L", "F", "A", "Pts"];
  const headings = columnTitles.map((col) => <span className="league-table-column">{col}</span>);
  
  return (<section>{headings}</section>);
  }

};

export default TournamentTable;
