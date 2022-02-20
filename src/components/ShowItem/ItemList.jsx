import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CustomButton } from "../../utils/CustomButton";
import { StateContext } from "../../contexts/StateContext";
import { useEffect } from "react";

import styles from "./showItem.scss";

const ItemList = (person, key) => {
  const [inputs, dispatch] = useContext(StateContext);
  const [change, setChange] = useState(0);

  const removeItem = () => {
    person = inputs.filter((item) => item.id !== person.person.id);
    dispatch(person);
    setChange(change + 1);
    window.location.reload();
  };

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(inputs));
  }, [inputs]);

  return (
    <TableContainer
      component={Paper}
      className="table"
      sx={{
        borderRadius: "15px",
        boxShadow: "0 0 4px 7px #D2D2D2",
        width: "90%",
        marginTop: "1em",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
            borderRadius: "15px",
            fontSize: "14pt",
            marginTop: "-10px!important",
          },
        }}
        aria-label="simple table"
      >
        <TableHead></TableHead>
        <TableBody>
          <TableRow className={styles.row}>
            <TableCell className={styles.tableCell}>
              {person.person.firstName}
            </TableCell>
            <TableCell className={styles.tableCell}>
              {person.person.lastName}
            </TableCell>
            <TableCell className={styles.tableCell}>
              {person.person.street}
            </TableCell>
            <TableCell className={styles.tableCell}>
              {person.person.city}
            </TableCell>
            <TableCell className={styles.tableCell}>
              <CustomButton
                variant="contained"
                size="medium"
                className={styles.button}
                onClick={removeItem}
              >
                Remove
              </CustomButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ItemList;
