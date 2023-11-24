/*function selectMenuOption(childIndex) {
  let headerMenu = document.getElementById("headerMenu");
  let ul = headerMenu.querySelector("ul");
  let nChild = ul.querySelector(`li:nth-child(${childIndex}) a`);
  let activeChild = ul.querySelector(".active");
  if (activeChild) activeChild.classList.remove("active");
  if (nChild.classList === undefined) nChild.className = "active";
  else nChild.classList.add("active");
}
*/
function render(menuItems, container) {
  let result = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="../newReport/newReport.html">
                    <img id="proyectLogo" src="../../assets/images/logo.png" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerMenu" aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="headerMenu">
                    <ul class="navbar-nav">
                        ${menuItems
                        .map((item) => {
                            return `
                            <li class="nav-item">
                                <a href="${item.href}" class="nav-link ${
                            item.selected ? "active" : ""
                            }" aria-current="page" href="#">${item.name}</a>
                            </li>`;
                        })
                        .join("")}
                    </ul>
                </div>
                <div class="btn-group dropstart" id="login-out-container">
                    <i id="userAccountIcon" class="bi bi-person-circle" type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul class="dropdown-menu text-center mt-1">
                        <li><button type="button" id="login-out-button">Cerrar sesión</button></li>
                    </ul>
                </div>
            </div>
          </nav>
    `;
  container.innerHTML = result;
  container.id = "customHeader";
}

const HeaderComponent = {
  //selectMenuOption: selectMenuOption,
  render: render
};

export default HeaderComponent;
