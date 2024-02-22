const addDataToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const removeDataFromLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}

const getDataFromLocalStorage = (key: string) => {
    const result = localStorage.getItem(key)!
    if (result) {
        return JSON.parse(result)
    }
    return null
}

export {addDataToLocalStorage, removeDataFromLocalStorage, getDataFromLocalStorage}