function generateHTML(data) {

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main class="container">
      <div class="flex-container">
        <article>
          <div class="blue-bg">
            <h3>Jared</h3>
            <h4><i class="fas fa-mug-hot"></i> Manager</h4>
          </div>
          <div class="grey-bg">
            <ul>
              <li>ID: 1</li>
              <li>
                Email:
                <a href="mailto:jared@fakemail.com">jared@fakemail.com</a>
              </li>
              <li>Office number: 1</li>
            </ul>
          </div>
        </article>
        <article>
          <div class="blue-bg">
            <h3>Alec</h3>
            <h4><i class="fas fa-glasses"></i> Engineer</h4>
          </div>
          <div class="grey-bg">
            <ul>
              <li>ID: 1</li>
              <li>
                Email:
                <a href="mailto:alec@fakemail.com">alec@fakemail.com</a>
              </li>
              <li>GitHub: <a href="https://github.com/ibealec" target="_blank">ibealec</a></li>
            </ul>
          </div>
        </article>
        <article>
          <div class="blue-bg">
            <h3>Grace</h3>
            <h4><i class="fas fa-glasses"></i> Engineer</h4>
          </div>
          <div class="grey-bg">
            <ul>
              <li>ID: 1</li>
              <li>
                Email:
                <a href="mailto:grace@fakemail.com">grace@fakemail.com</a>
              </li>
              <li>GitHub: <a href="https://github.com/gchoi2u" target="_blank">gchoi2u</a></li>
            </ul>
          </div>
        </article>
        <article>
          <div class="blue-bg">
            <h3>Tammer</h3>
            <h4><i class="fas fa-glasses"></i> Engineer</h4>
          </div>
          <div class="grey-bg">
            <ul>
              <li>ID: 1</li>
              <li>
                Email:
                <a href="mailto:tammer@fakemail.com">tammer@fakemail.com</a>
              </li>
              <li>GitHub: <a href="https://github.com/tammerg target="_blank"">tammerg</a></li>
            </ul>
          </div>
        </article>
        <article>
          <div class="blue-bg">
            <h3>John</h3>
            <h4><i class="fas fa-user-graduate"></i> Intern</h4>
          </div>
          <div class="grey-bg">
            <ul>
              <li>ID: 1</li>
              <li>
                Email:
                <a href="mailto:john@fakemail.com">john@fakemail.com</a>
              </li>
              <li>School: 2University</li>
            </ul>
          </div>
        </article>
      </div>
    </main>

    <script
      src="https://kit.fontawesome.com/7f68d95029.js"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

`;
}

module.exports = generateHTML;