import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, getLoadingState, fetchFromAPI, changeStatusInAPI } from '../../../redux/tablesRedux';

const mapStateToProps = state => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (id, status) => dispatch(changeStatusInAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
