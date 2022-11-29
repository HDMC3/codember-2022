export function resolve() {   
    const encryptMessage = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'; 
    const codes = 'abcdefghijklmnopqrstuvwxyz'.split('').map(v => v.charCodeAt(0).toString())
    
    let asciiCode = '';
    const asciiCodesMessage = encryptMessage.split('').reduce<number[]>((acc, curr) => {
        if (curr === ' ') return acc.concat([32]);
    
        asciiCode += curr;
        if (codes.includes(asciiCode)) {
            acc.push(Number(asciiCode));
            asciiCode = '';
        }
    
        return acc
    }, []);
    
    const message = String.fromCharCode(...asciiCodesMessage);

    return message;
}
