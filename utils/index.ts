export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'f34b24c430mshbfd3e24692541c1p19006cjsn6f78477be64a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}