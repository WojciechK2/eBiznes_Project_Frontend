export function fetchData(url) {
    try {
        return fetch(url)
            .then((response) => response.json())
    } catch (error){
        return error
    }
}