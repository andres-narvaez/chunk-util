const buildChunks = require('./index')

const mockArray = [
    {
        "name": "name1",
        "id": 1
    },
    {
        "name": "name2",
        "id": 2
    },
    {
        "name": "name3",
        "id": 3
    },
    {
        "name": "name4",
        "id": 4
    },
    {
        "name": "name5",
        "id": 5
    },{
        "name": "name6",
        "id": 6
    },
    {
        "name": "name7",
        "id": 7
    },
    {
        "name": "name8",
        "id": 8
    },
    {
        "name": "name9",
        "id": 9
    },
    {
        "name": "name10",
        "id": 10
    }
]

const mockObject = {
    "test-1": {
        "example-1": "Property Value 1"
    },
    "test-2": {
        "example-2": "Property Value 2"
    },
    "test-3": {
        "example-3": "Property Value 3"
    },
    "test-4": {
        "example-4": "Property Value 4"
    },
    "test-5": {
        "example-5": "Property Value 5"
    }
}

const mockArrayChunks = buildChunks(mockObject, 3)

console.log(mockArrayChunks)
