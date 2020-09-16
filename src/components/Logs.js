import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { FixedSizeList } from 'react-window';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, ListItem, ListItemText } from '@material-ui/core';

// Services
import logsService from '../services/logs.service';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    header: {
        position: 'relative',
        color: '#cdd3d8',
        fontSize: '10px',
        backgroundColor: '#2F3B4B',
        // marginBottom: '-20px',
        // paddingLeft: 10,
        maxHeight: '20px'
    },
    root: {
        width: '100%',
        fontSize: '10px',
        backgroundColor: '#272E38',
        color: '#cdd3d8',
    },
}));

const rows = [];

function createData(date, env, status, message) {
    return { date, env, status, message };
}


function getRows() {
    const data = logsService.query();
    data.forEach(d => {
        rows.push(createData(d.date, d.env, d.status, d.message));
    });
    return rows;
}

getRows();

function renderRow(props) {
    const { index, style } = props;
    const data = rows[index];
    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={`[${data.date}] ${data.env}. ${data.status.toUpperCase()}: ${data.message}`} />
        </ListItem>
    );
}
renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
};

export default function Logs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div >
            <AppBar position="static">
                <Tabs
                    className={classes.header}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    variant="fullWidth"
                    aria-label="action tabs example"
                >
                    <Tab label="Id" {...a11yProps(0)} />
                    <Tab label="Created" {...a11yProps(1)} />
                    <Tab label="Last opened" {...a11yProps(2)} />
                    <Tab label="Instrument" {...a11yProps(3)} />
                    <Tab label="Qty" {...a11yProps(4)} />
                    <Tab label="Bid" {...a11yProps(5)} />
                    <Tab label="Ask" {...a11yProps(6)} />
                    <Tab label="Delta" {...a11yProps(7)} />
                    <Tab label="Model vol" {...a11yProps(8)} />
                    <Tab label="Status" {...a11yProps(9)} />
                    <Tab label="Clearing" {...a11yProps(10)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className={classes.root}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className={classes.root}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className={classes.root}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
            </SwipeableViews>

        </div>
    );
}
