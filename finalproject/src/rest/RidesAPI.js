const RIDES_ENDPOINT = 'https://631d211d789612cd07a69e37.mockapi.io/v1/Rides';

class RidesAPI {
    get = async () => {
        try {
        const resp = await fetch(RIDES_ENDPOINT);
        const data = await resp.json();
        return data;
        } catch(e) {
            console.log("Oops, looks like fecthRides had an issue", e);
        }
    }

    pub = async(ride) => {
        const resp = await fetch(`${RIDES_ENDPOINT}/${rides._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ride)
        });
    }
}