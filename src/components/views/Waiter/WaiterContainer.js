import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, getLoadingState, fetchFromAPI } from '../../../redux/tablesRedux';

const mapStateToProps = state => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
