import React from 'react';

// @material-ui/core components
import { Table, TableHead, TableRow, TableBody, TableCell, TableContainer } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// Services
import counterpartiesService from '../services/counterparties.service';


const useStyles = makeStyles((theme) => ({
    table: {
        overflow: 'hidden'
    },
    tableHead: {
        backgroundColor: '#2F3B4B',

    },
    tableBody: {
        backgroundColor: '#272E38',
    },
    tableCell: {
        fontSize: '10px',
        color: '#cdd3d8',
        whiteSpace: 'nowrap'
    }
}));

const rows = [];

function createData(counterParty, btc, eth, xpr, eur, usd, gbp, netExposure, lastCalculated) {
    return { counterParty, btc, eth, xpr, eur, usd, gbp, netExposure, lastCalculated };
}


function getRows() {
    const data = counterpartiesService.query();
    data.forEach(d => {
        rows.push(createData(d.counterParty, d.btc, d.eth, d.xpr, d.eur, d.usd, d.gbp, d.netExposure, d.lastCalculated));
    });
    return rows;
}

getRows();

export default function DenseTable() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.tableHead}>
                    <TableRow><TableCell colSpan={9} className={classes.tableCell}>THRESHOLD 10000</TableCell></TableRow>
                    <TableRow>
                        <TableCell className={classes.tableCell}>COUNTERPARTY</TableCell>
                        <TableCell className={classes.tableCell}>BTC</TableCell>
                        <TableCell className={classes.tableCell}>ETH</TableCell>
                        <TableCell className={classes.tableCell}>XPR</TableCell>
                        <TableCell className={classes.tableCell}>EUR</TableCell>
                        <TableCell className={classes.tableCell}>USD</TableCell>
                        <TableCell className={classes.tableCell}>GBP</TableCell>
                        <TableCell className={classes.tableCell}>NET EXPOSURE</TableCell>
                        <TableCell className={classes.tableCell} >LAST CALCULATED DATE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                    {rows.map((row) => (
                        <TableRow key={row.counterParty}>
                            <TableCell className={classes.tableCell}>{row.counterParty}1</TableCell>
                            <TableCell className={classes.tableCell}>{row.btc}2</TableCell>
                            <TableCell className={classes.tableCell}>{row.eth}3</TableCell>
                            <TableCell className={classes.tableCell}>{row.xpr}4</TableCell>
                            <TableCell className={classes.tableCell}>{row.eur}5</TableCell>
                            <TableCell className={classes.tableCell}>{row.usd}6</TableCell>
                            <TableCell className={classes.tableCell}>{row.gbp}7</TableCell>
                            <TableCell className={classes.tableCell}>{row.netExposure}8</TableCell>
                            <TableCell className={classes.tableCell}>{row.lastCalculated}9</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
