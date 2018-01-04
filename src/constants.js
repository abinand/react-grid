/* Enumerations and Utility methods for common functionality and configuration */

export const KEYS_Sort = {
    "default":"default",
    "name": "name",
    "priority": "priority"
}

export const KEYS_Ord = {
    "asc": 0,
    "desc": 1
}

export const REF_priority = {
    "1": "#f0b27a", // orange
    "2": "#7dcea0", // green
    "3": "#7fb3d5", // blue
    "4": "#bb8fce"  // purple
}

export const REF_sortConfig = [
    {
        id:1,
        display: "Featured",
        field: null,
        order: null
    },
    {
        id:2,
        display: "A-Z",
        field: KEYS_Sort.name,
        order: KEYS_Ord.asc
    },
    {
        id:3,
        display: "Priority",
        field: KEYS_Sort.priority,
        order: KEYS_Ord.asc
    }
]

// higher order function 
//objComparer :: String -> (String -> Comparer)
export const objComparer = key => sortOrder => {
    return (a, b) => {
        return sortOrder === KEYS_Ord.asc
                            ? a[key] < b[key]
                            : a[key] > b[key]
    }
}