// let f = structuredClone({ a: 34, b: { c: { f: [1, { a: 6 }, [1, 2, 3]], g: 56 } } })
let f = JSON.parse(JSON.stringify({ a: 34, b: { c: { f: [1, { a: 6 }, [1, 2, 3]], g: 56 } } }))
let h = Object.assign({}, f)\