import { api } from '.';

export async function callBackendTest() {
	return await api.get('/api/users');
}
export async function callBackendDBTest() {
	return await api.get('/api/users/mongo');
}

// export async function fetchMovieDailyList(params) {
// 	return await api.get(
// 		'/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
// 		{
// 			params: {
// 				...params,
// 				key: import.meta.env.VITE_MOVIE_KEY,
// 			},
// 		},
// 	);
// }

// export async function fetchMovieWeeklyList(params) {
// 	return await api.get(
// 		'/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json',
// 		{
// 			params: {
// 				...params,
// 				key: import.meta.env.VITE_MOVIE_KEY,
// 			},
// 		},
// 	);
// }

export default {
	callBackendTest,
	// fetchMovieDailyList,
	// fetchMovieWeeklyList,
};
