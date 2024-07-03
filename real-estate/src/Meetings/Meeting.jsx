import React from 'react';
import MeetingForm from './MeetingForm';
import MeetingGrid from './MeetingGrid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


const Meeting = () => {

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };
    
  return (
    <div>
      <MeetingForm/>

      <Button onClick={toggleDrawer(true)}>Open drawer</Button>

      <Drawer open={open} onClose={toggleDrawer(false)}>

      </Drawer>

      <MeetingGrid/>
    </div>
  )
}

export default Meeting
