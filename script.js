// =============== CONFIGURACIÓN GNEWS ===============
const API_KEY = "80abc36255ec39fbb8779e5b957cf2b8"; // ← pega tu clave
const API_URL = `https://gnews.io/api/v4/top-headlines?country=mx&lang=es&category=general&max=30&token=${API_KEY}`;


// Elementos del DOM
const contenedorNoticias = document.getElementById("contenedor-noticias");
const estado = document.getElementById("estado");
const btnRecargar = document.getElementById("btn-recargar");

// Cargar noticias al iniciar
document.addEventListener("DOMContentLoaded", cargarNoticias);

// Botón para recargar sin refrescar la página completa
btnRecargar.addEventListener("click", cargarNoticias);

async function cargarNoticias() {
  try {
    estado.textContent = "Cargando noticias...";
    contenedorNoticias.innerHTML = "";

    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
      throw new Error("Error al conectar con la API (" + respuesta.status + ")");
    }

    const datos = await respuesta.json();
    const articulos = datos.articles;

    if (!articulos || articulos.length === 0) {
      estado.textContent = "No hay noticias disponibles en este momento.";
      return;
    }

    articulos.forEach((articulo) => {
      const tarjeta = document.createElement("article");
      tarjeta.classList.add("noticia");

      const titulo = articulo.title || "Sin título";
      const descripcion =
        articulo.description || "Sin descripción disponible.";
      const fuente = articulo.source?.name || "Fuente desconocida";
      const fecha = articulo.publishedAt
        ? new Date(articulo.publishedAt).toLocaleString("es-MX")
        : "Fecha no disponible";
      const url = articulo.url;

      tarjeta.innerHTML = `
        <div>
          <h2>${titulo}</h2>
          <p class="meta">${fuente} · ${fecha}</p>
          <p>${descripcion}</p>
        </div>
        ${
          url
            ? `<a href="${url}" target="_blank" rel="noopener noreferrer">
                 Leer noticia completa
               </a>`
            : ""
        }
      `;

      contenedorNoticias.appendChild(tarjeta);
    });

    estado.textContent = `Mostrando ${articulos.length} noticias.`;
  } catch (error) {
    console.error(error);
    estado.textContent =
      "Ocurrió un error al cargar las noticias. Intenta de nuevo más tarde.";
  }
}
