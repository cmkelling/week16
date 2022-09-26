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

    put = async(ride) => {
        try{
            const resp = await fetch(`${RIDES_ENDPOINT}/${Rides._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ride)
            });
            return await resp.json()
        } catch(e) {
            console.log('Oops, Looks like updatingRides had an issue.', e)
        };
    }
}

export const ridesAPI = new RidesAPI;