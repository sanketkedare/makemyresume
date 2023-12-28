/*eslint-disable*/

import {
  SET_RESUME_DETAILS,
  PROGRESS,
  SET_PHOTO,
  SET_EDUCATION_DETAILS,
  SET_SKILLS,
  SET_PROJECTS,
  SET_EXPERIENCE_DETAILS,
  SET_INTENSHIP_DETAILS,
  SET_CERTIFICATES,
  SET_LANGUAGES,
  SET_SOCIAL_LINKS,
} from "./Constants";

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

export const educationDetails = (data) => {
  return {
    type: SET_EDUCATION_DETAILS,
    payload: data,
  };
};

export const skillsDetails = (skills) => {
  return {
    type: SET_SKILLS,
    payload: skills,
  };
};

export const projectsDetails = (data) => {
  return {
    type: SET_PROJECTS,
    payload: data,
  };
};

export const experienceDetails = (data) => {
  return {
    type: SET_EXPERIENCE_DETAILS,
    payload: data,
  };
};

export const intenshipDetails = (data) => {
  return {
    type: SET_INTENSHIP_DETAILS,
    payload: data,
  };
};

export const certificatesDetails = (data) => {
  return {
    type: SET_CERTIFICATES,
    payload: data,
  };
};

export const languagesDetails = (data) => {
  return {
    type: SET_LANGUAGES,
    payload: data,
  };
};

export const socialLinksDetails = (data) => {
  return {
    type: SET_SOCIAL_LINKS,
    payload: data,
  };
};

export const setMyPhoto = (photo) => {
  return {
    type: SET_PHOTO,
    payload: photo,
  };
};
