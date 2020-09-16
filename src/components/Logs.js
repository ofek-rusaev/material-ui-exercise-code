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
        backgroundColor: theme.palette.primary.main,
        maxHeight: '20px'
    },
    tabs: {
        width: '100%',
        fontSize: '10px',
        backgroundColor: theme.palette.primary.dark,
        color: '#cdd3d8',
    },
    tab: {
        color: 'white',
        '&$selected': {
            backgroundColor: '#004C9B',
            color: 'white',
            fontWeight: theme.typography.fontWeightMedium,
        },
    },
    indicator: {
        backgroundColor: '#a4a5a7',
        top: '45px',
    },
    logs: {
        padding: 0
    }
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
    const strStart = `[${data.date}] ${data.env}. `;
    const strEnd = ` ${data.message}. `;
    let statusColor = colorUpdate(data.status);

    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={<React.Fragment>{strStart} <span style={{ color: statusColor }}>{data.status.toUpperCase()}</span>{strEnd}</React.Fragment>} />
        </ListItem>
    );
}

function colorUpdate(status) {
    switch (status) {
        case 'Info':
            return 'yellow'
        case 'Debug':
            return 'red'
        default:
            break;
    }

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
                    classes={{
                        indicator: classes.indicator
                    }}
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
                className={classes.logs}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={7} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={8} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={9} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={10} dir={theme.direction}>
                    <div className={classes.tabs}>
                        <FixedSizeList height={400} itemSize={26} itemCount={rows.length}>
                            {renderRow}
                        </FixedSizeList>
                    </div>
                </TabPanel>
            </SwipeableViews>

        </div>
    );
}
