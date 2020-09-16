import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const data = [
    { argument: 1, value: 20 },
    { argument: 2, value: 33 },
    { argument: 4, value: 30 },
    { argument: 5, value: 40 },
    { argument: 6, value: 45 },
    { argument: 7, value: 30 },
    { argument: 8, value: 35 },
    { argument: 9, value: 38 },
    { argument: 10, value: 40 },
    { argument: 11, value: 47 },
    { argument: 12, value: 48 },
    { argument: 13, value: 39 },
];

const useStyles = makeStyles((theme) => ({
    chart: {
        backgroundColor: '#272E38',
        maxHeight: '200px',
        position: 'relative',
        fontSize: '10px',
    },
    chartInfo: {

        color: '#cdd3d8',
    },
    root: {
        width: '100%',
        fontSize: '10px',
        backgroundColor: '#272E38',
        color: '#cdd3d8',
    },
}));
export default function Graph() {

    const classes = useStyles();
    return (
        <Paper className={classes.chartInfo}>
            <Chart className={classes.chart} data={data}>
                <ArgumentAxis className={classes.chartInfo} />
                <ValueAxis className={classes.chartInfo} />
                <LineSeries valueField="value" argumentField="argument" className={classes.chartInfo} />
            </Chart>
        </Paper>
    )

}; 