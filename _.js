const _ = {
    clamp(number, lower, upper){
        let lowerClampValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampValue, upper);
        return clampedValue
    },

    inRange(number, start, end){
        if(end === undefined){
            end  = start;
            start = 0;
        };
        if(start > end){
            let temp = end;
            end = start;
            start = temp
        };
        let isInRange = start <= number && number < end
        return isInRange
    },
    words(string){
        let words = sting.split(' ');
        return words
    },
    pad(string, length) {
        if (length < string.length) {
          return string
        }
        let startPaddingLength = Math.floor((length - string.length)/2)
        let endPaddingLength = (length - string.length - startPaddingLength)
        let paddedString = ' ' .repeat(startPaddingLength) + string + ' ' .repeat(endPaddingLength)
        return paddedString
      },
      has(object, key){
        let hasValue = (object[key] != undefined)
        return hasValue
      },
      invert(object){
          let invertObject = {};
          for (let key in object) {
              let originalValue = object[key];
              invertObject = {originalValue: key}
          }
          return invertObject
      },
      findKey (object, predicate) {
        for (let key in object) {
          let value = object[key]
              if (predicate(object[key])) {
                return key
              } 
        } 
      },
      drop(array, n){
          if (n === undefined) {
              let n = 1;
              return array.slice(n, array.length)
          };

          let dropArray = array.slice(n, array.length)
            return dropArray 
      },
      dropWhile (array, predicate) {
        const callback = (element, index) => {
        return !predicate(element, index, array) }
        let dropNumber = array.findIndex(callback);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray
      },
      chunk (array, size) {
        if (size === undefined) {
          let size = 1
        }
        let arrayChunks = [];
        for (let i = 0; i<array.length; i+ size) {
        let arrayChunk = array.slice(i, i+= size);
            arrayChunks.push(arrayChunk)
        } return arrayChunks;
      }
};


// Do not write or modify code below this line.
module.exports = _;