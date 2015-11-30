import './ApplicationLayout.less'

import React, {PropTypes} from 'react'
import { pacomoTransformer } from '../utils/pacomo'
import Link from './Link'


const ApplicationLayout = ({
  children,
  locationName,
}) =>
  <div>
    <nav className='navbar'>
      <Link
        name='documentList'
        className={{
          'link': true,
          'link-active': locationName == 'documentList' || locationName == 'documentEdit',
        }}
      >
        Documents
      </Link>
      <Link
        name='eventList'
        className={{
          'link': true,
          'link-active': locationName == 'eventList' || locationName == 'eventEdit',
        }}
      >
        Events
      </Link>
    </nav>
    <main className='content'>
      {children}
    </main>
  </div>

ApplicationLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locationName: PropTypes.string,
}

export default pacomoTransformer(ApplicationLayout)
