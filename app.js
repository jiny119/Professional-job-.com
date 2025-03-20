// js/app.js
function completeTask(taskType) {
  const userId = firebase.auth().currentUser.uid;
  const userRef = database.ref('users/' + userId);

  userRef.once('value', (snapshot) => {
    let coins = snapshot.val().coins || 0;
    coins += 5; // Add coins for task
    userRef.update({ coins: coins });
    alert(`Task completed! You now have ${coins} coins.`);
  });
}

function completeSurvey() {
  const isSubscribed = confirm("Kya aapne YouTube channel subscribe kar liya hai?");
  if (isSubscribed) {
    completeTask('survey');
  } else {
    alert("Survey tab tak complete nahi hogi jab tak aap channel subscribe nahi karenge.");
  }
}

function playGame(gameType) {
  switch (gameType) {
    case 'game1':
      window.open('https://example.com/game1', '_blank'); // Replace with actual game URL
      break;
    case 'game2':
      window.open('https://example.com/game2', '_blank'); // Replace with actual game URL
      break;
    case 'game3':
      window.open('https://example.com/game3', '_blank'); // Replace with actual game URL
      break;
    default:
      console.log('Invalid game type');
      return;
  }
  completeTask('gaming');
}

function withdrawCoins() {
  const userId = firebase.auth().currentUser.uid;
  const userRef = database.ref('users/' + userId);
  const method = document.getElementById('withdrawal-method').value;
  const amount = parseInt(document.getElementById('withdrawal-amount').value);

  userRef.once('value', (snapshot) => {
    let coins = snapshot.val().coins || 0;

    if (coins >= amount) {
      coins -= amount;
      userRef.update({ coins: coins });

      const withdrawalRef = database.ref('withdrawals/' + userId);
      withdrawalRef.push({
        method: method,
        amount: amount,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });

      alert(`Withdrawal request successful! ${amount} coins deducted.`);
    } else {
      alert('Insufficient coins for withdrawal.');
    }
  });
}
