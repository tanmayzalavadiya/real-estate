import React from "react";
import { useFormik} from "formik";
import { useEffect } from "react";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import authFetch from "../Lead/custom";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';



const ContactForm = (props) => {
  const { id, setid, action, setAction } = props;


  const validationSchema = yup.object({
    email: yup
      .string("Enter lead email")
      .email("Enter a valid email")
      .required("Lead email is required"),
      phoneNumber: yup
      .string("Enter lead phone number")
      .matches(/^\d{10}$/, "Lead phone number should be 10 digits long")
      .required("Lead phone number is required"),
  });
  const theme = createTheme();

  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      moduleId: "666686f0e0142b0c90d72b27",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        if(action == "add"){
          console.log('id');
          authFetch.post("/form/add", values)
          .then((response) => {
            console.log(response.data);
          });
        }
        else{
          authFetch.put(`/form/edit/${id}`,values)
          .then((response)=>{
            console.log(response.data);
          })
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  
useEffect(() => {
  if (id.length > 0) {
    authFetch.get(`contact/view/${id}`).then((y) => {
      formik.setValues({
        ...y.data.contact,
        moduleId: formik.values.moduleId,
      });
    });
  }
}, [id]);
 
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
            Contact Form
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.email && Boolean(formik.errors.email)
              }
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
          
            
            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber &&
                Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              margin="normal"
            />
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
  );
};

export default ContactForm;