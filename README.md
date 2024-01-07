# Piedra-Papel-Tijera (Mejorado)

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)


## Descripción
Proyecto realizado para demostrar los conocimientos en Front-end. La idea del proyecto viene de un desafío de la pagina (https://www.frontendmentor.io).  Este proyecto ofrece al usuario un mini juego de Piedra-Papel-Tijera (Mejorado) eso quiere decir que agregamos mas elementos al juego como Spock y Lizard ( para mas informacion leer las reglas )

## Tipo de proyecto 
Proyecto individual

## Tecnologías usadas
- React
- CSS
- TypeScript


## Capturas de pantalla
### Escritorio

[![PPT1.png](https://i.postimg.cc/63n95mbq/PPT1.png)](https://postimg.cc/HcWG6Bg1)


[![PPT2.png](https://i.postimg.cc/26M2THCQ/PPT2.png)](https://postimg.cc/FdbyHVdz)


[![PPT3.png](https://i.postimg.cc/65YGX8GS/PPT3.png)](https://postimg.cc/ZCvqPKHF)

### Mobile

<p align="center" width="100%">
	<img src="https://i.postimg.cc/0ySMJc4g/PPT-mobile1.png"/>
	<img src="https://i.postimg.cc/26g36Wxj/PPT-mobile2.png"/>
	<img src="https://i.postimg.cc/brH8hSCB/PPT-mobile3.png"/>
</p>


## Estructura
```
piedra-papel-tijera
├─ .eslintrc.cjs
├─ .gitignore
├─ images
│  ├─ bg-pentagon.svg
│  ├─ bg-triangle.svg
│  ├─ favicon-32x32.png
│  ├─ icon-close.svg
│  ├─ icon-lizard.svg
│  ├─ icon-paper.svg
│  ├─ icon-rock.svg
│  ├─ icon-scissors.svg
│  ├─ icon-spock.svg
│  ├─ image-rules-bonus.svg
│  ├─ image-rules.svg
│  ├─ logo-bonus.svg
│  └─ logo.svg
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ auxiliar
│  │  ├─ elecciones.ts
│  │  └─ mensajes.ts
│  ├─ component
│  │  ├─ dumb
│  │  │  ├─ DCronometro.tsx
│  │  │  ├─ DEleccion.tsx
│  │  │  ├─ DElecciones.tsx
│  │  │  ├─ DEscenaJuego.tsx
│  │  │  ├─ DJuego.tsx
│  │  │  ├─ DMensaje.tsx
│  │  │  ├─ DMenu.tsx
│  │  │  ├─ DPuntaje.tsx
│  │  │  └─ DReglas.tsx
│  │  └─ smart
│  │     ├─ SCronometro.tsx
│  │     ├─ SEscena.tsx
│  │     ├─ SEscenaContext.tsx
│  │     ├─ SJuego.tsx
│  │     └─ SMenu.tsx
│  ├─ logic
│  │  └─ juego.ts
│  ├─ main.tsx
│  ├─ style
│  │  ├─ App.css
│  │  ├─ Cronometro.css
│  │  ├─ Eleccion.css
│  │  ├─ Elecciones.css
│  │  ├─ EscenaJuego.css
│  │  ├─ Juego.css
│  │  ├─ Mensaje.css
│  │  ├─ Menu.css
│  │  ├─ Puntaje.css
│  │  └─ Reglas.css
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Instalación
Antes de descargar o clonar el repositorio es necesario que usted instale node (https://nodejs.org/en).
Una vez descargado o clanado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto

## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run dev
```

En caso de saltarse los paso de instalación y querer probar el proyecto en linea visitar el siguiente link:
https://stupendous-salamander-980811.netlify.app
