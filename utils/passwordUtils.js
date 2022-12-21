import redirectTo from '../utils/MenuRedirectUtils';

export const shouldPass = ({ answer, password, nextLevel }) => {
  if (answer === password) {
    redirectTo(nextLevel);
  } else {
    window.alert("WRONG!!!!");
  }
};
