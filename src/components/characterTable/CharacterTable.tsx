import React, { useContext, useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import GlobalContext from "../../context/globalContext";
import { COLUMNS } from "./columns";
import "./characterTable.module.scss";
import { ICharacter } from "../../utils/types";

interface CharacterTableProps {}

const CharacterTable: React.FC<CharacterTableProps> = () => {
  const [heightSum, setHeightSum] = useState(0);
  const { characters } = useContext(GlobalContext)!;

  useEffect(() => {
    characters &&
      setHeightSum(
        characters?.reduce((sum: number, cur) => {
          if (cur.height !== "unknown") {
            return sum + +cur.height;
          } else return sum;
        }, 0)
      );
  }, [characters]);

  const columns = useMemo(() => COLUMNS, []);
  const data: any = useMemo(() => characters, [characters]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                if (cell.row.original.gender === "male") {
                  cell.row.original.gender = "M";
                }
                if (cell.row.original.gender === "female") {
                  cell.row.original.gender = "F";
                }
                if (cell.row.original.gender === "hermaphrodite") {
                  cell.row.original.gender = "n/a";
                }
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total: {characters?.length}</td>
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
