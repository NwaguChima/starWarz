import React, { useContext, useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import GlobalContext from "../../context/globalContext";
import { COLUMNS } from "./columns";
import "./characterTable.module.scss";
import { computeHeight } from "../../utils/helper";

interface CharacterTableProps {}

const CharacterTable: React.FC<CharacterTableProps> = () => {
  const { characters } = useContext(GlobalContext)!;

  const columns = useMemo(() => COLUMNS, []);
  const data: any = useMemo(() => characters, [characters]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFilters,
      useSortBy
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total: {rows.length}</td>
          <td></td>
          <td>
            {computeHeight(rows)} cm (
            {(computeHeight(rows) / 30.48).toFixed(2).split(".")[0]}ft/
            {(
              +(computeHeight(rows) / 30.48).toFixed(2).split(".")[1] / 12
            ).toFixed(2)}
            in)
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CharacterTable;
