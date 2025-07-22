async function fetchAppsAndInsert() {
  try {
    const response = await fetch('Apps.json');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const apps = await response.json();

    const appsGrid = document.querySelector('.apps-grid');
    appsGrid.innerHTML = ''; // Clear existing content if any

    apps.forEach(app => {
      const appCard = document.createElement('div');
      appCard.classList.add('app-card');

      appCard.innerHTML = `
        <div class="app-image">
          <img src="${app.image}" alt="${app.title}">
        </div>
        <div class="app-content">
          <h3>${app.title}</h3>
          <p>${app.description}</p>
          <a href="${app.link}" class="btn-run"><i class="bx bx-${app.btnIcon}"></i> ${app.btnText}</a>
        </div>
      `;

      appsGrid.appendChild(appCard);
    });

  } catch (error) {
    console.error('Error fetching or inserting apps:', error);
  }
}

// Call the function to fetch and insert apps
fetchAppsAndInsert();
