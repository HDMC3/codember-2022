export function resolve() {
    const inputFile = Deno.readTextFileSync('colors.txt');
    const colors: string[] = JSON.parse(inputFile.replace(/'/g, '\"'))

    const zebras: string[][] = [
        [colors[0], colors[1]]
    ];

    let max_zebra: string[] = [];
    
    for (let i = 2; i < colors.length; i++) {
        const zebra = zebras[zebras.length - 1];
        const lastZebraColor = zebra[zebra.length - 1];

        if (lastZebraColor !== colors[i] && ( zebra.length === 1 || colors[i] === zebra[zebra.length - 2] ) ){
            zebra.push(colors[i])
            continue
        }

        if ( ( zebra.length === 1 && lastZebraColor === colors[i] ) || ( lastZebraColor !== colors[i] && colors[i] !== zebra[zebra.length - 2] ) ) {
            max_zebra = zebra.length > max_zebra.length ? [...zebra] : max_zebra;
            if (i+1 > colors.length - 1 || colors[i+1] !== lastZebraColor) {
                zebras.push([colors[i]])
                continue
            }

            zebras.push([lastZebraColor, colors[i]]);
            continue;
        }

        if (lastZebraColor === colors[i]) {
            max_zebra = zebra.length > max_zebra.length ? [...zebra] : max_zebra;
            zebras.push([ colors[i] ])
            continue
        }
        
    }

    return `${max_zebra.length}@${max_zebra.pop()}`
}
