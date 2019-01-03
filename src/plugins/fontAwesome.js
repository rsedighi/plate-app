import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faPlus,
  faTachometerAlt,
  faUserCircle,
  faArrowLeft,
  faSignOutAlt,
  faNewspaper,
  faCalendarCheck,
  faBell,
  faClipboardList,
  faTimes,
  faSpinner,
  faExclamationTriangle,
  faCheckCircle,
  faSave
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBars,
  faPlus,
  faTachometerAlt,
  faUserCircle,
  faArrowLeft,
  faSignOutAlt,
  faNewspaper,
  faCalendarCheck,
  faBell,
  faClipboardList,
  faTimes,
  faSpinner,
  faExclamationTriangle,
  faCheckCircle,
  faSave
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
