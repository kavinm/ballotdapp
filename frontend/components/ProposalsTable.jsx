import React from "react";

const styles = {
  table: {
    borderCollapse: "collapse",
    margin: "25px 0",
    fontSize: "0.9em",
    fontFamily: "sans-serif",
    minWidth: "400px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
  },
  th: {
    padding: "12px 15px",
    backgroundColor: "#009879",
    color: "#ffffff",
    textAlign: "left",
  },
  td: {
    padding: "12px 15px",
  },
  trEven: {
    backgroundColor: "#000",
  },
  trLast: {
    borderBottom: "2px solid #009879",
  },
  tr: {
    borderBottom: "1px solid #dddddd",
  },
};

const ProposalTable = ({ proposals }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Proposal</th>
          <th style={styles.th}>Votes</th>
        </tr>
      </thead>
      <tbody>
        {proposals.map((proposal, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === proposals.length - 1;
          return (
            <tr
              key={index}
              style={
                isLast
                  ? { ...styles.tr, ...styles.trLast }
                  : isEven
                  ? { ...styles.tr, ...styles.trEven }
                  : styles.tr
              }>
              <td style={styles.td}>{proposal.name}</td>
              <td style={styles.td}>{proposal.votes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProposalTable;
