export function resolve() {
    const inputFile = Deno.readTextFileSync('mecenas.json');
    const mecenas: string[] = JSON.parse(inputFile);

    let i = 0;
    let offset = 1;
    let deleteCount = mecenas.length;
    let survivor = { idx: 0, user: mecenas[0] }
    
    while(deleteCount > 1) {
        if (mecenas[i % mecenas.length] === '') {
            i++;
            continue;
        }

        if (mecenas[(i + offset) % mecenas.length] === '') {
            offset++;
            continue;
        }

        mecenas[(i + offset) % mecenas.length] = '';
        survivor = {
            idx: i % mecenas.length,
            user: mecenas[i % mecenas.length]
        }
        i += offset+1;
        offset = 1;
        deleteCount--;
    }

    return `${survivor.user}-${survivor.idx}`;
}