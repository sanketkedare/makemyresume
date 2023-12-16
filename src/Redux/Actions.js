/*eslint-disable*/

import { SET_RESUME_DETAILS, PROGRESS,SET_DETAILS_PAGE, SET_PHOTO } from "./Constants";

export const progress = (Percentage) => {
  return {
    type: PROGRESS,
    payload: Percentage,
  };
};

export const userDetails = (data) => {
  return {
    type: SET_RESUME_DETAILS,
    payload: data,
  };
};

export const setMyPhoto = (photo) =>{
  return {
    type : SET_PHOTO,
    payload:photo
  }
}

export const fillDetailsOf = (page) =>{
  return {
    type:SET_DETAILS_PAGE,
    payload: page,
  }
}