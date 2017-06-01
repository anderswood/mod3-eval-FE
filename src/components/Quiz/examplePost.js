fetch('/api/users/new',
    {
      method: 'POST',
      body: JSON.stringify({name: name}),
      headers: { 'Content-Type':'application/json' },
    })
    .then(response => response.json())
    .catch(error => error.json())
