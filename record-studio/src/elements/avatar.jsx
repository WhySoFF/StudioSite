import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


export default function AccountMenu() {
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', float: 'right' }}>
        <Tooltip title="">
          <IconButton size="small" sx={{ ml: 2 }}>
          <Link to="/account" underline="none" color="black" ><Avatar sx={{ width: 52, height: 52 }}>A</Avatar></Link>
          </IconButton>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}