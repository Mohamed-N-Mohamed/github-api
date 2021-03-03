//search input
const searchUser = document.getElementById("searchUser");

//github class
const github = new Github();

//UI class
const ui = new UI();

//seach event listener
searchUser.addEventListener("keyup", (e) => {
  //get text value
  const userValue = e.target.value;

  if (userValue !== "") {
    github.getUser(userValue).then((data) => {
      //testing
      console.log(data);
      if (data.profileData.message === "Not Found") {
        //create alert
        ui.createAlert("User not found", "alert alert-danger");
      } else {
        //create profile
        ui.createProfile(data.profileData);

        //create repos
        ui.createRepos(data.reposData);
      }
    });
  } else {
    //clear profile
    ui.clearUI();
  }
});
