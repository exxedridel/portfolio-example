// import getData from '@utils/getData.js';
import heved from '@images/heved.jpg';
import whatsapp from '@images/whatsapp.png';
import gmail from '@images/gmail.png';
import linkedin from '@images/linkedin.png';
import github from '@images/github.png';

const Template = async () => {
  // const data = await getData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src=${heved} alt="heved">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40.5" />
            </svg>
          </div>
          <p class="card_value">Heved Ríos</p>
          <p class="card_title">Frontend developer</p>
        </div>
        <div class="card_userdata">
          <p>Universidad Tecnológica Latinoamericana</p>
        </div>
        <div class="card_social">
          <div class="phone">
            <a href="https://wa.me/524777861996">
              <img src=${whatsapp} />
            </a>
            <p>Phone</p>
          </div>
          <div class="e-mail">
            <a href="mailto:hevedrios@gmail.com">
              <img src=${gmail} />
            </a>
            <p>E-mail</p>
          </div>
          <div class="profile">
            <a href="https://www.linkedin.com/in/heved-oscar-rios-delgado-20a48a1ba/">
              <img src=${linkedin} />
            </a>
            <p>Profile</p>
          </div>
          <div class="portfolio">
            <a href="https://github.com/exxedridel">
              <img src=${github} />
            </a>
            <p>Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;