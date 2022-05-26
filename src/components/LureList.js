import React from "react";

import { lureData } from "../data";
import LureItem from "./LureItem";

const LureList = (props) => {
  const { filters } = props;

  const filteredLures = Object.entries(lureData).map(([idx, lure]) => {
    const isFiltered =
      lure.filters.season === filters.season &&
      lure.filters.water_temp === filters.water_temp &&
      lure.filters.water_clarity === filters.water_clarity;
    return (
      <React.Fragment key={idx}>
        {isFiltered && <LureItem lure={lure} />}
      </React.Fragment>
    );
  });

  return (
    <table className="lure-list">
      <thead>
        <tr>
          <th>Lure Type</th>
          <th>Colors</th>
        </tr>
      </thead>
      <tbody>{filteredLures}</tbody>
    </table>
  );
};

export default LureList;
