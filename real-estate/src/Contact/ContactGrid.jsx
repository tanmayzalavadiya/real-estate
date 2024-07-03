import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import authFetch from "../Lead/custom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { blue ,red,grey} from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

//for search bar

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';







const ContactGrid = (props) => {

  const columns = [
    { field: 'email', headerName: 'email', width: 90 },
    { field: 'phoneNumber', headerName: 'phoneNumber', width: 90 },    
   
    {field:'',
      headerName:'action',
      renderCell:(params)=>{
        return (
          <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={(event) => {
          handleClick(event, params);
        }}
      >
        <MoreVertIcon />
      </IconButton>
        )
      }

    }

  ]

  const { open1, id, setid, opende ,action, setAction ,toggleDrawer} = props;
  const [data,setData] = useState([]);
  const [dopen, dsetOpen] = React.useState(false);

  const dhandleClose = () => {
    dsetOpen(false);
  };
  const deleteData = () => {
    authFetch.post("/contact/deleteMany", id).then((y) => {
      console.log(y);
    });

    dhandleClose();
  };

  const handleDeleteOpen = () => {
    dsetOpen(true);
    handleClose();
  };


  useEffect(()=>{


    authFetch.get("/contact").then(y=>{

      setData(y.data.map((p)=>{

        return {...p,id: p._id};

      }))
    })

  },[dopen, open1])

  const ITEM_HEIGHT = 48;

  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event,params) => {
      setAnchorEl(event.currentTarget);
      console.log(params);
      setid([params.row._id]);
     
    
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const manageEdit = (e) => {
      setAction("edit");
      opende();
      handleClose();
    };

    // for search bar

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })); 
  
    // 

    const [rowSelectionModel, setRowSelectionModel] = React.useState([]);

  return (
    <div>

<AppBar position="static">
          <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Contacts({data.length})
          </Typography>
          {id.length>=1 && (
          <Button variant="outlined" sx={{ color: grey[50] }} onClick={handleDeleteOpen}> <DeleteIcon sx={{ color: red[500] }} /></Button>
         ) }
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* <Button variant="outlined" sx={{ color: grey[50] }} onClick={handleSearch}>Search</Button> */}
          <Button variant="outlined" sx={{ color: grey[50] }} onClick={toggleDrawer(true)}>
             <AddIcon /> Add Contact
            </Button>
          </Toolbar>
          </AppBar>
       <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
      rows={data}
        columns={columns}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          console.log(newRowSelectionModel);
          setid(newRowSelectionModel); 
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

<Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        
        <MenuItem onClick={manageEdit}>
          <EditNoteIcon sx={{ color: blue[500] }} />
            Edit
          </MenuItem>

          
          <MenuItem onClick={handleDeleteOpen}>
          <DeleteIcon sx={{ color: red[500] }} />
            Delete
          </MenuItem>

       
        
      </Menu>
    </Box>

    <Dialog
        open={dopen}
        onClose={dhandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are u sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dhandleClose}>no</Button>
          <Button onClick={deleteData} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>

    
    </div>
  )
}


export default ContactGrid;

