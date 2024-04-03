import axios from 'axios';


const getWeather = (location) => {
    console.log(`lookin for forcast for ${location}`)
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
    ${location}
    "?unitGroup=metric&key=MGJG6K5CSRAHZEPX6W48J7VQE&contentType=json`
    return axios.get(url)
}
export default getWeather
