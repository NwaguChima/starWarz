import React, { useContext, useMemo } from "react";
import { useTable } from "react-table";
import GlobalContext from "../../context/globalContext";
// import { ICharacter } from "../../utils/types";
import { COLUMNS } from "./columns";

interface CharacterTableProps {}

const CharacterTable: React.FC<CharacterTableProps> = () => {
  const { characters } = useContext(GlobalContext)!;

  const columns = useMemo(() => COLUMNS, []);
  const data: any = useMemo(() => characters, [characters]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CharacterTable;
