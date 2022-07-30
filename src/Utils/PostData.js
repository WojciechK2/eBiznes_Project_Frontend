export function postData(url) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
}

//create separate one with credentials included