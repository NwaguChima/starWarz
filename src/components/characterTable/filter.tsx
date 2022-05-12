import React from "react";

export const SelectColumnFilter: React.FC<any> = ({
  column: { filterValue, setFilter },
}) => {
  return (
    <select
      style={{
        borderInline: "none",
        position: "absolute",
        top: "35px",
        left: "15px",
        width: "10rem",
        marginTop: "5px",
      }}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      <option value="M">Male</option>
      <option value="F">Female</option>
      <option value="n/a">Humanoids</option>
    </select>
  );
};
