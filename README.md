# Patrones de Render y Composición

## NOTA

En esta version aplico Patrones de Rendes y Composición
a la primera version del proyecto.

En cada `commit` he puesto el tema y los puntos e informacion importante en el `README.md`
Commit de Inicio: `5f412ff8ff451fb95fc26dc3db4a991dbb0ad03b`

## Render props vs. High Order Components vs. React Hooks

### Maquetación

Render props o render functions vs React hooks

* Ambas son formas correctas de trabajar y comunes.
* Las render props suben el nivel de elegancia del código pero también pueden bajar el nivel de código aburrido comparado con los react hooks.
* Si practicamos mucho podremos usar las render props de manera mucho más saludable para los componentes más estructuralmente importantes de nuestras apps. Nos ayudan a proteger nuestros componentes para que no nos equivoquemos y la maquetación sea correcta

### Share data, compartir información entre componentes.

Aquí participan todos los patrones.

### Render Functions:

* Compartir info con funciones que en sus parámetros nos dejan esa info que necesitamos que nos compartieran.
* Si necesitamos demasiada info de distintas render functions para un mismo componente deja de verse bien y podría llegar al código spaghetti.

```js
<Componente1>
	{props1 => (
		<Componente2>
			{props2 => (
				<Componente3>
					{props3 => (
						{/* ... */}
					)}
				</Componente3>
			)}
		</Componente2>
	)}
</Componente1>
```

### HOC:

* Funciones que pueden retornar y retornar y retornar otras funciones hasta que en algún momento retornemos un componente de react y podamos pasarle toda la info.
* Usarlos es sencillo, envolvemos nuestros componentes en estos HOC y automáticamente van a recibir toda la info que nos querían compartir estos HOC.
* Si necesitamos la info de muchos HOC’S en un mismo componente tenemos el mismo problema que con las render functions. Código muy horizontal.

```js
const TodoBoxWithEverything = withApi(
	withSomething1(
		withSomething2(
			withSomething3(
				withSomething4(
					withSomething5(
						TodoBox
					)
				)
			)
		)
	)
);
```

### React hooks

* Llamamos al react hook (oficial o custom) y luego consumimos la info en el return del componente.
* Cuando tenemos muchos llamados a distintos react hooks no hay código horizontal.
* Ganaron los hooks para compartir info entre varios componentes. 🎉

```js
const [whatever1, setWhatever1] = useState();
const [whatever2, setWhatever2] = useState();
const [whatever3, setWhatever3] = useState();
const [whatever4, setWhatever4] = useState();
const [whatever5, setWhatever5] = useState();

return (
	<Componente {...todosLosWhatevers} />
);
```