import { useState } from 'react';
// import PropTypes from 'prop-types';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Card from '@mui/material/Card';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { users } from 'src/_mock/user';

import Scrollbar from 'src/components/scrollbar';

import TableNoData from './table-no-data';
import UserTableRow from './user-table-row';
import UserTableHead from './user-table-head';
import TableEmptyRows from './table-empty-rows';
import UserTableToolbar from './user-table-toolbar';

import ScoreTableRow from './score-table-row';
import ScoreTableHead from './score-table-head';
import { emptyRows, applyFilter, getComparator } from './utils';


// ----------------------------------------------------------------------

export default function AdminDashboard() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  return (
  <Container maxWidth="xl">
    <Grid 
      marginTop={2}
      sx={{ display: 'flex', justifyContent: 'right', alignContent: 'right'}}
      item xs={12} md={12} lg={12}
    >
      <Button
        startIcon={<img src="/assets/icons/navbar/logout.svg" alt="icon" style={{ marginRight: 3, width: 24, height: 24 }} />}
      >
        <Typography sx={{color: '#000000', fontSize: '15px'}}>Logout</Typography>
      </Button>
    </Grid>

    <Grid 
      sx={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', ml:'80px'}}
      item xs={12} md={12} lg={12}
    >
      <Typography sx={{color: '#0D0C0C', fontSize: '28px', fontWeight: '700', mb:'10px'}}>Setting</Typography>
      <Typography sx={{color: '#000000', fontSize: '16px', fontWeight: '400'}}>Users and Data Updates</Typography>
    </Grid>

    <Divider sx={{backgroundColor: '#B5B5B5', width: '100%', mt: 4}} />

    <Card sx={{mt: '100px', padding:'50px', border: '1px solid #CBC0C0'}}>
      <Grid 
        marginTop={2}
        px={8}
        pt={4}
        sx={{ display: 'flex', flexDirection: 'row'}}
      >
        <Grid item xs={6} lg={4} sx={{width: '226px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Grid sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography mb={1} sx={{color: '#000000', fontSize: '14px'}}>1 Accounts</Typography>
              <Typography sx={{color: '#000000', fontSize: '16x',fontWeight:'bold'}}>Super Admin</Typography>
          </Grid>
          <Grid sx={{display: 'flex', flexDirection: 'column'}}><img src="/assets/icons/glass/mdi_user-supervisor-circle.png" alt="icon" style={{ marginLeft: 30, marginBottom: 20, width: 28, height: 28}} /></Grid>
        </Grid>

        <Grid item xs={6} lg={8} ml={12} sx={{width: '226px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Grid sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography mb={1} sx={{color: '#000000', fontSize: '14px'}}>0 Account</Typography>
              <Typography sx={{color: '#000000', fontSize: '16x', fontWeight:'bold'}}>Admin</Typography>
          </Grid>
          <Grid sx={{display: 'flex', flexDirection: 'column'}}><img src="/assets/icons/glass/mdi_user-supervisor-circle.png" alt="icon" style={{ marginLeft: 30, marginBottom: 20, width: 28, height: 28}} /></Grid>
        </Grid>
      </Grid>

      <Grid  
        marginTop={10}
        sx={{ display: 'flex', justifyContent: 'left', alignContent: 'left'}}
        item xs={12} md={12} lg={12}
        ml={4}
      >
        <Button sx={{borderRadius: '10px', border: '1px solid #33C2B2'}}>
          <Typography sx={{color: '#33C2B2', fontSize: '15px'}}> +  Add Admin</Typography>
        </Button>
      </Grid>

      <Grid
        marginTop={7}
      >
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />
      </Grid>
      

      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table sx={{ minWidth: 800 }}>
            <UserTableHead
              order={order}
              orderBy={orderBy}
              rowCount={users.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: 'name', label: 'Name' },
                { id: 'email', label: 'Email' },
                { id: 'score', label: 'Score' },
                { id: 'role', label: 'Admin Role' },
                { id: '' },
              ]}
            />
            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <UserTableRow
                    key={row.id}
                    name={row.name}
                    role={row.role}
                    email={row.email}
                    avatarUrl={row.avatarUrl}
                    score={row.score}
                    selected={selected.indexOf(row.name) !== -1}
                    handleClick={(event) => handleClick(event, row.name)}
                  />
                ))}

              <TableEmptyRows
                height={77}
                emptyRows={emptyRows(page, rowsPerPage, users.length)}
              />

              {notFound && <TableNoData query={filterName} />}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        page={page}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Grid
        marginTop={10}
      >
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <ScoreTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'scorename', label: 'Score Name' },
                  { id: 'max', label: 'Max' },
                  { id: 'min', label: 'Min' },
                  { id: 'formula', label: 'Formula' },
                ]}
              />
              <TableBody  sx={{marginLeft: '20px'}}>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <ScoreTableRow
                      key={row.id}
                      scorename='Travel Score'
                      max='5000'
                      min='0'
                      formula='Country Score + City Score'
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
      </Grid>
      
    </Card>
  </Container>
  );
  
}
