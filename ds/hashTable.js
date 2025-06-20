class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;      
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = []
      this.data[address].push([key, value])
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if(currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        console.log(currentBucket[i])
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }

    return undefined
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        valuesArray.push(this.data[i][0][1])
      }
    }

    return valuesArray;
  }

}

const myHashTable = new HashTable(3);
console.log(myHashTable._hash("grape"))

myHashTable.set("grapes", 1000)
myHashTable.set("apple", 54)

console.log(myHashTable.get('grapes'))

console.log(myHashTable.keys())
console.log(myHashTable.values())

console.log(myHashTable)
