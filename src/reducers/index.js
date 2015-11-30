import { combineReducers } from 'redux'


import navigation from './navigationReducer'

import documentListView from './view/documentListViewReducer'
import documentView from './view/documentViewReducer'
import documentData from './data/documentDataReducer'

import eventListView from './view/eventListViewReducer'
import eventView from './view/eventViewReducer'
import eventData from './data/eventDataReducer'

export default combineReducers({
  navigation,
  view: combineReducers({
    documentList: documentListView,
    document: documentView,
    eventList: eventListView,
    event: eventView,
  }),
  data: combineReducers({
    document: documentData,
    event: eventData,
  }),
})
