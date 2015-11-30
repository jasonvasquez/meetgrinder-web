import React, {PropTypes} from 'react'
import * as actions from '../actions/eventView'
import compose from '../utils/compose'
import partial from '../utils/partial'
import EventForm from '../components/EventForm'


export default function EventContainer({state, dispatch, id}) {
  const errors = state.view.event.saveErrors[id]
  const viewData = state.view.event.unsavedChanges[id]
  const data =
    viewData ||
    state.data.event[id] ||
    (id == 'new' && {})
  const props = {
    data,
    errors,
    onUpdate: compose(dispatch, partial(actions.updateChanges, id)),
    onCancel: compose(dispatch, partial(actions.cancelChanges, id)),
    onSubmit:
      viewData && !errors
      ? compose(dispatch, partial(actions.submitChanges, id))
      : null,
  }

  return !data ? <div>Not Found</div> : <EventForm {...props} />
}
