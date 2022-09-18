const generateHTML = function(teamStr) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hello Bulma!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
      <section class="section">
        <div class="container">
          <h1 class="title">
            My Team
          </h1>
        </div>
      </section>
    <div class="columns">
        <div class="column">
            ${teamStr}
        </div>
    </div>    
      </body>
    </html>`
}

const generateCard = function(arr) {
    let roleInfo;

    if (arr.title === "manager") {
        roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "engineer") {
        roleInfo = `GitHub Username: ${arr.gitHub}`
    } else if (arr.title === "intern") {
        roleInfo = `School: ${arr.school}`
    }
    return `<div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${arr.name}</p>
          <p class="subtitle is-6">`@`${arr.title}</p>
        </div>
      </div>
  
      <div class="content">
        <ul>
            <li>Employee ID: ${arr.id}</li>
            <li>Email: ${arr.email}</li>
            <li>${roleInfo}</li>
        </ul>
      </div>
    </div>
  </div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;