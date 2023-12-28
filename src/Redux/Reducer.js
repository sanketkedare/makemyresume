import {
  PROGRESS,
  SET_CERTIFICATES,
  SET_EDUCATION_DETAILS,
  SET_EXPERIENCE_DETAILS,
  SET_INTENSHIP_DETAILS,
  SET_LANGUAGES,
  SET_PHOTO,
  SET_PROJECTS,
  SET_RESUME_DETAILS,
  SET_SKILLS,
  SET_SOCIAL_LINKS,
} from "./Constants";

export const progressReducer = (state = 0, action) => {
  switch (action.type) {
    case PROGRESS:
      return action.payload;

    default:
      return state;
  }
};

const initialData = {
  name: "",
  mobile: "",
  email: "",
  dob: "",
  city: "",
  about: "",
  objective: "",
  job: "",
};

export const userDetailsReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_RESUME_DETAILS:
      return {
        ...state,
        name: action.payload.name,
        mobile: action.payload.mobile,
        email: action.payload.email,
        dob: action.payload.dob,
        city: action.payload.city,
        objective: action.payload.objective,
        about: action.payload.about,
        job: action.payload.job,
      };
    default:
      return state;
  }
};

export const educationDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_EDUCATION_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export const skillsDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SKILLS:
      return action.payload;
    default:
      return state;
  }
};

export const projectsDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};

export const experienceDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_EXPERIENCE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export const intenshipDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_INTENSHIP_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export const certificatesDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CERTIFICATES:
      return action.payload;
    default:
      return state;
  }
};

export const languagesDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_LANGUAGES:
      return action.payload;
    default:
      return state;
  }
};

const socialLiks = {
  linkedin: "",
  github: "",
  portfollio: "",
  other: "",
};

export const socialLinksDetailsReducer = (state = socialLiks, action) => {
  switch (action.type) {
    case SET_SOCIAL_LINKS:
      return {
        ...state,
        linkedin: action.payload.linkedin,
        github: action.payload.github,
        portfollio: action.payload.portfollio,
        other: action.payload.other,
      };
    default:
      return state;
  }
};

export const setPhoto = (state = "", action) => {
  if (action.type === SET_PHOTO) {
    return action.payload.photo;
  }
  return state;
};
