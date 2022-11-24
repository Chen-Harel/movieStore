import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Login from './Login';
import Register from '../Register/Register';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#eaecf0',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <span>Don't have an account?</span><Button onClick={handleOpen}><span className="buttonColor">Register here</span></Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
        <Button sx={{marginLeft: 33.3,}} onClick={handleClose}><CloseIcon className="buttonColor" /></Button>
          <h2 id="child-modal-title">Register now and start adding to your favorites!</h2>
          <p id="child-modal-description">
            <Register />
          </p>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      <Button onClick={handleOpen} style={{fontWeight: 'normal', color: '#616161'}}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Welcome to DMDB! The largest Disney movie database on the web!</h2>
          <p id="parent-modal-description">
            <Login />
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}