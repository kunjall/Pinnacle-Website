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
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
    fontFamily: "Montserrat, sans-serif",
    color: "#555",
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
    "Construction of 4-Lane of Itanagar-Banderdewa section of NH-415 Km. Km 51+700 to Km 59+199 on EPC Mode in the state of Arunachal Pradesh.",
    "301.20 Cr."
  ),
  createData(
    2,
    "Rehabilitation and upgradation to 2-Lane with paved shoulder including of NH-510 (Singtam – Tarku – Rabangla – Legship - Gyalshing) Package-IV (Design Chainage from Km. 33+600 to Km 58+840) in the State of Sikkim in EPC Mode- Package-IV.",
    "144.90 Cr."
  ),
  createData(
    3,
    "Four Laning of Silchar - Dhanehari Section (Package-1) from Existing Ch. Km 263+800 of NH-37 to km 12+920 of NH-306 (Design Chainage km 0+000 to km 20+000) on Silchar - Vairengte - Sairang Road in the State of Assam under Bharatmala Pariyojna on EPC Mode.",
    "144.75 Cr."
  ),
];

export default function StatisticsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell>Project Name</StyledTableCell>
            <StyledTableCell>Cost</StyledTableCell>
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
