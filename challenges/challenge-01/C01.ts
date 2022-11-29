export function resolve() {
    const usersInput = Deno.readTextFileSync('users.txt');

    const users = usersInput
        .replace(/\r|\n/g, '~')
        .split('~~~~')
        .map(user => user.replace(/~~/g, ' '));
    
    const result = users.reduce((acc, user) => {
        const userProps = user.split(' ')
            .map(prop => ({
                key: prop.substring(0, 3),
                value: prop.substring(4)
            }));
        
        let usr = '';
        const validAttributes = new Set(['usr', 'eme', 'psw', 'age', 'loc', 'fll'])
        for (const { key, value } of userProps) {
            validAttributes.delete(key)
            if (key === 'usr') usr = value;
        }
        
        if (validAttributes.size === 0) {
            acc.valid_users += 1;
            acc.last_user = usr;
        }
        
        return acc;
    }, { valid_users: 0, last_user: '' })

    return `${result.valid_users}:${result.last_user}`;
}
