import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#333",
    color: theme.palette.common.white,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "20px",
    textTransform: "uppercase",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "18px",
    fontFamily: "Montserrat, sans-serif",
    color: "#8d3a38",
    fontWeight: "bold",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(serial, projectName, projectCost) {
  return { serial, projectName, projectCost };
}

const rows = [
  createData(
    1,
    "Construction of 4-Lane of Itanagar-Banderdewa section in the state of Arunachal Pradesh.",
    "301.20"
  ),
  createData(
    2,
    "Rehabilitation and upgradation to paved shoulder in the State of Sikkim ",
    "144.90"
  ),
  createData(
    3,
    "Four Laning of Silchar - Dhanehari Section  in the State of Assam under Bharatmala Pariyojna.",
    "144.75"
  ),
  createData(4, "FTTH Project Details??????", "144.75"),
  createData(5, "Tower Details?????", "144.75 "),
  createData(6, "others????", "144.75"),
];

export default function StatisticsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell>Project Name</StyledTableCell>
            <StyledTableCell>Cost (Cr.)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.serial}>
              <StyledTableCell component="th" scope="row">
                {row.serial}
              </StyledTableCell>
              <StyledTableCell>{row.projectName}</StyledTableCell>
              <StyledTableCell>{row.projectCost}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
