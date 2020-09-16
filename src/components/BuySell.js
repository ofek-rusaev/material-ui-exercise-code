import React from 'react';

import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Font awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import FlexDirection from './FlexDirection';

const exchangeIcon = <FontAwesomeIcon icon={faExchangeAlt} />
const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: 1,
        marginBottom: 15,
        height: '45%',
        backgroundColor: theme.palette.primary.dark,
        color: '#cdd3d8'
    },
    gridHeader: {
        backgroundColor: theme.palette.primary.main,
        paddingLeft: 10,
    },
    gridMain: {
        backgroundColor: theme.palette.primary.dark,
        paddingLeft: 10,
        textAlign: 'center',
        maxWidth: '90%'

    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    sell: {
        backgroundColor: '#e81b37',
        display: 'flex',
        color: '#cdd3d8'
    },
    sellIcon: {
        fontSize: 'x-large',
        marginRight: 5,
        transform: 'rotate(-60deg)'
    },
    buy: {
        backgroundColor: '#1dd120',
        display: 'flex',
        color: '#cdd3d8'
    },
    buyIcon: {
        fontSize: 'x-large',
        marginRight: 5,
        transform: 'rotate(120deg)'
    },
    rate: {
        textAlign: 'center'
    },
    tag: {
        backgroundColor: theme.palette.primary.dark,
        border: '1px solid #2F3B4B',
        margin: 1,
        minWidth: '100px'
    }
}));

const BuySell = (props) => {
    const classes = useStyles();
    const { exchange } = props;

    return (
        <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={12} className={classes.gridHeader}>
                {exchangeIcon} {exchange.currencies}
            </Grid>
            <Grid container spacing={1} className={classes.gridMain}>
                <Grid item xs={4}>
                    <Button size="small" variant="contained" className={classes.sell}><span className={classes.sellIcon}>{sendIcon}</span>
                        <div>
                            {exchange.sellPrice}
                            <div>Sell</div>
                        </div>
                    </Button>
                </Grid>
                <Grid item xs={4} className={classes.rate}>
                    {exchange.rate}
                </Grid>

                <Grid item xs={4}>
                    <Button size="small" variant="contained" className={classes.buy}>
                        <span className={classes.buyIcon}>{sendIcon}</span>
                        <div>
                            {exchange.buyPrice}
                            <div>Buy</div>
                        </div>
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.flex}>
                <FlexDirection className={classes.tag} tag1={exchange.tag1} tag2={exchange.tag2} tag3={exchange.tag3}></FlexDirection>
            </Grid>
        </Grid>
    );
}

export default BuySell;