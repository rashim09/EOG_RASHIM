import "isomorphic-fetch";

export const  findWeatherbyId = async id => {
  // Using the create-react-app's proxy for CORS issues
  const response = await fetch(
    `https://react-assessment-api.herokuapp.com/api/weather/location/${id}/`
  );
  if (!response.ok) {
    return { error: { code: response.status } };
  }
  const json = await response.json();
  return { data: json };
};


// export  const findDroneWeatherbyId = async () => {
//   // Using the create-react-app's proxy for CORS issues
//   const response = await fetch(
//     `https://react-assessment-api.herokuapp.com/api/drone`
//   );
//   console.log(response);
//   if (!response.ok) {
//     return { error: { code: response.status } };
//   }
//   const json = await response.json();
//   console.log(json);
//   console.log('rashim in API');
//   return { payload: json };
// };
export default findWeatherbyId;
