export const categories = [
    {
        value: 'default',
        name: 'Default'
    },
    {
        value: '4',
        name: 'Apartment'
    },
    {
        value: '16',
        name: 'Townhouse'
    },
    {
        value: '3',
        name: 'Villa'
    },
    {
        value: '19',
        name: 'Villa Compound'
    },
    {
        value: '18',
        name: 'Penthouse'
    },
    {
        value: '21',
        name: 'Hotel Apartment'
    },
    {
        value: '12',
        name: 'Residential Floor'
    },
    {
        value: '14',
        name: 'Residential Plot'
    },
    {
        value: '17',
        name: 'Residential Building'
    },
]
export const beds = ['default', 0, 1, 2, 3, 4, 5, 6, 7, 8]
export const baths = ['default', 1, 2, 3, 4, 5, 6]


export const utilsRoute = (values) => {
    let queries = ''

    const formattedKeys = Object.keys(values)
    formattedKeys.forEach(key => {
        queries += `${key}=${values[key]}&`
    })   

    return `${formattedKeys.length > 0 ? '&' : ''}${queries.slice(0, -1)}`
}


export const utilsRoute2 = (values) => {
    let queries = ''
    const formattedKeys = Object.keys(values)
    formattedKeys.forEach(key => {
        if(values[key] !== '' && values[key] !== 'default') {
            queries += `${key}=${values[key]}&`
        }
    })   
    return queries

}



export const fetcher = async(queries, isClient) => {
    if(isClient) {
        const res = await fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&hitsPerPage=10&page=0&lang=en&sort=city-level-score${queries}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "bayut.p.rapidapi.com",
                "x-rapidapi-key": "7bef28009dmshedc105df6814739p15d209jsn096ca5e8e8f0"
            }
        })
        const data = await res.json()
        return data.hits
    } 
}


export const utilsValues = (values, query, reset) => {
    const formattedValues = Object.keys(values)
    const newObj = {}
    formattedValues.forEach(val => {
        newObj[val] = reset ? val === 'priceMax' ? '' : 'default' :
                    val === 'priceMax' ?  query[val] || '' :  query[val] || 'default'
    })

    return newObj
}



