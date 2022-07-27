//  export const exerciseOptions = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_API_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
//  }

//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//   },
// 

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '238a5366d1msh51d816c26915a15p15245ajsnbdd7be0544a8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

 
 export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
 }