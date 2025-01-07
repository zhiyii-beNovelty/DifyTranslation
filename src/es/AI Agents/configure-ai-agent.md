---
metatitle: Configurar Agente de IA | Guía del Usuario de FabriXAI
description: Aprende cómo configurar agentes de IA en FabriXAI con esta guía paso a paso.
lang: es
permalink: /configure-ai-agent
---

# Configurar Agente de IA

## Crea Tus Agentes de IA Personalizados en Guía del Usuario de FabriXA
description: Aprende cómo configurar agentes de IA en FabriXAI con esta guía paso a paso.
lang: es
permalink: /configure-ai-agent
---

# Configurar Agente de IA

## Crea Tus Agentes de IA Personalizados en FabriXAI

Los agentes de IA en FabriXAI están diseñados para automatizar flujos de trabajo y mejorar casos de uso específicos. Con FabriXAI, puedes desplegar tu agente de IA en dos formatos, dependiendo de las necesidades de tu tarea:

- **Aplicación Web**: Ideal para tareas que requieren una aplicación independiente accesible a través de un navegador, como el envío de formularios o la generación de documentos.
- **Chatbot**: Perfecto para interacciones conversacionales en tiempo real, como soporte al cliente o asistentes virtuales.

Esta guía te guiará a través de los pasos y componentes necesarios para crear y configurar tu agente de IA personalizado.

## Comenzando

El constructor de agentes de IA está organizado en cuatro bloques esenciales:

