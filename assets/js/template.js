const headerTemplate = document.querySelector('#headerTemplate');

headerTemplate.innerHTML = `
<div class="fixed-action-btn">
        <a class="btn-floating btn-large purple accent-4">
          <img src="./img/m_logo.png" alt="" style="width: 50px; height: auto; padding-top: 5%;">
        </a>
        <ul>
          <li><a class="btn-floating purple lighten-3 tooltipped" data-position="bottom" data-tooltip="Template"><i class="fa-solid fa-window-restore"></i></a></li>
          <li><a class="btn-floating purple lighten-4 tooltipped" data-position="bottom" data-tooltip="Donazioni"><i class="fa-solid fa-piggy-bank" ></i></a></li>
          <li><a class="btn-floating purple accent-1 tooltipped" data-position="bottom" data-tooltip="Contatti"><i class="fa-solid fa-address-book"></i></a></li>
          <li><a class="btn-floating purple accent-2 tooltipped" data-position="bottom" data-tooltip="Progetti"><i class="fa-solid fa-bars-progress"></i></a></li>
          <li><a class="btn-floating purple accent-3 tooltipped" data-position="bottom" data-tooltip="Su di noi"><i class="fa-solid fa-users-viewfinder"></i></a></li>
        </ul>
</div>`;

const footerTemplate = document.querySelector('#footerTemplate');

footerTemplate.innerHTML = `
<footer class="page-footer deep-purple darken-3">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright indigo darken-4">
        <div class="container">
        © 2023 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
</footer>
`;