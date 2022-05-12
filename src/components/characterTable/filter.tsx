import React from "react";

export const SelectColumnFilter: React.FC<any> = ({
  column: { filterValue, setFilter },
}) => {
  return (
    <select
      style={{ borderInline: "none", marginTop: "5px" }}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">all</option>
      <option value="M">male</option>
      <option value="F">female</option>
      <option value="n/a">humanoids</option>
    </select>
  );
};
