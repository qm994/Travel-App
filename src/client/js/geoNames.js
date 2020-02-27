//POST form data to the server,
// make a call from the server so there is no need to set up the proxy server
postFormData = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json();
};

module.exports = {
    postFormData
};