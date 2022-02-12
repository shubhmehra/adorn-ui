const activeLinkCheck = (componentName) =>
  window.location.pathname.includes(componentName) ? "active" : "";

const addNav = () => {
  document.getElementById("main_nav").innerHTML += `
    <div class="navbar-container">
        <a href="/index.html" class="navbar-title">Adorn Box</a>
        <ul class="navbar-links">
            <li><a class="navbar-link" href="/components/alert/alert.html">Docs</a></li>
            <li><a class="navbar-link" href="https://github.com/shubhmehra/adorn-ui">Github</a></li>
        </ul>
    </div>
    <div class="component-links-container">
        <ul class="component-links-list">
            <li class="${activeLinkCheck(
              "alert"
            )}"><a href="/components/alert/alert.html">Alert</a></li>
            <li class="${activeLinkCheck(
              "avatar"
            )}"><a href="/components/avatar/avatar.html">Avatar</a></li>
            <li class="${activeLinkCheck("badge")}"><a href="">Badges</a></li>
            <li class="${activeLinkCheck(
              "button"
            )}"><a href="/components/button/button.html">Buttons</a></li>
            <li class="${activeLinkCheck("card")}"><a href="">Card</a></li>
            <li class="${activeLinkCheck("image")}"><a href="">Images</a></li>
            <li class="${activeLinkCheck("input")}"><a href="">Input</a></li>
            <li class="${activeLinkCheck("list")}"><a href="">List</a></li>
            <li class="${activeLinkCheck("toast")}"><a href="">Toast</a></li>
        </ul>
    </div>
`;
};

addNav();
