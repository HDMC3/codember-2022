export function resolve() {
    const valids: number[] = [];
    
    for (let n = 11098; n < 98123; n++ ) {
        const nStr = n.toString();
        const match = nStr.match(/5/g);
        const ascCount = [...nStr.substring(1)].reduce((acc, curr, i) => +curr >= +nStr[i] ? acc + 1 : acc, 0)
        
        if (match && match.length >= 2 && ascCount === 4) {
            valids.push(n);
        }
    }

    return `${valids.length}-${valids[55]}`
}
