import uuid from '../utils/uuid'
import eventValidator from '../validators/eventValidator'
import T from '../constants/ACTION_TYPES'
import * as navigation from './navigation'


export function updateChanges(id, data) {
  return [
    {
      type: T.EVENT_VIEW.UPDATE_DATA,
      id,
      data,
    },
    {
      type: T.EVENT_VIEW.REMOVE_STALE_ERRORS,
      id,
      errors: eventValidator(data),
    },
  ]
}

export function clearChanges(id) {
  return {
    type: T.EVENT_VIEW.CLEAR,
    id,
  }
}

export function cancelChanges(id) {
  return [
    clearChanges(id),
    navigation.start('eventList'),
  ]
}

export function submitChanges(id) {
  return (dispatch, getState) => {
    const { view } = getState()
    const data = view.event.unsavedChanges[id]
    const errors = eventValidator(data)

    if (errors) {
      dispatch({
        type: T.EVENT_VIEW.SET_ERRORS,
        id,
        errors,
      })
    }
    else {
      const newId = id == 'new' ? uuid() : id
      dispatch(navigation.start('eventEdit', {id: newId}))
      dispatch(clearChanges(id))
      dispatch({
        type: T.EVENT_DATA.UPDATE,
        id: newId,
        data,
      })
    }
  }
}
