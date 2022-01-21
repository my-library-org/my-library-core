const getFlex = ({
    flex, y, x, center, flexColumn, flexColumnReverse, flexRow, flexRowReverse, wrap
}) => flex && `
    display: flex;
    ${y && 'align-items: ' + y };
    ${x && 'justify-content: ' + x };
    ${wrap && 'flex-wrap: wrap;'};
    ${center && 'align-items: center; justify-content: center;' };

    flex-direction: ${
        flexColumn ? 'column': 
        flexColumnReverse ? 'column-reverse' : 
        flexRow ? 'row':
        flexRowReverse ? 'row-reverse' : '' };
`
export default getFlex