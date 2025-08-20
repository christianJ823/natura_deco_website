# NaturaDECO - Versión Web

Esta es la versión web de la aplicación NaturaDECO, convertida desde React Native a React para navegadores web.

## 🚀 Características

- **Interfaz moderna y responsive**: Adaptada para navegadores web con diseño mobile-first
- **Carrito de compras**: Sistema completo de gestión de carrito
- **Navegación intuitiva**: Barra de navegación inferior similar a la app móvil
- **Catálogo de productos**: Visualización en grilla con imágenes y precios
- **Proceso de compra**: Flujo completo desde el carrito hasta la confirmación
- **Integración con Commerce Tools**: Preparado para conectar con la API real

## 🛠️ Tecnologías utilizadas

- **React 18**: Framework principal
- **React Router DOM**: Navegación entre páginas
- **CSS3**: Estilos modernos con Flexbox y Grid
- **Axios**: Cliente HTTP para API calls
- **Context API**: Gestión de estado del carrito

## 📦 Instalación

1. Navega a la carpeta website:

   ```bash
   cd website
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   - Copia `.env.example` a `.env`
   - Completa con tus credenciales de Commerce Tools

4. Inicia la aplicación:
   ```bash
   npm start
   ```

## 🏗️ Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── AppTitle.js     # Título de la aplicación
│   ├── Carousel.js     # Componente de carrusel
│   ├── ContactBox.js   # Caja de redes sociales
│   ├── NavigationBar.js # Barra de navegación
│   ├── PromotionBox.js # Caja de promociones
│   └── ShippingInfoBox.js # Información de envío
├── screens/            # Pantallas principales
│   ├── MainScreen.js   # Pantalla principal
│   ├── ProductsScreen.js # Listado de productos
│   ├── CartScreen.js   # Carrito de compras
│   ├── LoginScreen.js  # Pantalla de login
│   ├── ProductDetailsScreen.js # Detalles del producto
│   ├── PurchaseDetailsScreen.js # Proceso de compra
│   └── ThankYouScreen.js # Confirmación de compra
├── context/            # Gestión de estado
│   └── cart-context.js # Contexto del carrito
├── hooks/              # Hooks personalizados
│   ├── use-fetch-products.js
│   └── use-fetch-product-by-id.js
├── helpers/            # Funciones auxiliares
│   ├── cart.helper.js
│   └── product.helper.js
├── config/             # Configuración
│   └── commercetoolsClient.js
├── styles/             # Estilos globales
│   └── global.css
├── assets/             # Recursos estáticos
│   └── carousel-items.js
└── mocks/              # Datos de prueba
    └── products.js
```

## 🎨 Diferencias con la versión móvil

### Navegación

- **Mobile**: Stack Navigator de React Navigation
- **Web**: React Router DOM con rutas estándar

### Componentes

- **Mobile**: View, Text, TouchableOpacity, Image, etc.
- **Web**: div, h1, button, img, etc.

### Estilos

- **Mobile**: StyleSheet de React Native
- **Web**: CSS modules y archivos CSS estándar

### Interacciones

- **Mobile**: onPress
- **Web**: onClick con soporte para hover

## 🌟 Características adicionales de la versión web

1. **Responsive Design**: Se adapta a diferentes tamaños de pantalla
2. **Hover Effects**: Efectos visuales al pasar el mouse
3. **Navegación con teclado**: Soporte para navegación con Tab
4. **SEO Ready**: Estructura HTML semántica
5. **Scroll suave**: Experiencia de scroll optimizada

## 🔧 Configuración de Commerce Tools

Para usar la aplicación con datos reales:

1. Crea una cuenta en [Commerce Tools](https://commercetools.com/)
2. Obtén tus credenciales de API
3. Actualiza el archivo `.env` con:
   - `REACT_APP_API_URL`
   - `REACT_APP_PROJECT_KEY`
   - `REACT_APP_AUTH_URL`
   - `REACT_APP_CLIENT_ID`
   - `REACT_APP_CLIENT_SECRET`

## 🚦 Scripts disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm run eject`: Expone la configuración (¡irreversible!)

## 📱 Compatibilidad

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles (responsive)

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.
