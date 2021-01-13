const cardContainer = document.querySelector(".accounts-cards-container");
const showDetails = document.querySelector("Show-Details");
const listItemUserID = document.querySelector("#userid");

const getAllAccounts = () => {
  cardContainer.innerHTML = '';
  fetch("http://localhost:9191/getAllAccounts")
  .then((response) => response.json())
  .then((data) => {
    const displayAccountDetails = function (data) {
      let html = '';
      data.forEach((acc, i) => {
        html += `
  <div class="card container" style="width: 18rem">
    <img class="card-img-top" src="/assets/images/bank.png" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Account Details: ${acc.ID}</h5>
      <p class="card-text">
          <ul class="Show-Details">
              <li id = "bank-name">${acc.bankName}</li>
              <li id = "account-num">${acc.accountNumber}</li>
              <li id = "userid">${acc.userID}</li>
              <li id = "balance">${acc.balance}€</li>
          </ul>

     </p>
      <a href="#" class="btn btn-lg btn-primary">Edit</a>
      <a href="#" class="btn btn-lg btn-primary" onclick="deleteAccount('${acc.userID}')">Delete</a>
    </div>
    </div>`;
      });
      cardContainer.innerHTML = html;
    };
    displayAccountDetails(data);
  });
};

const deleteAccount = (userID) => {
  fetch("http://localhost:9191/deleteAccountByID/" + userID, {
    method: "DELETE",
  })
  .then((res) => res.json())
  .then((data) => {
    console.log('Delete successfullly', data)
    getAllAccounts();
  });
}

getAllAccounts();