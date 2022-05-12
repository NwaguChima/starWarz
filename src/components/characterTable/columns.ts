import { SelectColumnFilter } from "./filter";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
    Filter: SelectColumnFilter,
    disableFilters: true,
  },
  { Header: "Gender", accessor: "gender", Filter: SelectColumnFilter },
  {
    Header: "Height",
    accessor: "height",
    Filter: SelectColumnFilter,
    disableFilters: true,
  },
];
