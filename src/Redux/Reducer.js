import { PROGRESS, SET_DETAILS_PAGE, SET_PHOTO, SET_RESUME_DETAILS } from "./Constants";

export const progressReducer = (state = 0, action) => {
  switch (action.type) {
    case PROGRESS:
      return action.payload;

    default:
      return state;
  }
};

const initialData = {
  firstName: "First Name",
  lastName: "Lastname",
  mobile: " mobile",
  email: "email",
  dob: "dob",
  city: "city",
  password: "password",
  about: "about",
  objective: "objective",
  profile: "Job Profile",
};

export const userDetailsReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_RESUME_DETAILS:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        mobile: action.payload.mobile,
        email: action.payload.email,
        dob: action.payload.dob,
        city: action.payload.city,
        objective: action.payload.objective,
        about: action.payload.about,
        profile:action.payload.profile,
      };
    default:
      return state;
  }
};

export const setPhoto = (state = "", action)=>{
  if(action.type === SET_PHOTO)
  {
    return action.payload.photo;
  }
  return state;
}

export const setPage = (state = "BasicDetails", action) => {
  if (action.type === SET_DETAILS_PAGE) 
  {
    return action.payload;
  } 
  
  else 
  {
    return state;
  }
};
