let TextTypes  = {
    type1: '',
    type2: '',
    type3: '',
}
 
 const changeTextTypes = (textTypes = false) => {
    if(textTypes) TextTypes = textTypes
 }

export { TextTypes, changeTextTypes}