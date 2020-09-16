import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tags: {
        backgroundColor: '#272E38',
        margin: 1,
        maxHeight: '40px'
    },
    tag: {
        border: '1px solid #2F3B4B',
        padding: 2,
    }

}));

export default function FlexDirection(props) {
    const classes = useStyles();

    const { tag1, tag2, tag3 } = props;

    return (
        <div style={{ width: '100%' }} className={classes.tags}>
            <Box display="flex" justifyContent="center" alignContent="space-between" flexDirection="row" p={1} m={1}>
                <Box p={1} className={classes.tag}>
                    {tag1}
                </Box>
                <Box p={1} className={classes.tag}>
                    {tag2}
                </Box>
                <Box p={1} className={classes.tag}>
                    {tag3}
                </Box>
            </Box>
        </div>
    );
}
