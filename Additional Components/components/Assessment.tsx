import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Button from '@mui/material/Button';
import testpaperbg from '../assets/testpaper2.jpg'

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
  price: string,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      }
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Solution
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        "this is the solution for answer"
                        {/* {historyRow.date} */}
                      </TableCell>
                      <TableCell>
                        {/* {historyRow.customerId} */}
                      </TableCell>
                      <TableCell align="right">
                        {/* {historyRow.amount} */}
                      </TableCell>
                      <TableCell align="right">
                        {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('What is the primary function of a rectifier?', 'Signal amplification', 'Voltage regulation', 'Current transformation', 'AC to DC conversion', ''),
  createData('Which material is commonly used as a semiconductor in electronics?', 'Copper', 'Silicon', 'Aluminum', 'Gold', ''),
  createData('What does the term PID controller stand for in control systems?', 'Proportional Integral Derivative', 'Primary Input Device', 'Power Integrated Device', 'Programmable Interface Driver', ''),
  createData('Which law states that the total electric flux through a closed surface is equal to the charge enclosed by the surface divided by the permittivity of free space?', 'Gauss\'s Law', 'Faraday\'s Law', 'Ohm\'s Law', 'Ampere\'s Law', ''),
  createData('What is the purpose of a strain gauge in engineering applications?', 'Measure temperature', 'Measure pressure', 'Measure strain or deformation', 'Measure velocity', '')
];

export default function CollapsibleTable() {
  return (
    <div className='table-container' style={{ backgroundImage: `url(${testpaperbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <TableContainer sx={{ width: 800, background: 'snow', }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell><h2>Questions</h2></TableCell>
              <TableCell align="right"><h3>Option A</h3></TableCell>
              <TableCell align="right"><h3>Option B</h3></TableCell>
              <TableCell align="right"><h3>Option C</h3></TableCell>
              <TableCell align="right"><h3>Option D</h3></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <div style={{width:800, display:'flex', justifyContent:'space-around'}}>
        <Button sx={{width:350}} color='secondary' variant="contained">Reset</Button>
        <Button sx={{width:350}} variant="contained">Submit</Button>
      </div>
    </div>
  );
}