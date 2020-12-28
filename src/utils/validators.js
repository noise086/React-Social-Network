export const required = (value) => {
    if (value) return undefined 
    return "Field is required"
} 
export const maxlength = (max) => (value) => {
    if  (value.length > max) return `Max length ${max} symbols`; 
    return  undefined
} 