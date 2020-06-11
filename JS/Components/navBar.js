class navBar {
  static init() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".sidenav");
      const instances = M.Sidenav.init(elems, {
        menuWidth: 300,
        edge: "left",
        closeOnClick: true,
        draggable: true,
      });
    });
  }

  static search() {
    document.getElementById("search").addEventListener("click", function () {
      const searchBar = document.getElementById("searchBar");
      if (searchBar.style.display == "") {
        searchBar.style.display = "inline-block";
      } else {
        searchBar.style.display = "";
      }
    });
  }

  static sideNavSearch(){
    document.getElementById("sideNavSearch").addEventListener('click', function () {
      console.log("clicked");
      const searchBar = document.getElementById("searchBar");
      if (searchBar.style.display == "") {
        searchBar.style.display = "inline-block";
      } else {
        searchBar.style.display = "";
      }

      
    });
  }
}

export default navBar;
