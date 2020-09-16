import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// Components
import CompaniesTable from '../components/CompaniesTable';
import CounterpartiesTable from '../components/CounterpartiesTable';
import BuySell from '../components/BuySell';
import Logs from '../components/Logs';
import Graph from '../components/Graph';

// Services
import exchangesService from '../services/exchanges.service';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
        background: '#152235',

    },
    gridItem: {
        overflowX: 'hidden'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: theme.palette.success.light,

    }
}));

const exchanges = [];

function getExchanges() {
    const data = exchangesService.query();
    data.forEach(d => {
        exchanges.push(d);
    });
    return exchanges;
}

getExchanges();

const Main = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={12} md={8} className={classes.gridItem}>
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item zeroMinWidth xs={12} sm={6} className={classes.gridItem}>
                        <CompaniesTable />
                    </Grid>
                    <Grid item zeroMinWidth xs={12} sm={6} className={classes.gridItem}>
                        <CompaniesTable />
                    </Grid>
                </Grid>

                <Grid container spacing={1} className={classes.grid}>
                    <Grid item zeroMinWidth xs={12} md={8} className={classes.gridItem}>
                        <CounterpartiesTable />

                    </Grid>
                    <Grid item zeroMinWidth xs={12} md={4} className={classes.gridItem}>
                        {exchanges.map(exchange => {
                            return (<BuySell key={exchange.currencies} exchange={exchange} />);
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} className={classes.gridItem}>
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item xs={12} md={6} className={classes.gridItem}>
                        <Graph />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.gridItem}>
                        <Graph />
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item xs={12} md={6} className={classes.gridItem}>
                        <Graph />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.gridItem}>
                        <Graph />
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item xs={12} md={6} className={classes.gridItem}>
                        <Graph />
                    </Grid>

                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.grid}>

                <Grid item xs={12} md={6} className={classes.gridItem}>
                    <Logs></Logs>
                </Grid>
                <Grid item xs={12} md={6} className={classes.gridItem}>
                    <Logs></Logs>
                </Grid>
            </Grid>
        </Grid>);
}

export default Main;