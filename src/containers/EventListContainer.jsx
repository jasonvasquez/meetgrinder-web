import React, {PropTypes} from 'react'
import * as actions from '../actions/eventListView'
import compose from '../utils/compose'
import OneOrTwoColumnLayout from '../components/OneOrTwoColumnLayout'
import EventList from '../components/EventList'


function listPredicate(query) {
  return (
    !query
    ? () => true
    : ([id, data]) => data.title.replace(/\s+/g, '').indexOf(query) !== -1
  )
}


export default function EventListContainer({state, dispatch, children, id}) {
  const query = state.view.eventList
  const props = {
    id,
    query,
    events: Object
      .entries(state.data.event)
      .filter(listPredicate(query)),
    onChangeQuery: compose(dispatch, actions.updateQuery),
  }

  return <OneOrTwoColumnLayout
    left={<EventList {...props} />}
    right={children}
  />
}
