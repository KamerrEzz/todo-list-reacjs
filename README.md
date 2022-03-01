# Patrones de Render y Composición

## NOTA

En esta version aplico Patrones de Rendes y Composición
a la primera version del proyecto.

En cada `commit` he puesto el tema y los puntos e informacion importante en el `README.md`
Commit de Inicio: `5f412ff8ff451fb95fc26dc3db4a991dbb0ad03b`

## High Order Components - StorageEventListener

En la aplicacion si nosotros tenemos dos pestañas y modificamos el TODO, en la otra se cambiara,
esto pasa por el `useEffects` ya que se modifica cuando cambia el render, y este cambia cuando
actualizamos un componente cuando le damos completado o eliminado.

entonces quitaremos eso y empezaremos con el `StorageEventListener` usando los `High Order Components`