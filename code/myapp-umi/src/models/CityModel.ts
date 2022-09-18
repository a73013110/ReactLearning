export default {
    namespace: "city",
    state: {
        cityName: "北京",
        cityId: 110100
    },
    reducers: {
        changeCity(prevState: any, action: any) {
            console.log("CityModel", action)
            return {
                ...prevState,
                cityName: action.payload.cityName,
                cityId: action.payload.cityId
            }
        }
    }
}