let TitleTypes  = {
    type1: "",
    type2: '',
    type3: '',
}
 
 const changeTitleTypes = (titleTypes = false) => {
    if(titleTypes) TitleTypes = titleTypes
 }

export { TitleTypes, changeTitleTypes}