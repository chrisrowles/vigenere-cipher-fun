import { alphabet } from './config.js'

const map = alphabet.slice(-26).split('')

const tabulaRecta = {
    build() {
        const schema = this.schema()
        
        for (const [row, i] in map) {
            const shifted = this.shift(map, i)
            for (const [col, j] in map) {
                schema[row][col] = shifted[j]
            }
        }
        
        return schema
    },
    
    schema() {
        const col = {}
        
        for (const l in map) {
            const row = {}
            for (const s in map) {
                row[s] = ''
            }
            col[l] = row
        }
        
        return col
    },
    
    shift(arr, num) {
        const copy = [...arr]
        
        for (let i = 0; i < num; ++i) {
            copy.push(copy.shift())
        }
        
        return copy
    }
}

console.log(tabulaRecta.build())