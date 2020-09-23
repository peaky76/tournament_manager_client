import React, { Component } from "react";
import Request from "../../helpers/request";
import LeagueTableRow from "./LeagueTableRow";

class TournamentTable extends Component {
  constructor() {
    super();
    this.state = {
      table: null,
    };
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/tournaments/" + this.props.id + "/table").then((data) =>
      this.setState({
        table: data,
      })
    );
  }

  render() {
    const columnTitles = ["Team", "W", "D", "L", "F", "A", "Pts"];
    const headings = columnTitles.map((col) => <span className="league-table-column">{col}</span>);

    let tableRows = "No table for this tournament";
    if (this.state.table) {
      tableRows = "There's a table but no rows";
      if (this.state.table.rows) {
        tableRows = this.state.table.rows.map((row, index) => {
          return <LeagueTableRow key={index} row={row} />;
        });
      }
    }

    return (
      <section>
        <div className="league-table-heading">{headings}</div>
        <div className="table-row">{tableRows}</div>
      </section>
    );
  }
}

export default TournamentTable;
