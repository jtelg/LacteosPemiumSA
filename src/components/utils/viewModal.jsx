import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 10
};

const BasicModal = ({ type, titulo }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [certificate, setCertificate] = useState('');

  useEffect(() => {
    switch (type) {
      case 1:
        setCertificate('/media/pol.calidad.png');
        break;
      case 3:
        setCertificate('/media/cert.peligros.png');
        break;
      case 5:
        setCertificate('/media/cert.manufactura.png');
        break;

      default:
        break;
    }
  }, []);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="text-white hover:text-secondary w-full brother-500 border-2 border-white hover:border-secondary  rounded-[30px] px-6 py-1 "
      >
        {titulo}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            <img src={certificate} alt="foto" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
