import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AppsIcon from '@material-ui/icons/Apps';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ContactsIcon from '@material-ui/icons/Contacts';
import List from '../components/List';
import BottomNav from '../components/BottomNav';
import LandingTop from '../components/LandingTop';
import Cli from './Cli';

import { layoutGenerator } from 'react-break';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    
  };
}

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.error.contrastText,
    display: 'inlineFlex',
    overflow: 'hidden',
    height:'100%',
    marginTop: '-10%',
    marginLeft:'0',
    color:'black'
  
  },
  tabs: {
    
    borderRight: `1px solid ${theme.palette.divider}`,
 
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="horizontal"
        
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        
        
      >
        
        <Tab label="Home"  icon={<i class="fas fa-home"></i>} {...a11yProps(0)} />
        <Tab label="Skills"  icon={<i class="fas fa-toilet-paper"></i>}  {...a11yProps(1)} />
        <Tab label="Tutorials"  icon={<i class="fas fa-pencil-ruler"></i>}  {...a11yProps(2)} />
        <Tab label="Apps"  icon={<i class="fas fa-shapes"></i>}  {...a11yProps(3)} />
        <Tab label="Services"  icon={<i class="fas fa-hands-helping"></i>}  {...a11yProps(4)} />
        <Tab label="Contact"  icon={<i class="fas fa-id-card-alt"></i>}  {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
<LandingTop />
      </TabPanel>
      <TabPanel value={value} index={1}>
<Skills />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Cli />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Projects />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Services />
      </TabPanel>
      <TabPanel value={value} index={5}>
<Contact />     
 </TabPanel>
   
    </div>
  );
}