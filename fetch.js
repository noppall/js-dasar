const getRandomUsers = n => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
  fetchRandomUsers.then(data => {
    data.json().then(randomUsers => {
      console.log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach(user => {
        const {gender, email} = user;
        log(`${gender} - ${email}`);
      });
    })
  });
}

getRandomUsers(100);
