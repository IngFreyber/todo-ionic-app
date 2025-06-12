# ✅ Todo App - Gestión de Tareas con Categorías

Aplicación construida con **Ionic + Angular** que permite gestionar tareas, asignarlas a categorías, filtrarlas y almacenarlas localmente. Proyecto desarrollado como parte de una prueba técnica.

---

## 📱 Demo

Puedes ejecutar la aplicación en tu entorno local o compilarla como aplicación móvil (Android/iOS).

---

## 🚀 Cómo ejecutar la app

### 🔧 Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)
- [Capacitor](https://capacitorjs.com/) (`npm install @capacitor/core`)
- Android Studio (para compilar en Android)
- Xcode (solo en Mac, para compilar en iOS)

---

### 💻 Ejecución en navegador (modo PWA)

```bash
npm install
ionic serve

📲 Compilar para Android
bash
Copiar
Editar
ionic build
npx cap add android
npx cap open android
🍎 Compilar para iOS (solo en Mac)
bash
Copiar
Editar
ionic build
npx cap add ios
npx cap open ios
🧩 Funcionalidades desarrolladas
✅ Crear y eliminar tareas.

✅ Marcar tareas como completadas.

✅ Asignar tareas a categorías.

✅ Filtrar tareas por categoría.

✅ Crear, editar y eliminar categorías.

✅ Confirmación de eliminación de categorías mediante IonAlert.

✅ Persistencia de datos local mediante @ionic/storage.

🗂️ Estructura del Proyecto
bash
Copiar
Editar
src/
├── app/
│   ├── home/                       # Componente principal
│   ├── models/                     # Interfaces Todo y Category
│   ├── services/
│   │   ├── todo.service.ts         # Lógica de tareas
│   │   └── category.service.ts     # Lógica de categorías
│   └── shared/modals/
│       └── category-modal/         # Modal para editar categoría
🧠 Notas técnicas
Se utiliza async/await para garantizar la correcta inicialización de los servicios antes de acceder a los datos.

Storage se usa para persistencia local de datos, asegurando que las tareas y categorías se mantengan entre sesiones.

ModalController se usa para invocar componentes modales dinámicamente (como la edición de categoría).

El código está comentado siguiendo buenas prácticas, para facilitar la comprensión y el mantenimiento.

************
📸 Capturas de pantalla
***********

📄 Licencia
Este proyecto se entrega sin licencia específica (uso libre para fines educativos y de evaluación técnica).

✉️ Autor
Desarrollado por [Freyber Becerra] como parte de una prueba técnica.
