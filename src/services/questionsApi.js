const URL_QUESTIONS = 'https://opentdb.com/api.php?amount=';

async function questionsApi(quantity) {
  const requiriment = await fetch(`${URL_QUESTIONS}${quantity}`)
    .then((response) => response.json());
  return requiriment;
}

export default questionsApi;