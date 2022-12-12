import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CustomButton from '../Button/CustomButton';
import AuthModal from '../Auth/AuthModal';
const Header = (props) => {
  const { title } = props;

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
      {/* <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="Login"
        // getStartedBtn={true}
      /> */}
      <AuthModal />
      {/* <Button variant="outlined" size="small">
        Sign up
      </Button> */}
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