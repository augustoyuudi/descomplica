await (async function getAllQuestions() {
  function getQuestion(questionCounter) {
    return new Promise(resolve => {
      setTimeout(() => {
        const question = document.querySelector('.question__description__text').textContent;
        const alternatives = document.querySelectorAll('.question__alternative');
        let fullQuestion = `${questionCounter}. ${question}\n\n`;

        const map = {
          0: 'a',
          1: 'b',
          2: 'c',
          3: 'd',
          4: 'e',
        }

        alternatives.forEach((alternative, index) => {
          fullQuestion += `${map[index]}) ${alternative.textContent}\n`;
        });

        resolve(fullQuestion);
      }, 1000);
    });
  }

  const pages = document.querySelectorAll('.pagination__item');

  const allQuestions = [];
  let questionCounter = 1;

  for (const page of pages) {
    page.click();
    const question = await getQuestion(questionCounter);
    allQuestions.push(question);
    questionCounter += 1;
  }

  await navigator.clipboard.writeText(allQuestions.join('\n\n'));
})()

(function getOneQuestion() {
  const question = document.querySelector('.question__description__text').textContent;
  const alternatives = document.querySelectorAll('.question__alternative');
  let fullQuestion = `1. ${question}\n\n`;

  const map = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
  }

  alternatives.forEach((alternative, index) => {
    fullQuestion += `${map[index]}) ${alternative.textContent}\n`;
  });

  setTimeout(async () => {
    await navigator.clipboard.writeText(fullQuestion);
    console.log('copied');
  }, 1500);
})()