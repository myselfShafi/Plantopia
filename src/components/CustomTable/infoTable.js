import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

export const InfoTable = ({ data, ...other }) => {
  return (
    <TableContainer component={Paper} elevation={0} {...other}>
      <Table aria-label={"custom-info-table"}>
        <TableBody>
          {data?.map((item, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {item.type}
                </TableCell>
                <TableCell align="right">{item.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
