const getTweeks = async () => {
  try {
    const response = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/getAllTweets"
    );
    if (response.ok) {
      console.log("Yes Repsone Comes");
      const tweeks = await response.json();
      console.log(tweeks);
    }
  } catch (err) {
    console.log(err);
  }
};

// getTweeks();

const saveTweet = async () => {
  try {
    const response = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          tweetImage: "random image",
          tweetDescription: "random desc",
        }),
      }
    );
    if (response.ok) {
      console.log("Yes Communicated With Server");
      const res = await response.json();
      console.log(res);
    } else {
      const res = await response.json();
      console.log(res);
      alert("Request Fails");
    }
  } catch (err) {
    console.log(err);
  }
};

saveTweet();

const updateTweet = async () => {
  try {
    const response = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/update",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          tweetId: "fff",
          tweetImage: "random image",
          tweetDescription: "random desc",
        }),
      }
    );
    if (response.ok) {
      console.log("Yes Communicated With Server");
      const res = await response.json();
      console.log(res);
    } else {
      const res = await response.json();
      console.log(res);
      alert("Request Fails");
    }
  } catch (err) {
    console.log(err);
  }
};

updateTweet();

const deleteTweet = async () => {
  try {
    const response = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/delete?tweetId=4565",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("Yes Communicated With Server");
      const res = await response.json();
      console.log(res);
    } else {
      const res = await response.json();
      console.log(res);
      alert("Request Fails");
    }
  } catch (err) {
    console.log(err);
  }
};

deleteTweet();

// Set Timeout
setTimeout(() => {
  alert("Time Out");
}, 5000);

// const myPromise = new Promise((resolve, reject) => {
//   resolve(5);
// if()
//   reject("ERlkj");
// });
