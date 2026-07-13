# Portafolio — Tobias Godoy

Este repositorio contiene la versión estática y el servidor mínimo para el portafolio personal de Tobias Godoy.

Estructura principal:

- `templates/index.html` — plantilla principal.
- `css/` — estilos.
- `js/` — scripts.
- `assets/` — imágenes, logo y CV.
- `main.py` — servidor Flask simple para desarrollo.

Requisitos y ejecución (Windows PowerShell):

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python main.py
```

Abre http://127.0.0.1:5000 en tu navegador.

Notas:
- Reemplaza `assets/logo/avatar-placeholder.png` por tu foto profesional.
- Reemplaza `assets/Tobias_Godoy_CV.pdf` con tu CV real.
