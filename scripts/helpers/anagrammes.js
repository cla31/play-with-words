export function anagramme(wordEnter, wordsList) {
    const t = wordEnter
    const d = wordsList;
    // console.log("t", t);
    // console.log(d);
    const o = [...t].sort().join('');
    // console.log(o);
    return d.filter(m => m.length == t.length && [...m].sort().join('') == o)

}