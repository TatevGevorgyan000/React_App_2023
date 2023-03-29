 export const validation = (value, options) => {
    let result = true;
    if(options.required) {
      result = result && value.trim() !== ''
    }
    if(options.stratWithUpperCase) {
      result = result && !!value.match(/^[A-Z]/g)
    }
    if(options.noNumber) {
      result = result && !value.match(/\d/g)
    }
    if(options.minLength) {
      result = result && value.length >= options.minLength
    }
    return result
  }