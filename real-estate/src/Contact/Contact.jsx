import React from 'react'
import ContactForm from './ContactForm'
import ContactGrid from './ContactGrid'
import Drawer from '@mui/material/Drawer';
import { Button, TextField } from "@mui/material";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";



const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [id, setid] = React.useState([]);
  const [action, setAction] = React.useState('');



  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setAction("add")
  }; 
  
  
  const opende =() => {

    setOpen(true);
  }

 

  return (
   <>



<ContactGrid open1={open} id={id} setid={setid} opende={opende} setAction={setAction} action={action}  toggleDrawer={toggleDrawer}/>


      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
       
  <ContactForm id={id} setid={setid} setAction={setAction} action={action}/>

      </Drawer>

    
    </>
  )
}

export default Contact
