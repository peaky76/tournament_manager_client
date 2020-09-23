import React from "react";


const LeagueTableRow = ({row}) => {

   let tableCols = "";
   if(row) {
      const rowData = [row.team.name, row.record.wins, row.record.draws, row.record.losses, row.record.scoreFor, row.record.scoreAgainst, row.points]
      tableCols = rowData.map((col, index) => {
        return <span className="league-table-column">{col}</span>;
      })
   }

    return (
        <div>
            {tableCols}
        </div>
    );
}

export default LeagueTableRow;
