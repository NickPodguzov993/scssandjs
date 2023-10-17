import  '/style.scss'

const encode = input => [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap(x => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, x => `${(+x ? '.' : '-')}${x.length}`)


const decode = input => {
    const chunks = input.split(/([-\.])(\d+)/).slice(1);

    let result = '';
    let index = 0;

    for (let i = 0; i < chunks.length; i += 2) {
        const sign = chunks[i] === '.' ? 1 : -1;
        const length = parseInt(chunks[i + 1]);

        const charCode = Math.floor(index / 2);
        const char = String.fromCharCode(charCode);

        result += char.repeat(length * sign);

        index += length * 2;
    }

    return result;
};
