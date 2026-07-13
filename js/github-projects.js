const excludedRepos = [
  'portfolio',
  'vision-ar'
];

const githubUser = 'tobiasngodoy-gif';
const githubCacheKey = 'githubPublicReposCache';
const githubCacheDateKey = 'githubPublicReposCacheDate';
const cacheDurationMs = 1000 * 60 * 60;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-AR', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
};

const createRepoCard = (repo) => {
  const topics = repo.topics?.length ? repo.topics.map(topic => `<span class="github-topic">${topic}</span>`).join('') : '';
  return `
    <article class="github-card">
      <h4>${repo.name}</h4>
      <p>${repo.description || 'Sin descripción disponible.'}</p>
      <div class="github-meta">${repo.language ? `<span>${repo.language}</span>` : ''}<span>Actualizado ${formatDate(repo.updated_at)}</span></div>
      ${topics ? `<div class="github-topics">${topics}</div>` : ''}
      <div class="github-actions"><a class="btn outline" href="${repo.html_url}" target="_blank" rel="noopener">Ver GitHub</a></div>
    </article>
  `;
};

const showState = (message) => {
  const stateEl = document.getElementById('github-state');
  if (stateEl) stateEl.textContent = message;
};

const renderRepos = (repos) => {
  const grid = document.getElementById('github-grid');
  const actions = document.getElementById('github-actions');
  if (!grid || !actions) return;

  grid.innerHTML = repos.slice(0, 6).map(createRepoCard).join('');

  if (repos.length > 6) {
    actions.innerHTML = '<button class="btn outline" id="github-load-more">Ver más proyectos</button>';
    document.getElementById('github-load-more').addEventListener('click', () => {
      grid.innerHTML = repos.map(createRepoCard).join('');
      actions.innerHTML = '';
    });
  } else {
    actions.innerHTML = '';
  }

  showState(`${repos.length} proyectos públicos cargados.`);
};

const fetchGithubData = async () => {
  const cacheDate = localStorage.getItem(githubCacheDateKey);
  const cached = localStorage.getItem(githubCacheKey);
  if (cacheDate && cached && (Date.now() - Number(cacheDate) < cacheDurationMs)) {
    try {
      const repos = JSON.parse(cached);
      renderRepos(repos);
      return;
    } catch (err) {
      localStorage.removeItem(githubCacheKey);
      localStorage.removeItem(githubCacheDateKey);
    }
  }

  showState('Cargando proyectos…');

  try {
    const response = await fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=100`, {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    });
    if (!response.ok) throw new Error('GitHub API no disponible');
    const data = await response.json();

    const repos = data
      .filter(repo => !repo.private)
      .filter(repo => !repo.archived)
      .filter(repo => !repo.fork)
      .filter(repo => repo.description)
      .filter(repo => !excludedRepos.includes(repo.name))
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    renderRepos(repos);
    localStorage.setItem(githubCacheKey, JSON.stringify(repos));
    localStorage.setItem(githubCacheDateKey, String(Date.now()));
  } catch (error) {
    showState('No fue posible cargar los proyectos de GitHub. Podés verlos directamente en mi perfil.');
    const actions = document.getElementById('github-actions');
    if (actions) {
      actions.innerHTML = '<a class="btn" href="https://github.com/tobiasngodoy-gif" target="_blank" rel="noopener">Ver perfil de GitHub</a>';
    }
  }
};

export { fetchGithubData, excludedRepos };
