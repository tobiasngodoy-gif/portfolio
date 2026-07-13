# Portafolio — Tobias Godoy

Portafolio profesional estático preparado para publicar en Netlify.

Demo: (pendiente)

Captura: `assets/og/portfolio-preview.png`

Estructura del proyecto:

- `index.html` — página principal (estática).
- `templates/` — plantilla usada para desarrollo local con Flask (opcional).
- `css/` — estilos: `variables.css`, `style.css`, `animations.css`, `responsive.css`.
- `js/` — scripts: `app.js`.
- `assets/` — imágenes, íconos y CV.
  - `assets/cv/CV_Tobias_Godoy.pdf` — CV descargable.
  - `assets/icons/` — SVGs de tecnologías.
  - `assets/images/` — capturas y placeholders por proyecto.
  - `assets/og/` — imagen Open Graph.

Cómo ejecutar localmente (desarrollo con Flask):

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python main.py
```

El servidor de desarrollo servirá la plantilla en `http://127.0.0.1:5000`.

Publicación en Netlify:

- El sitio es estático (usa `index.html` en la raíz). Está configurado para Netlify con `netlify.toml`.
- Sube el repo a GitHub y conéctalo a Netlify para deploy automático.

Tecnologías usadas:

- HTML5, CSS3, JavaScript
- Tipografía: Inter (Google Fonts)
- CI/hosting recomendado: Netlify

Tareas pendientes:

- Reemplazar placeholders de imágenes y CV por archivos reales.
- Añadir capturas finales y diagrama del flujo de Email Automation.
 - Añadir imágenes y diagramas para Python Telegram Audit Bot.
 - Completar las descripciones de caso de estudio donde corresponda.

Autor:

Tobias Godoy — Python Backend Developer

Enlaces:

- LinkedIn: https://www.linkedin.com/in/tobias-godoy/
- GitHub: https://github.com/tobiasngodoy-gif

Licencia: MIT (archivo LICENSE)
