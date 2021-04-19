import EXCURSION from '../../data/Excursions'
import { CREATE_EXCURSION } from '../action/excursion'

const initialState = {
  Excursions: EXCURSION,
}

import Excursion from '../../models/Excursion'

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
        Excursions: state.Excursions.concat(newExcursion),
      }
  }
  return state
}
