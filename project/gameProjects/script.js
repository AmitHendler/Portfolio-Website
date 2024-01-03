'use strict'
document.addEventListener('DOMContentLoaded', function () {
    // Get all project elements
    const projects = document.querySelectorAll('games-projects');

    projects.forEach(project => {
      // Add a click event listener to each project
      project.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the project's preview URL
        const previewUrl = project.querySelector('a').getAttribute('href');

        // Create an iframe element
        const iframe = document.createElement('iframe');
        iframe.src = previewUrl;
        iframe.style.width = '100%';
        iframe.style.height = '50vh'; // Adjust the height as needed

        // Create a container div for the iframe
        const previewContainer = document.createElement('div');
        previewContainer.appendChild(iframe);

        // Append the container to the body
        document.body.appendChild(previewContainer);
      });
    });
  });