1. **[Entradas del Usuario](/es-us/configure-ai-agent/#user-inputs)**: Especifica los datos que deseas recopilar de los usuarios.
2. **[Conocimiento](/es-us/configure-ai-agent/#knowledge)**: Define la información que tu agente de IA utilizará.
3. **[Modelo de IA](/es-us/configure-ai-agent/#ai-model)**: Elige el modelo que impulsará las respuestas de tu agente de IA.
4. **[Salida](/es-us/configure-ai-agent/#output)**: Configura cómo tu agente de IA presentará sus resultados.

¡Vamos a sumergirnos y comenzar a construir tu agente de IA!

## Entradas del Usuario

### A. Recopilar y Personalizar las Entradas de Usuario para tu Agente de IA

Para interactuar eficazmente con los agentes de IA, debes definir entradas específicas que los usuarios proporcionan para activar las respuestas del agente de IA. Diferentes tipos de entradas cumplen diversos propósitos, tales como:

- Escribir instrucciones para la creación de blogs.
- Ingresar el propósito para el análisis de datos.
- Seleccionar diferentes segmentos de clientes.

### B. Pasos para Configurar Entradas de Usuario:

1. Navega al bloque de **Entrada de Usuario** en el constructor de agentes de IA.
2. Haz clic en **"Agregar Entrada."**
3. Selecciona y completa el **Tipo de Entrada**, **Nombre de la Etiqueta**, **Nombre de la Variable**, **Longitud Máxima de Caracteres**, y especifica si es un campo **Obligatorio**.
   > Nota: Por favor, consulta [Campos Clave de Entrada para Personalizar](/es-us/configure-ai-agent/#c-key-input-fields-to-customize) para explicaciones detalladas de cada campo de entrada.
4. Haz clic en **"Guardar"** para finalizar la entrada de usuario.
5. Para agregar más entradas de usuario, repite desde el paso 2.

### C. Campos Clave de Entrada para Personalizar:

1. **Tipo de Entrada**: Especifica el tipo de entrada (por ejemplo, Texto, Párrafo, Selección Desplegable).
2. **Nombre de la Etiqueta**: Añade una etiqueta clara para guiar a los usuarios (por ejemplo, "Ingrese Instrucciones del Blog").
3. **Nombre de la Variable**: Define un nombre corto e identificable para programación (por ejemplo, `instrucciones_blog`).
4. **Longitud Máxima de Caracteres**: Establece la longitud máxima permitida para la entrada (por ejemplo, 250 caracteres).
5. **Obligatorio**: Indica si la entrada es obligatoria u opcional.

## Conocimiento

### A. Mejora los LLMs con tu Propio Contexto y Datos

La funcionalidad de Conocimiento en FabriXAI te permite mejorar la base de conocimientos de tu Agente de IA con tu propio contexto y datos. Esto permite al agente entender y responder a preguntas relacionadas con temas o dominios específicos que no están cubiertos por sus datos de entrenamiento generales.

### B. Pasos para Integrar Conocimiento  

1. Navega al bloque de **Conocimiento** en el constructor de agentes de IA.
2. Haz clic en **"Agregar Conocimiento"**.
3. Selecciona agregar conocimiento cargado.
   > Nota: Debes cargar un conjunto de conocimientos primero para poder seleccionarlo aquí. Para instrucciones detalladas sobre cómo crear conjuntos de conocimientos, consulta la [Guía de Conocimientos](/es-us/knowledge).
4. Haz clic en **"Guardar"** para finalizar la adición del conocimiento seleccionado a tu agente de IA.
5. *(Opcional)* Si tu agente de IA está configurado como una **Aplicación Web**, haz clic en **"Seleccionar Variable de Consulta"** y asigna una variable de entrada del usuario (desde el bloque de **Entradas del Usuario**) para que se utilice como consulta para la recuperación de conocimientos.

## Modelo de IA

### A. Potencia tus Agentes de IA con LLMs

Los Modelos de Lenguaje de Gran Tamaño (LLMs) son la base de los agentes de IA de FabriXAI, lo que les permite comunicarse mediante interacciones en lenguaje natural. Estos modelos procesan las entradas de los usuarios y generan respuestas basadas en una **Solicitud** que proporcionas.

### B. Pasos para Configurar el Modelo de IA:

1. Navega al bloque de **Modelo de IA** en el constructor de agentes de IA. 
2. Haz clic en **"Editar"**.
3. Escribe una **Solicitud** que proporcione instrucciones para que tu agente de IA las siga.
   > Nota: Por favor, consulta [Notas sobre cómo redactar solicitudes efectivas](/es-us/configure-ai-agent/#c-notes-on-writing-effective-prompts) para más explicaciones.
4. *(Opcional)* Si tu agente de IA está configurado como un **Chatbot**, puedes agregar un Mensaje de Bienvenida. Este mensaje se enviará al usuario al inicio de cada conversación.
5. Selecciona el **Modelo de IA** deseado que mejor se adapte a tu tarea.
   > Nota: Para la lista de modelos de IA soportados, consulta [¿Qué Modelos de IA están Soportados?](/es-us/what-ai-models-are-supported).  
6. *(Opcional)* Abre la sección **Avanzado** para ajustar aún más los parámetros del modelo.
   > Nota: Por favor, consulta [Guía para Configurar Parámetros del LLM](/es-us/configure-ai-agent/#d-guidance-on-setting-parameters-for-llm) para más explicaciones.
7. Haz clic en **"Guardar"** para finalizar la configuración del modelo de IA.

### C. Notas sobre Cómo Escribir Solicitudes Efectivas

- Sé específico acerca de la tarea que deseas que realice el agente de IA.
- Incluye ejemplos para guiar el comportamiento del modelo.
- Utiliza formatos estructurados cuando sea apropiado (por ejemplo, viñetas o listas numeradas).

Para más consejos sobre cómo crear solicitudes efectivas, visita [el Blog de Ingeniería de Solicitudes de FabriXAI](https://www.fabrixai.com/blog/category/prompt-engineering).

### D. Guía para Configurar Parámetros del LLM

Configurar los parámetros determina el estilo y el tono de las respuestas de tu agente de IA. Ofrecemos valores preestablecidos para varios estilos de respuesta, y también puedes personalizar la configuración utilizando las siguientes opciones:

1. **Temperatura**: Controla la aleatoriedad de la salida. Un valor más bajo (por ejemplo, 0.2) resulta en respuestas más enfocadas y deterministas, mientras que un valor más alto (por ejemplo, 0.8) fomenta la creatividad y diversidad en las respuestas.
2. **Top P**: Este parámetro (también conocido como muestreo por núcleo) especifica la probabilidad acumulativa de selección de tokens. Configurarlo a un valor como 0.9 significa que el modelo considerará solo el 90% superior de la masa de probabilidad para generar el siguiente token, permitiendo una aleatoriedad más controlada.
3. **Penalización de Presencia**: Ajusta la probabilidad de que el modelo introduzca nuevos temas. Un valor positivo desalienta la repetición (por ejemplo, 0.5), haciendo más probable la introducción de nuevos conceptos, mientras que un valor más cercano a 0 permite más repetición.
4. **Penalización de Frecuencia**: Reduce la probabilidad de que el modelo repita el mismo token basado en su frecuencia en el texto. Un valor de 0.5 penalizará ligeramente los tokens comunes, promoviendo la variedad en la salida.
5. **Máximo de Tokens**: Especifica la longitud máxima de la respuesta generada. Configurar este valor adecuadamente asegura que las respuestas sean concisas y relevantes para tus necesidades. Por ejemplo, un valor de 150 o 300 tokens podría funcionar bien dependiendo del contexto.

## Salida

### A. Configurar Plantillas de Salida del Agente de IA

El bloque de **Salida** determina cómo el agente de IA presenta sus resultados a los usuarios finales y se integra con tus flujos de trabajo. Las salidas deben ser claras, fáciles de usar y alineadas con tus objetivos. Por defecto, la plantilla de salida del agente de IA se configura en función de los resultados del modelo de IA, y no se requiere configuración adicional para esta parte.

## Finalizar tu Agente de IA

Después de configurar todos los ajustes, simplemente haz clic en **"Guardar"** en la esquina superior derecha para publicar tu agente de IA. Puedes acceder a la página de la aplicación del agente de IA haciendo clic en el ícono **"Abrir ↗"** en la esquina superior derecha, o puedes compartirlo con otros a través de las opciones en la barra lateral izquierda.

## Artículos Relacionados
- [Utilizar el Agente de IA](/es-us/use-ai-agent)
