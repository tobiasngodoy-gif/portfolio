const modalData = {
  'python-network-monitor': {
    title: 'Python Network Monitor',
    description: 'Sistema de monitoreo de red que verifica la conectividad de routers y dispositivos mediante IP y puerto, y envía alertas automáticas por Telegram.',
    problem: 'El control manual de routers y dispositivos de red provoca demoras en la detección de caídas y problemas de conectividad.',
    solution: 'Herramienta en Python que lee dispositivos desde una planilla, verifica IP/puerto, detecta cambios y envía alertas por Telegram.',
    features: [
      'Lectura de dispositivos desde Excel.',
      'Verificación mediante IP y puerto.',
      'Monitoreo continuo y alertas automáticas.',
      'Generación de reportes operativos.',
    ],
    technologies: 'Python · OpenPyXL · Requests · Telegram Bot API · ThreadPoolExecutor',
    images: ['Monitoreo de red', 'Alertas por Telegram', 'Arquitectura de sistema'],
    links: [{ label: 'Ver GitHub', href: 'https://github.com/tobiasngodoy-gif/network-monitor-bot', outline: true }],
  },
  'telegram-audit-bot': {
    title: 'Python Telegram Audit Bot',
    description: 'Bot de Telegram desarrollado en Python para consultar información de auditoría almacenada en PostgreSQL, generar resúmenes operativos y exportar reportes Excel.',
    problem: 'La revisión manual de auditorías, tablas y estadísticas de PostgreSQL requiere tiempo y acceso directo a la base de datos.',
    solution: 'El bot permite realizar consultas desde Telegram mediante el comando /status, procesar los resultados y enviar un resumen junto con un reporte Excel.',
    features: [
      'Consulta de tablas PostgreSQL.',
      'Lectura de auditorías.',
      'Integración con pg_stat_user_tables.',
      'Comando /status.',
      'Generación de reportes Excel.',
      'Envío de archivos mediante Telegram.',
      'Reportes mensuales.',
      'Variables de entorno.',
      'Ejecución en segundo plano.',
    ],
    technologies: 'Python · python-telegram-bot · PostgreSQL · psycopg2 · pandas · openpyxl · python-dotenv',
    images: ['Consulta de auditorías', 'Resumen operativo', 'Reporte Excel'],
    links: [{ label: 'Ver GitHub', href: 'https://github.com/tobiasngodoy-gif/telegram_audit_bot', outline: true }],
  },
  'email-automation': {
    title: 'Email Automation',
    description: 'Automatización de correos transaccionales mediante Python e integración con Brevo, SendGrid y Mailgun.',
    problem: 'El envío manual de correos transaccionales y la falta de seguimiento genera errores y retrasos.',
    solution: 'Sistema que automatiza envíos, maneja plantillas dinámicas y enruta correos según proveedor con fallback inteligente.',
    features: [
      'Plantillas dinámicas y variables.',
      'Ruteo por proveedor y fallback.',
      'Reportes de entregabilidad.',
    ],
    technologies: 'Python · REST APIs · Brevo · SendGrid · Mailgun · SMTP',
    images: ['Plantillas dinámicas', 'Entrega de correos', 'Flujo de sistema'],
    links: [{ label: 'Contactar', href: 'mailto:tobiasngodoy@gmail.com', outline: false }],
    note: 'El código de este proyecto es privado.',
  },
};

const modals = (() => {
  const root = document.createElement('div');
  root.className = 'modal-root';
  root.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
      <div class="modal-header">
        <div>
          <h2 id="modal-title"></h2>
          <p id="modal-description"></p>
        </div>
        <button class="modal-close" type="button" aria-label="Cerrar modal" data-close-modal>&times;</button>
      </div>
      <div class="modal-content" id="modal-content"></div>
      <div class="modal-footer" id="modal-footer"></div>
    </div>
  `;

  document.body.appendChild(root);

  const titleEl = root.querySelector('#modal-title');
  const descriptionEl = root.querySelector('#modal-description');
  const contentEl = root.querySelector('#modal-content');
  const footerEl = root.querySelector('#modal-footer');

  const open = (key) => {
    const data = modalData[key];
    if (!data) return;

    titleEl.textContent = data.title;
    descriptionEl.textContent = data.description;
    contentEl.innerHTML = `
      <div class="modal-section">
        <h3>Problema</h3>
        <p>${data.problem}</p>
      </div>
      <div class="modal-section">
        <h3>Solución</h3>
        <p>${data.solution}</p>
      </div>
      <div class="modal-section">
        <h3>Características</h3>
        <ul>${data.features.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="modal-section">
        <h3>Tecnologías</h3>
        <p>${data.technologies}</p>
      </div>
      <div class="modal-section modal-image-grid">
        ${data.images.map(label => `<div class="modal-image">${label}</div>`).join('')}
      </div>
      ${data.note ? `<div class="modal-section"><p>${data.note}</p></div>` : ''}
    `;

    footerEl.innerHTML = data.links.map(link => `
      <a class="btn ${link.outline ? 'outline' : ''}" href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${link.label}</a>
    `).join('') + '<button class="btn outline" type="button" data-close-modal>Cerrar</button>';

    root.classList.add('open');
    document.body.style.overflow = 'hidden';
    const panel = root.querySelector('.modal-panel');
    panel?.focus();
  };

  const close = () => {
    root.classList.remove('open');
    document.body.style.overflow = '';
  };

  root.addEventListener('click', (event) => {
    if (event.target.matches('[data-close-modal]')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && root.classList.contains('open')) close();
  });

  return { open, close };
})();

export default modals;
