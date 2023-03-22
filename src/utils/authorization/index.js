import { isNil, isEmpty } from 'ramda';

export function getAuthToken() {
  try {
    const token = sessionStorage.getItem('auth_token');
    return token ? JSON.parse(token) : '';
  } catch (e) {
    return '';
  }
}

export function isAuthenticated() {
  return !!getAuthToken();
}

export function logout() {
  sessionStorage.removeItem('auth_token');
  window.location.reload();
}

export async function saveAuthToken(authToken) {
  if (authToken === undefined) {
    return false;
  }
  try {
    if (!isNil(authToken) && !isEmpty(authToken)) {
      await sessionStorage.setItem('auth_token', JSON.stringify(authToken));
    }
  } catch (e) {
    return false;
  }
  return true;
}
