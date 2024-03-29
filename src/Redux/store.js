import { combineReducers, createStore } from "redux";
import {
  certificatesDetailsReducer,
  educationDetailsReducer,
  experienceDetailsReducer,
  intenshipDetailsReducer,
  languagesDetailsReducer,
  progressReducer,
  projectsDetailsReducer,
  seTemplateReducer,
  setPhoto,
  skillsDetailsReducer,
  socialLinksDetailsReducer,
  userDetailsReducer,
} from "./Reducer";

const rootReducer = combineReducers({
  basic: userDetailsReducer,
  education: educationDetailsReducer,
  skills: skillsDetailsReducer,
  Projects: projectsDetailsReducer,
  Experience: experienceDetailsReducer,
  InternShip: intenshipDetailsReducer,
  Certificates: certificatesDetailsReducer,
  Languages: languagesDetailsReducer,
  SocialLinks: socialLinksDetailsReducer,
  Progress: progressReducer,
  Photo: setPhoto,
  Template: seTemplateReducer,
});

const store = createStore(rootReducer);

export default store;
