import React, { useContext, useEffect, useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import GlobalContext from "../../context/globalContext";
import { COLUMNS } from "./columns";
import "./characterTable.module.scss";
import { ICharacter } from "../../utils/types";

interface CharacterTableProps {}

const CharacterTable: React.FC<CharacterTableProps> = () => {
  const [heightSum, setHeightSum] = useState(0);
  const { characters } = useContext(GlobalContext)!;

  useEffect(() => {
    // characters &&
    //   setHeightSum(
    //     characters?.reduce((sum: number, cur) => {
    //       if (cur.height !== "unknown") {
    //         return sum + +cur.height;
    //       } else return sum;
    //     }, 0)
    //   );
  }, [characters]);

  const columns = useMemo(() => COLUMNS, []);
  const data: any = useMemo(() => characters, [characters]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        // stateReducer
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
                console.log("one..", rows);
                // const totalHeight = rows?.reduce((sum: number, cur) => {
                //   if (cur.values.height !== "unknown") {
                //     return sum + +cur.values.height;
                //   } else return sum;
                // }, 0);
                // console.log("two..", totalHeight);
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
            {heightSum} cm ({(heightSum / 30.48).toFixed(2).split(".")[0]}ft/
            {(+(heightSum / 30.48).toFixed(2).split(".")[1] / 12).toFixed(2)}in)
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CharacterTable;
