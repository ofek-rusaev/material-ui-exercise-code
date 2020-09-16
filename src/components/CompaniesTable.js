import React from 'react';

// @material-ui/core components
import { Table, TableHead, TableRow, TableBody, TableCell, TableContainer, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// Font awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';

// Services
import companiesService from '../services/companies.service';

const circleIcon = <FontAwesomeIcon icon={faDotCircle} />

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 480,
    },
    tableHead: {
        backgroundColor: theme.palette.primary.main,

    },
    tableBody: {
        backgroundColor: theme.palette.primary.dark,
    },
    tableCell: {
        fontSize: '10px',
        color: '#cdd3d8',
    },
    active: {
        color: '#1dd120'
    },
    canceled: {
        color: '#e81b37'
    },
    dateCell: {
        color: '#a4a5a7',
        fontSize: '10px',
    },
    filter: {
        color: '#a4a5a7',
        fontSize: '10px',
        backgroundColor: 'inherit',
        marginLeft: '5px',
        border: '1px solid #a4a5a7',
        maxHeight: '18px',
    },
    filterRemove: {
        marginLeft: '10px'
    }
}));

const rows = [];

function createData(company, product, sentAt, status) {
    return { company, product, sentAt, status };
}


function getRows() {
    const data = companiesService.query();
    data.forEach(d => {
        rows.push(createData(d.company, d.product, d.sentAt, d.status));
    });
    return rows;
}

getRows();

export default function DenseTable() {
    const classes = useStyles();
    const filters = ['Filter 1', 'Filter 2', 'Filter 3'];

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.tableHead}>
                    <TableRow><TableCell colSpan={4} className={classes.tableCell}>FILTER APPLIED:
                        {filters.map(filter => {
                        return <Button key={filter} size="small" variant="contained" className={classes.filter}>
                            {filter}
                            <span className={classes.filterRemove}>x</span>
                        </Button>
                    })}
                    </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.tableCell}>COMPANY NAME</TableCell>
                        <TableCell className={classes.tableCell}>PRODUCT</TableCell>
                        <TableCell className={classes.tableCell}>SENT AT</TableCell>
                        <TableCell className={classes.tableCell}>STATUS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                    {rows.map((row) => (
                        <TableRow key={row.company}>
                            <TableCell className={classes.tableCell}>{row.company}</TableCell>
                            <TableCell className={classes.tableCell}>{row.product}</TableCell>
                            <TableCell className={classes.dateCell}>{row.sentAt}</TableCell>
                            <TableCell color={(row.status) ? 'green' : 'red'} className={classes.tableCell}>
                                {(row.status) ? <span className={classes.active}> {circleIcon} Active</span> : <span className={classes.canceled}> {circleIcon} Canceled</span>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
