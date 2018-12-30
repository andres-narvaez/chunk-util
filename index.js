'use-strict';

function _breakArrayChunks(completeArray, chunkSize) {
    return completeArray.reduce(_reducerChunkCallback(false, completeArray, chunkSize), []);
}

function _breakObjectChunks(completeArray, chunkSize ) {
    const keysArray = Object.keys(completeArray);

    return keysArray.reduce(_reducerChunkCallback(true, completeArray, chunkSize), []);
}

function _reducerChunkCallback(isObject, completeArray, chunkSize) {
    return function(chunksArray, item, index) {
        const chunkIndex = Math.floor( index / chunkSize );
        const chunkObject = {};

        chunkObject[item] = completeArray[item];
    
        if(!chunksArray[chunkIndex]) {
            chunksArray[chunkIndex] = [];
        }

        chunksArray[chunkIndex].push(isObject ? chunkObject : item);

        return chunksArray;
    }
}

module.exports = function buildChunks(element, chunkSize) {
    const isArray = element &&  element.constructor === Array && 'Array';
    const isObject = element &&  element.constructor === Object && 'Object';
    const isValidElement = isArray || isObject;
    const breakFunction = isValidElement && isArray ? _breakArrayChunks : _breakObjectChunks;

    return breakFunction && breakFunction.apply(this, [element, chunkSize]);
}