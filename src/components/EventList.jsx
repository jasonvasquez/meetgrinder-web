import './EventList.less'

import React, {PropTypes} from 'react'
import * as actions from '../actions/eventListView'
import { pacomoTransformer } from '../utils/pacomo'
import Link from './Link'


function mapValue(fn) {
  return e => fn(e.target.value)
}

const EventList = ({
  id: activeId,
  query,
  events,
  onChangeQuery,
}) =>
    <div>
      <header className='header'>
        <input
          className='query'
          type="text"
          placeholder="Search..."
          value={query}
          onChange={mapValue(onChangeQuery)}
        />
      </header>
      <ul className='list'>
        {events.map(([id, data]) =>
          <li
            key={id}
            className={{
              'event-item': true,
              'event-item-active': activeId == id,
            }}
          >
            <Link
              className='event-link'
              name='eventEdit'
              options={{id}}
            >
              {data.title}
            </Link>
          </li>
        )}
        <li
          className={{
            'add-item': true,
            'add-item-active': activeId == 'new',
          }}
        >
          <Link
            className='add-link'
            name='eventEdit'
            options={{id: 'new'}}
          >
            Add Event
          </Link>
        </li>
      </ul>
    </div>

EventList.propTypes = {
  id: PropTypes.string,
  query: PropTypes.string,
  events: PropTypes.array.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
}

export default pacomoTransformer(EventList)
