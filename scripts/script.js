const cardContainer = document.querySelector(".container");
const showDetails = document.querySelector("Show-Details");
const btnDelete = document.querySelector(".btn-delete");
const listItemUserID = document.querySelector("#userid");

fetch("http://localhost:9191/getAllAccounts")
  .then((response) => response.json())
  .then((data) => {
    const displayAccountDetails = function (data) {
      data.forEach((acc, i) => {
        const html = `
  <div class="card container" style="width: 18rem">
    <img class="card-img-top" src="/assets/images/bank.png" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Account${i + 1} Details:</h5>
      <p class="card-text">
          <ul class="Show-Details">
              <li id = "bank-name">${acc.bankName}</li>
              <li id = "account-num">${acc.accountNumber}</li>
              <li id = "userid">${acc.userID}</li>
              <li id = "balance">${acc.balance}€</li>
          </ul>

     </p>
      <a href="#" class="btn btn-lg btn-primary">Edit</a>
      <a href="#" class="btn btn-lg btn-primary">Delete</a>
    </div>`;
        cardContainer.insertAdjacentHTML("beforebegin", html);
      });
    };
    displayAccountDetails(data);
  });

btnDelete.addEventListener("click", function () {
  const id = listItemUserID.innerText;
  console.log(id);
  fetch("http://localhost:9191/getAllAccounts" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

//   const index = data.findIndex((acc) => acc.userID === id);
//   data.splice(index, 1);
