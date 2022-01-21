const getGrid = ({
    grid, x, y, center, gap, cols, rows, areas
}) => grid && `
    display: grid;
    ${y && 'align-items: ' + y };
    ${x && 'justify-items: ' + x };
    ${center && 'align-items: center; justify-items: center;' };

    ${gap && 'grid-gap: ' + gap };
    ${cols ? 'grid-template-columns:' + cols : 'grid-template-columns: repeat(2, 1fr)'};
    ${rows && 'grid-template-rows: ' + rows };
    ${areas && 'grid-template-areas: ' + areas};
`
export default getGrid