function getResponse() {
  return new Promise(resolve => {
    setTimeout(() => {
      const index = document.querySelector('.question__description__index')?.textContent;
      const question = document.querySelector('.question__description__text')?.textContent;
      const answer = document.querySelector('.question__alternative--correct')?.textContent;
      resolve([index, question, answer]);
    }, 1000);
  });
}

async function getResponses(responses) {
  const navigationLinks = [...document.querySelectorAll('.pagination__item')];
  navigationLinks.pop(); // last link is the score page
  for (const link of navigationLinks) {
    link.click();
    const [index, question, answer] = await getResponse();
    responses += `${index}-${question}
      ${answer}
    `;
  }

  return responses;
}