export class chunkUtil {
    _breakArray(completeArray, chunkSize) {
        return completeArray.reduce(this._reducerCallback(false, completeArray, chunkSize), [])
    }

    _breakObject(completeArray, chunkSize ) {
        const keysArray = Object.keys(completeArray)

        return keysArray.reduce(this._reducerCallback(true, completeArray, chunkSize), [])
    }

    _reducerCallback(isObject, completeArray, chunkSize) {
        return function(chunksArray, item, index) {
            const chunkIndex = Math.floor( index / chunkSize )
            const chunkObject = {}
            chunkObject[item] = completeArray[item]
        
            if(!chunksArray[chunkIndex]) {
                chunksArray[chunkIndex] = []
            }

            chunksArray[chunkIndex].push(isObject ? chunkObject : item)
            return chunksArray
        }
    }

    buildChunks(element, chunkSize) {
        const isArray = element &&  element.constructor === Array && 'Array'
        const isObject = element &&  element.constructor === Object && 'Object'
        const breakFunction = this[`_break${isArray || isObject}`]

        return breakFunction && breakFunction.apply(this, [element, chunkSize])
    }
}