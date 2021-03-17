import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper            from '@material-ui/core/Paper';
import Table            from '@material-ui/core/Table';
import TableBody        from '@material-ui/core/TableBody';
import TableCell        from '@material-ui/core/TableCell';
import TableHead        from '@material-ui/core/TableHead';
import TableRow         from '@material-ui/core/TableRow';
import InputLabel       from '@material-ui/core/InputLabel';
import MenuItem         from '@material-ui/core/MenuItem';
import FormControl      from '@material-ui/core/FormControl';
import Select           from '@material-ui/core/Select';
import FormLabel        from '@material-ui/core/FormLabel';
import FormGroup        from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox         from '@material-ui/core/Checkbox';
import Radio            from '@material-ui/core/Radio';
import RadioGroup       from '@material-ui/core/RadioGroup';
import Button           from '@material-ui/core/Button';
import { routes } from '../../../App';
import styles from './Order.module.scss';

const demoContent = [
  {
    id: '103',
    tableId: '3',
    productId: ['pizza'],
    breakfastParams: [],
    pizzaParams: ['tomato sauce', 'mushrooms', 'salami', 'cheese crust'],
    saladParams: [],
    productPrice: ['$25'],
    totalPrice: '$25',
  },
  {
    id: '104',
    tableId: '5',
    productId: ['cake'],
    breakfastParams: [],
    pizzaParams: [],
    saladParams: [],
    productPrice: ['$9'],
    totalPrice: '$9',
  },
  {
    id: '106',
    tableId: '4',
    productId: ['breakfast'],
    breakfastParams: ['latte'],
    pizzaParams: [],
    saladParams: [],
    productPrice: ['$15'],
    totalPrice: '$15',
  },
  {
    id: '102',
    tableId: '1',
    productId: ['salad', 'cake'],
    breakfastParams: [],
    pizzaParams: [],
    saladParams: ['cucumber', 'feta', 'pepper'],
    productPrice: ['$20', '$9'],
    totalPrice: '$29',
  },
  {
    id: '105',
    tableId: '6',
    productId: ['cake'],
    breakfastParams: [],
    pizzaParams: [],
    saladParams: [],
    productPrice: ['$9'],
    totalPrice: '$9',
  },
  {
    id: '101',
    tableId: '2',
    productId: ['pizza', 'salad'],
    breakfastParams: [],
    pizzaParams: ['cream sauce', 'olives', 'mushrooms', 'basil', 'gluten crust'],
    saladParams: ['tomatoes', 'feta', 'herbs', 'pepper'],
    productPrice: ['$29', '$23'],
    totalPrice: '$52',
  },
];

