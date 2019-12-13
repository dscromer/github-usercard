/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/dscromer')
  .then((res) => {
    console.log(res);
    const cardSection = document.querySelector('.cards');
    cardSection.appendChild(newCard(res));
  })
  .catch((err) => {
    console.log(`You hit an error: ${err}`);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach((user) => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      const cardSection = document.querySelector('.cards');
      cardSection.appendChild(newCard(res));
    })
    .catch((err) => {
      console.log(`You hit an error: ${err}`);
    });
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function newCard(user) {
  const card = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUser = document.createElement('p');
  const cardLoc = document.createElement('p');
  const cardProf = document.createElement('p');
  const cardFollower = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUser.classList.add('username');

  cardImage.src = user.data.avatar_url;
  cardName.textContent = user.data.name;
  cardUser.textContent = user.data.login;
  cardLoc.textContent = `Location: ${user.data.location}`;
  cardProf.textContent = `Profile: ${user.data.html_url}`;
  cardFollower.textContent = `Followers: ${user.data.followers}`;
  cardFollowing.textContent = `Following: ${user.data.following}`;
  cardBio.textContent = `Bio: ${user.data.bio}`;

  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUser);
  cardInfo.appendChild(cardLoc);
  cardInfo.appendChild(cardProf);
  cardInfo.appendChild(cardFollower);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
  

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// data:
// avatar_url: "https://avatars0.githubusercontent.com/u/55195593?v=4"
// bio: "Full Stack Web Dev student at Lambda School"
// blog: ""
// company: null
// created_at: "2019-09-11T13:32:05Z"
// email: null
// events_url: "https://api.github.com/users/dscromer/events{/privacy}"
// followers: 5
// followers_url: "https://api.github.com/users/dscromer/followers"
// following: 5
// following_url: "https://api.github.com/users/dscromer/following{/other_user}"
// gists_url: "https://api.github.com/users/dscromer/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/dscromer"
// id: 55195593
// location: null
// login: "dscromer"
// name: "Dalton Cromer"
// node_id: "MDQ6VXNlcjU1MTk1NTkz"
// organizations_url: "https://api.github.com/users/dscromer/orgs"
// public_gists: 0
// public_repos: 21
// received_events_url: "https://api.github.com/users/dscromer/received_events"
// repos_url: "https://api.github.com/users/dscromer/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/dscromer/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/dscromer/subscriptions"
// type: "User"
// updated_at: "2019-12-13T00:26:45Z"
// url: "https://api.github.com/users/dscromer"