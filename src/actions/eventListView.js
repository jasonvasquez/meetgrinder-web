import T from '../constants/ACTION_TYPES'


export function updateQuery(query) {
  return {
    type: T.EVENT_LIST_VIEW.SET_QUERY,
    query,
  }
}
