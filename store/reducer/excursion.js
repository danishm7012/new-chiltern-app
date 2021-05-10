import { CREATE_EXCURSION, FILTER_EXCURSION, UPDATE_EXCURSIONS } from '../action/excursion'

import EXCURSION from '../../data/Excursions'
import Excursion from '../../models/Excursion'

const initialState = {
  availableExcursions: EXCURSION,
  filterExcursions: EXCURSION,
  
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_EXCURSION:
      const newExcursion = new Excursion(
        action.excursionData.id,

        action.excursionData.title,

        action.excursionData.price
      )
      return {
        ...state,
        availableExcursions: state.availableExcursions.concat(newExcursion),
      }
      case FILTER_EXCURSION:
            return {
              
              ...state,
              filterExcursions: state.availableExcursions.filter(excursion=>(excursion.name===action.filter.origin|| excursion.price===action.filter.value || excursion.fin === action.filter.destination )),
            
            }
     
  }
  
  return state
}
