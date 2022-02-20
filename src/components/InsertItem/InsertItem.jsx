import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { CustomButton } from "../../utils/CustomButton";
import { Formik, Form } from "formik";
import { StateContext } from "../../contexts/StateContext";
import { v4 as uuidv4 } from "uuid";
import { Schema } from "../../utils/HelperFunctions";

import "./insertItem.scss";

const InsertItem = () => {
  const [inputs, dispatch] = useContext(StateContext);
  return (
    <Formik
      initialValues={{ inputs }}
      validationSchema={Schema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting }) => {
        if (!values) {
          alert("Fill all data!");
        }
        Object.assign(values, { id: uuidv4() });
        let value = (oldArray) => [...oldArray, values];
        dispatch(value);
        console.log(inputs);
      }}
    >
      {({ isSubmitting, errors, handleChange }) => (
        <Form>
          <TableContainer
            component={Paper}
            className="table"
            sx={{
              borderRadius: "15px",
              boxShadow: "0 0 4px 7px #D2D2D2",
              width: "90%",
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
              <TableHead>
                <TableRow>
                  <TableCell>Firstname</TableCell>
                  <TableCell>Lastname</TableCell>
                  <TableCell>Street</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell> </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      error={errors.firstName ? true : false}
                      id="demo-helper-text-misaligned-no-helper"
                      label={errors.firstName ? errors.firstName : "Firstname"}
                      size="small"
                      name="firstName"
                      value={inputs.firstName}
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      error={errors.lastName ? true : false}
                      id="demo-helper-text-misaligned-no-helper"
                      label={errors.lastName ? errors.lastName : "Lastname"}
                      size="small"
                      name="lastName"
                      value={inputs.lastName}
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      error={errors.street ? true : false}
                      id="demo-helper-text-misaligned-no-helper"
                      label={errors.street ? errors.street : "Street"}
                      size="small"
                      name="street"
                      value={inputs.street}
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      error={errors.city ? true : false}
                      id="demo-helper-text-misaligned-no-helper"
                      label={errors.city ? errors.city : "City"}
                      size="small"
                      name="city"
                      value={inputs.city}
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell>
                    <CustomButton
                      variant="contained"
                      size="medium"
                      type="submit"
                    >
                      Insert
                    </CustomButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Form>
      )}
    </Formik>
  );
};

export default InsertItem;
