import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function AveragesTable() {
  const [rows, setRows] = React.useState<
    {
      _id: number;
      city: string;
      price: number;
    }[]
  >([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/find-averages", {
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
    <TableContainer component={Paper} style={{ marginTop: 50 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell>Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.city}
              </TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
