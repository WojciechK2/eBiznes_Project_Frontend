export async function fetchDataWithCredentials(url) {

    const init = {
        credentials: "include"
    }

    try {
        return await fetch(url,init)
            .then((response) => response.json())
    } catch (error) {
        return error
    }
}