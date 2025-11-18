# Reto 5: Lector de Noticias — Programación Web (UVEG)

Este proyecto corresponde al **Reto 5** del módulo de *Programación Web* de la **Universidad Virtual del Estado de Guanajuato (UVEG)**.  
Consiste en desarrollar un **lector de noticias dinámico** utilizando HTML, CSS y JavaScript, aplicando los conceptos de **Fetch API**, **AJAX** y **JSON** para consumir una API real de noticias.

---

## Funcionalidad

La aplicación permite:

- Cargar noticias reales desde la API de **GNews**.  
- Mostrar títulos, descripciones, fuentes, fechas y enlaces directos.  
- Crear tarjetas dinámicas con JavaScript y manipulación del DOM.  
- Refrescar las noticias con un botón, sin recargar toda la página.  
- Manejar errores si la API no responde correctamente.

---

## Estructura del Proyecto

reto5noticias/
│── index.html # Estructura principal del sitio web
│── styles.css # Estilos y apariencia visual
│── script.js # Lógica JavaScript y consumo de API GNews
│── README.md # Documentación del proyecto


---

## Tecnologías Utilizadas

- **HTML5** — estructura básica
- **CSS3** — diseño responsivo y tarjetas
- **JavaScript (ES6+)** — lógica dinámica
- **Fetch API** — solicitudes HTTP
- **JSON** — manejo de datos externos
- **GNews API** — proveedor de noticias reales en español

---

## API Utilizada: GNews

Para obtener noticias en español se utiliza la API de **GNews**, con los parámetros:

- `country=mx` → Noticias relacionadas con México  
- `lang=es` → Español  
- `category=general` → Noticias generales  
- `max=30` → Límite de resultados  


https://gnews.io/api/v4/top-headlines?country=mx&lang=es&category=general&max=30&token=80abc36255ec39fbb8779e5b957cf2b8

---

## Cómo Ejecutarlo

Debido a políticas de CORS de GNews, se debe ejecutar desde **un servidor local** y no directamente con `file:///`.

### Opción recomendada: Live Server

1. Instalar la extensión **Live Server** en VS Code.  
2. Abrir la carpeta del proyecto.  
3. Clic derecho en `index.html` → **Open with Live Server**.  
4. El sitio se abrirá en:  
   `http://localhost:5500/`

---

## Capturas 

- Lector de noticias funcionando.  
- Código JavaScript con la función `fetch`.  
- Estructura HTML.  
- Diseño CSS de las tarjetas.

---

## Manejo de Errores

El proyecto incluye control de errores:

- API no disponible  
- Token inválido  
- Problemas de conexión  
- Falta de artículos

Mensaje mostrado:

> **“Ocurrió un error al cargar las noticias. Intenta de nuevo más tarde.”**

---

## 👤 Autor

**Nombre:** Jorge Ivan Ramirez Laredo
**Matrícula:** 24001072  
**Correo:** jirl0715@gmail.com

---

## Referencias

- GNews API Documentation — https://gnews.io  
- MDN Web Docs: Using Fetch API — https://developer.mozilla.org  
- JSON.org — https://www.json.org  
