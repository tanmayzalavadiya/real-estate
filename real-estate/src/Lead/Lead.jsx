import React from 'react'
import LeadForm from './LeadForm'
import LeadGrid from './LeadGrid'
import Drawer from '@mui/material/Drawer';
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const Lead = () => {
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
   <div>
    
<LeadGrid open1={open} id={id} setid={setid} opende={opende} setAction={setAction} action={action} toggleDrawer={toggleDrawer}/>

      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
       
  <LeadForm  id={id} setid={setid} setAction={setAction} action={action}/>

      </Drawer>
    </div>
  )
}

export default Lead