const Order = props => {
  const [table, setTable] = React.useState('');
  const handleTableChange = event => {
    setTable(event.target.value);
    console.log(event.target.value);
  };

  const [productState, setProductState] = React.useState({
    cake: false,
    breakfast: false,
    pizza: false,
    salad: false,
  });
  const handleProductChange = event => {
    setProductState({ ...productState, [event.target.name]: event.target.checked });
  };
  const { cake, breakfast, pizza, salad } = productState;

  const [breakfastValue, setBreakfastValue] = React.useState('');
  const handleBreakfastChange = event => {
    setBreakfastValue(event.target.value);
  };

  const [sauceValue, setSauceValue] = React.useState('');
  const handlePizzaSauceChange = event => {
    setSauceValue(event.target.value);
  };

  const [toppingsState, setToppingsState] = React.useState({
    olives: false,
    redpeppers: false,
    greenpeppers: false,
    mushrooms: false,
    basil: false,
    salami: false,
  });
  const handleToppingsChange = event => {
    setToppingsState({ ...toppingsState, [event.target.name]: event.target.checked });
  };
  const { olives, redpeppers, greenpeppers, mushrooms, basil, salami } = toppingsState;

  const [crust, setCrust] = React.useState('');
  const handleCrustChange = event => (
    setCrust(event.target.value)
  );

  const [saladState, setSaladState] = React.useState({
    cucumber: false,
    tomatoes: false,
    olive: false,
    feta: false,
    cheese: false,
    herbs: false,
    pepper: false,
  });
  const handleSaladChange = event => {
    setSaladState({ ...saladState, [event.target.name]: event.target.checked });
  };
  const { cucumber, tomatoes, olive, feta, cheese, herbs, pepper } = saladState;


  return(
    <Paper className={styles.component} elevation={3}>
      {props.match.params.id === 'new'
        ?
        <form className={styles.form}>
          <FormControl className={styles.formControl}>
            <InputLabel id='table-label'>Table</InputLabel>
            <Select
              labelId='table-label'
              id='table'
              value={table}
              onChange={handleTableChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel component="legend">Products</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={cake} onChange={handleProductChange} name="cake" color="primary" />}
                label="Cake"
              />
              <FormControlLabel
                control={<Checkbox checked={breakfast} onChange={handleProductChange} name="breakfast" color="primary" />}
                label="Breakfast"
              />
              <FormControlLabel
                control={<Checkbox checked={pizza} onChange={handleProductChange} name="pizza" color="primary" />}
                label="Pizza"
              />
              <FormControlLabel
                control={<Checkbox checked={salad} onChange={handleProductChange} name="salad" color="primary" />}
                label="Salad"
              />
            </FormGroup>
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel component="legend">Breakfast params</FormLabel>
            <RadioGroup aria-label="breakfast" name="breakfast" value={breakfastValue} onChange={handleBreakfastChange}>
              <FormControlLabel value="latte" control={<Radio color="primary" />} label="Latte" />
              <FormControlLabel value="cappuccino" control={<Radio color="primary" />} label="Cappuccino" />
              <FormControlLabel value="espresso" control={<Radio color="primary" />} label="Espresso" />
              <FormControlLabel value="macchiato" control={<Radio color="primary" />} label="Macchiato" />
            </RadioGroup>
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel component="legend">Pizza sauces</FormLabel>
            <RadioGroup aria-label="pizza-sauce" name="pizza-sauce" value={sauceValue} onChange={handlePizzaSauceChange}>
              <FormControlLabel value="tomato" control={<Radio color="primary" />} label="Tomato" />
              <FormControlLabel value="cream" control={<Radio color="primary" />} label="Sour cream" />
            </RadioGroup>
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel component="legend">Pizza toppings</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={olives} onChange={handleToppingsChange} name="olives" color="primary" />}
                label="Olives"
              />
              <FormControlLabel
                control={<Checkbox checked={redpeppers} onChange={handleToppingsChange} name="redpeppers" color="primary" />}
                label="Red peppers"
              />
              <FormControlLabel
                control={<Checkbox checked={greenpeppers} onChange={handleToppingsChange} name="greenpeppers" color="primary" />}
                label="Green peppers"
              />
              <FormControlLabel
                control={<Checkbox checked={mushrooms} onChange={handleToppingsChange} name="mushrooms" color="primary" />}
                label="Mushrooms"
              />
              <FormControlLabel
                control={<Checkbox checked={basil} onChange={handleToppingsChange} name="basil" color="primary" />}
                label="Fresh basil"
              />
              <FormControlLabel
                control={<Checkbox checked={salami} onChange={handleToppingsChange} name="salami" color="primary" />}
                label="Salami"
              />
            </FormGroup>
          </FormControl>

          <FormControl className={styles.formControl}>
            <InputLabel id='crust-label'>Pizza crust</InputLabel>
            <Select
              labelId='crust-label'
              id='crust'
              value={crust}
              onChange={handleCrustChange}
            >
              <MenuItem value={1}>Standard</MenuItem>
              <MenuItem value={2}>Thin</MenuItem>
              <MenuItem value={3}>Thick</MenuItem>
              <MenuItem value={4}>Cheese in edges</MenuItem>
              <MenuItem value={5}>Wholewheat</MenuItem>
              <MenuItem value={6}>With extra gluten</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={styles.formControl}>
            <FormLabel component="legend">Salad ingredients</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={cucumber} onChange={handleSaladChange} name="cucumber" color="primary" />}
                label="Cucumber"
              />
              <FormControlLabel
                control={<Checkbox checked={tomatoes} onChange={handleSaladChange} name="tomatoes" color="primary" />}
                label="Tomatoes"
              />
              <FormControlLabel
                control={<Checkbox checked={olive} onChange={handleSaladChange} name="olive" color="primary" />}
                label="Olives"
              />
              <FormControlLabel
                control={<Checkbox checked={feta} onChange={handleSaladChange} name="feta" color="primary" />}
                label="Feta cheese"
              />
              <FormControlLabel
                control={<Checkbox checked={cheese} onChange={handleSaladChange} name="cheese" color="primary" />}
                label="Cheese"
              />
              <FormControlLabel
                control={<Checkbox checked={herbs} onChange={handleSaladChange} name="herbs" color="primary" />}
                label="Fresh herbs"
              />
              <FormControlLabel
                control={<Checkbox checked={pepper} onChange={handleSaladChange} name="pepper" color="primary" />}
                label="Black pepper"
              />
            </FormGroup>
          </FormControl>

          <FormControl className={styles.formControl}>
            <Button
              component={Link}
              to={routes.dashboard}
              className={styles.button}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </FormControl>
        </form>
        :
        demoContent.map(row => (
          row.id === props.match.params.id
            ?
            <Table key={row.id}>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell align='right'>Ordered products</TableCell>
                  <TableCell align='right'>Products params</TableCell>
                  <TableCell align='right'>Products prices</TableCell>
                  <TableCell align='right'>Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{row.tableId}</TableCell>
                  <TableCell align='right'>
                    {row.productId.map(product => (
                      row.productId.indexOf(product) === row.productId.length - 1 ? product : product + ', '
                    ))}
                  </TableCell>
                  <TableCell align='right'>
                    {row.breakfastParams.length
                      ?
                      'Breakfast params: ' + row.breakfastParams.map(param => (
                        row.breakfastParams.indexOf(param) === 0 ? param : ' ' + param
                      ))
                      :
                      ''
                    }
                    {row.breakfastParams.length && row.pizzaParams.length ? <br /> : ''}
                    {row.pizzaParams.length
                      ?
                      'Pizza params: ' + row.pizzaParams.map(param => (
                        row.pizzaParams.indexOf(param) === 0 ? param : ' ' + param
                      ))
                      :
                      ''
                    }
                    {row.pizzaParams.length && row.saladParams.length ? <br /> : ''}
                    {row.saladParams.length
                      ?
                      'Salad params: ' + row.saladParams.map(param => (
                        row.saladParams.indexOf(param) === 0 ? param : ' ' + param
                      ))
                      :
                      ''
                    }
                  </TableCell>
                  <TableCell align='right'>
                    {row.productPrice.map(price => (
                      row.productPrice.indexOf(price) === row.productPrice.length - 1 ? price : price + ', '
                    ))}
                  </TableCell>
                  <TableCell align='right'>{row.totalPrice}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            :
            ''
        ))
      }
    </Paper>
  );
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;
