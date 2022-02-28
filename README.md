# Patrones de Render y Composición

Es un patrón para crear componentes que nos da libertad para elegir dónde y cómo usamos nuestros componentes. Cada componente debe cumplir una tarea muy específica pero no debe de decirnos exactamente como usar esa solución que nos provee, debe ser muy flexible dándonos libertad para usar la información como queramos.

Esto nos permite hacer a los componentes más fáciles de integrar al resto de componentes, y agiliza el proceso de reutilizar o hacer cambios en los componentes.

---

Para armar tu aplicación de forma correcta necesitas primero pensar en la mínima cantidad de estado mutable que necesita la aplicación. Lo importante acá es que no te repitas (DRY: Don’t Repeat Yourself). Necesitas descubrir la mínima representación del estado que tu aplicación va a necesitar y calcular el resto bajo demanda.

Hazte estas tres preguntas por cada pieza de información:

¿Viene del padre como props? Entonces probablemente no sea estado.
¿Se queda sin cambios con el tiempo? Entonces, probablemente no sea estado.
¿Puedes calcularlo con base a otro estado o prop en tu componente? Entonces, no es parte del estado.
De esta manera podrás identificar de forma correcta tus estados.