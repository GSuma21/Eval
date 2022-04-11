import {
    ADD_EMPLOYEE,
    EDIT_EMPLOYEE,
    SET_VISIBILITY_FILTER,
    TOGGLE_ACTIVE,
  } from './actionType'
  
  /***** other constants ******/
  export const VISIBILITY_FILTERS = {
    ALL: 'All',
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
  }
  
  /***** action creators ******/
  export const addEmployee = content => ({
    type: ADD_EMPLOYEE,
    payload: {
      content,
    },
  })
  
  export const editEmployee = content => ({
    type: EDIT_EMPLOYEE,
    payload: {
      content,
    },
  })
  
  export function toggleActive(index) {
    return { type: TOGGLE_ACTIVE, index }
  }
  
  export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    payload: { filter },
  })
  