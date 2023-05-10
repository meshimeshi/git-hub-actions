/*
  Check the contents of a string
  argument                 return
  -------------------------------
  isEmptyString('')         true
  isEmptyString('   ')      true
  isEmptyString(null)       true
  isEmptyString(undefined)  true
  isEmptyString('string')   false

*/
export const isEmptyString = (data: string): boolean => {
  if (data === null || data === undefined) {
    return true;
  }

  if (typeof data === 'string' && data.trim().length == 0) {
    return true;
  }

  return false;
};
