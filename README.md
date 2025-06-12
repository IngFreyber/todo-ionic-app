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

🔹 APK (Android): 
https://drive.google.com/file/d/18KTtticBefmEpuyuZSALWy5UMmCVqSjd/view?usp=drive_link

************
📸 Capturas de pantalla
Video: https://drive.google.com/file/d/1c-dizJflj3y_2UsCr4JZgO5WYC4XcYm4/view?usp=drive_link
Capture: https://drive.google.com/file/d/1oyYnvvNMtolWxkGnxn7ptcVqTOMMyiPi/view?usp=drive_link
***********
IMPORTANTE: Debido al tiempo limitado, no pude completar la prueba en iOS; sin embargo, la aplicación está diseñada para funcionar correctamente en dispositivos iOS.

Preguntas:
1. ¿Cuáles fueron los principales desafíos que enfrentaste al implementar las nuevas funcionalidades?
Uno de los principales desafíos fue integrar la funcionalidad de categorías de forma intuitiva sin afectar la simplicidad de la aplicación base. Tuve que rediseñar parcialmente el flujo de usuario para permitir la creación, edición y eliminación de categorías, así como permitir la asignación de estas a cada tarea de forma clara y eficiente.
Otro reto fue la implementación de Remote Config de Firebase, ya que fue necesario configurar correctamente los parámetros en el panel de Firebase y sincronizarlos con la aplicación móvil para activar o desactivar funcionalidades dinámicamente, sin necesidad de publicar una nueva versión.
También hubo algunos desafíos en asegurar que el almacenamiento local (localStorage) soportara estructuras más complejas al incluir categorías relacionadas con las tareas, sin comprometer la persistencia y el rendimiento.
Otro inconveniente que se presentó fue que inicialmente instalé Capacitor, ya que es el estándar en las versiones más recientes de Ionic. Sin embargo, al revisar más detalladamente los requerimientos de la prueba, noté que se esperaba el uso de Cordova. Al intentar realizar la migración, encontré que el proceso era complejo, ya que implicaba también una actualización de Angular, lo cual requería tiempo adicional. Por esta razón, opté por continuar con Capacitor. No obstante, tengo experiencia utilizando Cordova y puedo adaptarme a este enfoque si el proyecto lo requiere.

2. ¿Qué técnicas de optimización de rendimiento aplicaste y por qué?
Lazy Loading de módulos: Separé las vistas principales (Lista de Tareas, Gestión de Categorías) en módulos con lazy loading para reducir el tiempo de carga inicial de la app.
Uso de trackBy en ngFor: Al renderizar listas de tareas, utilicé la función trackBy para evitar re-renderizados innecesarios cuando se actualizaba el estado de una tarea o se cambiaba la categoría.
Debounce en inputs de búsqueda o filtrado: Para evitar múltiples renderizados o llamadas innecesarias al manipular filtros por categoría, implementé debounce en los inputs y filtros.
Evité operaciones costosas en el ciclo de vida (ngOnInit, ngAfterViewInit) y usé ChangeDetectionStrategy.OnPush en componentes donde era posible, para mejorar el rendimiento general.
Estas optimizaciones fueron clave para que la app siga siendo fluida incluso al manejar listas grandes de tareas.

3. ¿Cómo aseguraste la calidad y mantenibilidad del código?
Separación de responsabilidades: Dividí la lógica de la app en componentes y servicios, asegurando que cada clase tuviera una única responsabilidad. Por ejemplo, el TaskService maneja toda la lógica relacionada con tareas, y el CategoryService, la lógica de categorías.
Buenas prácticas de Angular: Utilicé ReactiveForms, observables (RxJS) y tipado estricto en TypeScript para prevenir errores y facilitar la lectura y mantenimiento del código.
Comentarios y documentación: Añadí comentarios descriptivos en métodos clave y utilicé un archivo README.md bien documentado con pasos claros para ejecutar, compilar y probar la aplicación.
Convenciones de código: Seguí convenciones de nombres y estructuras de archivos acordes a las prácticas de Angular y Ionic, facilitando que cualquier otro desarrollador pueda integrarse rápidamente al proyecto.
Pruebas manuales y validación visual: Probé exhaustivamente cada nueva funcionalidad (creación de tareas, asignación de categorías, filtros, etc.) en dispositivos Android e iOS para asegurar compatibilidad y estabilidad.
************************************************************
📄 Licencia
Este proyecto se entrega sin licencia específica (uso libre para fines educativos y de evaluación técnica).

✉️ Autor
Desarrollado por [Freyber Becerra] como parte de una prueba técnica.
