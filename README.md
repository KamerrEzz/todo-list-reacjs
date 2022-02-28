# Patrones de Render y Composición

## NOTA

En esta version aplico Patrones de Rendes y Composición
a la primera version del proyecto.

En cada `commit` he puesto los puntos e informacion importante.
Inicio: `5f412ff8ff451fb95fc26dc3db4a991dbb0ad03b`

## Qué son los High Order Components

Las funciones como las conocemos pueden devolvernos un valor en sus returns, pero estas funciones de “orden superior”, son funciones que devuelven otras funciones.


Si llamamos a la high order function y le enviamos un parámetro no tendremos todavía un resultado, como está devolviendo otra función tenemos que llamar a esa función que obtenemos luego de llamar a la de orden superior, enviarle los nuevos parámetros que necesita la función de retorno y entonces si, obtendremos nuestro resultado.

```js
function highOrderFunction(var1) {
	return function returnFunction(var2) {
		return var1 + var2;
	}
}

const withSum1 = highOrderFunction(1);
const sumTotal = withSum1(2);
```

Debido a que los componentes son funciones podemos también aplicar este concepto

```js
function Componente(props){
	return <p>...</p>
}

function highOrderComponent() {
	return function Componente(props) {
		return <p>...</p>
	}
}
```

```js
function highOrderComponent(WrappedComponent) {
	return function Componente(props) {
		return (
			<WrappedComponent
				{...algoEspecial}
				{...props}
			/>
		);
	}
}
```

## Ejemplo

```js
function withApi(WrappedComponent) {
	const apiData = fetchApi('https://api.com');
	
	return function WrappedComponentWithApi(props) {
		if (apidData.loading) return <p>Loading</p>;
		return(
			<WrapperdComponent data={apiData.json} />
		);
	}
}
```

* Antes de retornar el componente en sí, hace una petición y entrega al componente esa información
* Además que podemos personalizar el estado de carga

```js
function TodoBox(props) {
	return (
		<p>
			Tu nombre es {props.data.name}
		</p>
	);
}

const TodoBoxWithApi = withApi(TodoBox)
```

ahora mas complejo

```js
function withApi(apiUrl){
	return function withApiUrl(WrappedComponent) {
		const apiData = fetchApi(apiUrl);
		
		return function WrappedComponentWithApi(props) {
			if (apidData.loading) return <p>Loading</p>;
			return(
				<WrapperdComponent data={apiData.json} />
			);
		}
	}
}

function TodoBox(props) {
	return (
		<p>
			Tu nombre es {props.data.name}
		</p>
	);
}

const TodoBoxWithApi = withApi('https://api.com')(TodoBox);
```