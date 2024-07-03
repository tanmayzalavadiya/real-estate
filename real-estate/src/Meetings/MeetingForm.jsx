import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Drawer from '@mui/material/Drawer';
import axios from "axios";
import authFetch from '../Lead/custom';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// date time
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



const MeetingForm = () => {

    const validationSchema = yup.object({
        Agenda: yup
          .string("Enter lead status")
          .required("Lead status is required"),
        Location: yup.string("Enter lead name").required("Lead name is required"),
        Notes: yup.string("Enter lead name").required("Lead name is required"),
        leadEmail: yup
          .string("Enter lead email")
          .email("Enter a valid email")
          .required("Lead email is required"),
        leadPhoneNumber: yup
          .string("Enter lead phone number")
          .matches(/^\d{10}$/, "Lead phone number should be 10 digits long")
          .required("Lead phone number is required"),
        moduleId: yup.string().required("Module ID is required"),
      });
      const theme = createTheme();

      const formik = useFormik({
        initialValues: {
          Agenda: "",
          Location: "",
          DateTime: "",
          moduleId: "666686efe0142b0c90d72b09",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          try {
            if(action == "add"){
              authFetch.post("/form/add", values)
              .then((response) => {
                console.log(response.data);
              });
            }
            else{
              authFetch.put(`/form/edit/${id[0]}`,values)
              .then((response)=>{
                console.log(response.data);
              })
            }
           
          } catch (error) {
            console.error(error);
          }
        },
      });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, width: "100%" }}>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Add Meeting 
          </Typography>
          <form onSubmit={formik.handleSubmit}>
          {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Agenda</InputLabel>
            <Select
              fullWidth
              id="leadStatus"
              name="leadStatus"
              label="Lead Status"
              value={formik.values.leadStatus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.leadStatus && Boolean(formik.errors.leadStatus)
              }
              helperText={formik.touched.leadStatus && formik.errors.leadStatus}
              margin="normal"
            >
          <MenuItem value={'Active'}>Active</MenuItem>
          <MenuItem value={'Pending'}>Pending</MenuItem>
          <MenuItem value={'Sold'}>Sold</MenuItem>
                      </Select>
                      </FormControl> */}

            <TextField
              fullWidth
              id="Agenda"
              name="Agenda"
              label="Agenda"
              value={formik.values.Agenda}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Agenda && Boolean(formik.errors.Agenda)}
              helperText={formik.touched.Agenda && formik.errors.Agenda}
              margin="normal"
            />
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Related To*</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Lead" control={<Radio />} label="Lead" />
        <FormControlLabel value="Contact" control={<Radio />} label="Contact" />
        
      </RadioGroup>
    </FormControl>
    <TextField
              fullWidth
              id="Location"
              name="Location"
              label="Location"
              value={formik.values.Location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Location && Boolean(formik.errors.Location)}
              helperText={formik.touched.Location && formik.errors.Location}
              margin="normal"
            />
             <TextField
              fullWidth
              id="Notes"
              name="Notes"
              label="Notes"
              value={formik.values.Notes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Notes && Boolean(formik.errors.Notes)}
              helperText={formik.touched.Notes && formik.errors.Notes}
              margin="normal"
            />
             {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Basic date time picker" />
      </DemoContainer>
    </LocalizationProvider> */}
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}

export default MeetingForm
