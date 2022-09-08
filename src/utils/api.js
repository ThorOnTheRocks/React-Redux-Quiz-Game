const apiUrl = 'https://opentdb.com/api.php?amount=10';

export const fetchTriviaApi = () => {
  return fetch(apiUrl)
    .then(res => res.json())
    .then(questions => questions.results)
    .catch(err => Promise.reject(err))
}