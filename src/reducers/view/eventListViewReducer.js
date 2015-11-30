import typeReducers from '../../utils/typeReducers'
import ACTION_TYPES from '../../constants/ACTION_TYPES'


const defaultState = ''


export default typeReducers(ACTION_TYPES.EVENT_LIST_VIEW, defaultState, {
  SET_QUERY: (state, {query}) => query,
})
