---
metatitle: Corrector de Escritura | Plantillas de Agentes | Guía de Usuario de FabriXAI
description: Esta es una guía de usuario para configurar y utilizar el agente de IA Corrector de Escritura para pulir un texto dado.
lang: es-ES
permalink: /agent-templates/writing-proofreader
---

# Corrector de Escritura

El **Corrector de Escritura** es un agente de IA diseñado para proporcionar retroalimentación de nivel profesional sobre tu contenido escrito. Al evaluar la gramática, estructura y contenido, te ayuda a refinar tu texto para mejorar la claridad y el atractivo. Ya sea que estés redactando una reseña de libro, un artículo o cualquier forma de expresión escrita, este agente ofrece sugerencias detalladas para mejorar, convirtiéndose en una herramienta invaluable para escritores de cualquier nivel.

## Inicio

Para empezar, asegúrate de clonar el **Corrector de Escritura**. Sigue [Crear desde Plantillas](/es-us/create-from-templates/) para clonar y configurar tu agente de inteligencia artificial.

## Instrucciones de Configuración

### Entradas del Usuario

| Nombre de la etiqueta         | Descripción                                      | Instrucción                                                                                       |
| ----------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Objetivo de la escritura      | Especifica el enfoque o el objetivo del texto     | Incluye una breve declaración sobre el propósito de tu escritura (por ejemplo, "Una reseña de un libro", "Un artículo") |
| El texto para la revisión     | Introduce el texto que deseas revisar            | Proporciona un texto detallado para evaluación, idealmente entre 300-1000 palabras para una retroalimentación completa |

### Conocimiento

Puedes cargar archivos `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que cumpla con tus requisitos específicos.

### Modelos de IA

El modelo por defecto es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, refina tus solicitudes para obtener resultados más personalizados.

::: tip
Para obtener instrucciones más detalladas sobre cómo configurar un agente de IA, consulta [Configurar Agente de IA](/es-us/configurar-ai-agent/)
:::

## Ejemplos de Entradas y Salidas

### Ejemplos de Entrada

- **Objetivo de la redacción**: Una reseña del libro *Harry Potter y la Piedra Filosofal*
- **El texto para corrección**: Harry Potter y la Piedra Filosofal de J.K. Rowling es un debut cautivador que presenta a los lectores el mundo mágico y al niño que se convertiría en uno de los héroes más icónicos de la literatura. La historia sigue al joven Harry Potter, un niño ordinario que descubre en su undécimo cumpleaños que, de hecho, es un mago. Llevado a la Escuela Hogwarts de Magia y Hechicería, Harry emprende un viaje extraordinario, hace nuevos amigos, aprende magia y descubre la verdad sobre su pasado. La construcción del mundo de Rowling no tiene nada menos que mágico. Desde el bullicioso Callejón Diagon hasta el encantador Gran Comedor, cada escenario cobra vida con un detalle meticuloso y un sentido de asombro. La autora fusiona de manera fluida lo cotidiano con lo sobrenatural, creando un mundo fantástico que se siente a la vez extraño y familiar.

### Ejemplo de Salida

```
Comentarios:
Gramática:
La gramática en el texto es generalmente correcta, sin errores evidentes. Sin embargo, hay algunas áreas donde la puntuación podría mejorarse para una mejor legibilidad. Por ejemplo, la frase “La historia sigue al joven Harry Potter, un niño ordinario que descubre en su undécimo cumpleaños que es un mago” podría beneficiarse de una coma después de “cumpleaños”.

Estructura:
La estructura del texto es clara y lógica. Comienza con una introducción al libro y su significado, seguida de un breve resumen de la trama, y concluye con un análisis de las habilidades de construcción del mundo del autor. Sin embargo, las transiciones entre oraciones y párrafos podrían ser más fluidas para mejorar el flujo de la reseña.

Contenido:
El contenido cumple efectivamente con el objetivo de una reseña de libro. Proporciona una visión general de la trama y resalta elementos clave como la construcción del mundo. Sin embargo, podría beneficiarse de un análisis más crítico de las fortalezas y debilidades del libro. Por ejemplo, mencionar el desarrollo de personajes, el ritmo o los elementos temáticos proporcionaría una reseña más completa.

Texto corregido:
Harry Potter y la Piedra Filosofal de J.K. Rowling es un debut cautivador que introduce a los lectores al mundo mágico y al niño que se convertiría en uno de los héroes más icónicos de la literatura. La historia sigue al joven Harry Potter, un niño ordinario que descubre en su undécimo cumpleaños que es un mago. Llevado a la Escuela Hogwarts de Magia y Hechicería, Harry emprende un viaje extraordinario, haciendo nuevos amigos, aprendiendo magia y descubriendo la verdad sobre su pasado.

La construcción del mundo de Rowling no es menos que mágica. Desde el bullicioso Callejón Diagon hasta el encantador Gran Comedor, cada escenario se trae a la vida con meticuloso detalle y un sentido de asombro. La autora fusiona de manera fluida lo mundano y lo sobrenatural, creando un mundo fantástico que se siente tanto extraño como familiar.

Mientras que el libro sobresale en la creación de un mundo inmersivo, también brilla en el desarrollo de personajes. Harry, junto con sus amigos Hermione Granger y Ron Weasley, evoluciona a lo largo de la historia, enfrentando desafíos que ponen a prueba su coraje y amistad. El ritmo está bien equilibrado, manteniendo a los lectores enganchados de principio a fin. Además, los temas de valentía, amistad y la lucha entre el bien y el mal están entretejidos de manera fluida en la narrativa, haciendo que no sea solo un libro para niños sino una historia con atractivo universal.

En conclusión, *Harry Potter y la Piedra Filosofal* es una introducción magistral a una serie que ha cautivado a millones. La habilidad de Rowling para crear un mundo rico e inmersivo y personajes con los que se puede relacionar hace que este libro sea una lectura obligada tanto para lectores jóvenes como adultos.
```

## Consejos de Configuración Efectiva

- **Sé claro en tu propósito**: Define claramente el objetivo de tu escritura para guiar apropiadamente la retroalimentación.
- **Proporciona un texto completo**: Cuanto más contenido proporciones, más detallada será la retroalimentación; apunta a una longitud entre 300 y 1000 palabras.
- **Usa un formateo adecuado**: Asegúrate de que tu texto mantenga párrafos claros y una estructura que permita un mejor análisis.
- **Itera sobre la retroalimentación**: Revisa las sugerencias proporcionadas por el agente y refina tu texto, luego pásalo nuevamente por el agente para obtener mejoras adicionales.
- **Experimenta con las opciones del modelo**: Si no estás satisfecho con el resultado, prueba diferentes modelos de IA para ver cuál se alinea mejor con tu estilo de escritura.

## Artículos Relacionados
Sigue explorando nuestra colección de [Plantillas de Agentes](/es-us/agent-templates/) para descubrir más ideas de agentes de IA en acción.