function getResponse() {
  return new Promise(resolve => {
    setTimeout(() => {
      const questionIndex = document.querySelector('.question__description__index')?.textContent;
      const question = document.querySelector('.question__description__text')?.textContent;
      const answers = [...document.querySelectorAll('.question__alternative')];
      const answerIndex = answers.findIndex((question) => question.classList.contains('question__alternative--correct'));
      const answer = answers[answerIndex]?.textContent;
      resolve([questionIndex, question, answer, answerIndex]);
    }, 1000);
  });
}

await (async function getResponses(responses = '') {
  const navigationLinks = [...document.querySelectorAll('.pagination__item')];
  navigationLinks.pop(); // last link is the score page

  const indexes = ['A', 'B', 'C', 'D', 'E'];

  for (const link of navigationLinks) {
    link.click();
    const [questionIndex, question, answer, answerIndex] = await getResponse();
    responses += `${questionIndex.trim()}. ${question.trim()}\n\t${indexes[answerIndex]} - ${answer.trim()}\n`;
  }

  await navigator.clipboard.writeText(responses);
})()