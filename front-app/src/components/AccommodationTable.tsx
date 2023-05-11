import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "city", headerName: "City" },
  {
    field: "price",
    headerName: "Price",
    type: "number",
  },
  {
    field: "date",
    headerName: "Date",
  },
];

export default function AccommodationTable() {
  const [rows, setRows] = React.useState<
    {
      _id: number;
      city: string;
      price: number;
      date: string;
    }[]
  >([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/find-all", {
        method: "Get",
      });
      if (response.ok) {
        const data = await response.json();
        setRows(data);
      } else {
        console.log("Importing averages failed");
      }
    })();
  }, []);
  return (
    <div style={{ height: 400, width: "100%", marginTop: 50 }}>
      <DataGrid rows={rows} columns={columns} autoPageSize checkboxSelection />
    </div>
  );
}
