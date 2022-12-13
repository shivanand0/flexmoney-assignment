import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AuthModal from '../Auth/AuthModal';
import ProfileIcon from '../Auth/ProfileIcon';
import { AppState } from '../../Context/AppContext';
const Header = (props) => {
  const { title } = props;
  const { auth } = AppState()
  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <SelfImprovementIcon fontSize="large" />
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        {title}
      </Typography>

      {auth ? <ProfileIcon /> : <AuthModal />}
      
      

    </Toolbar>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header