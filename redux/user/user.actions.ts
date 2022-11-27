import { userActionTypes } from './user.types';

export const setPasswordGuessed = (passwordGuessed: boolean) => ({
  type: userActionTypes.SET_PASSWORD_GUESSED,
  payload: passwordGuessed
})
