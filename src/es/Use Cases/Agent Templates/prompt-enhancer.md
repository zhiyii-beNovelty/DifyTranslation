---
metatitle: Mejorador de Prompts | Plantillas de Agente | Guía de Usuario de FabriXAI
description: Esta es una guía de usuario para el Mejorador de Prompts, un asistente de IA diseñado para refinar y mejorar tus prompts para LLMs.
lang: es
permalink: /agent-templates/prompt-enhancer
---

# Mejorador de Prompts

El **Mejorador de Prompts** es un asistente de IA especializado en la ingeniería de prompts para grandes modelos de lenguaje (LLMs). Permite a los usuarios introducir prompts iniciales o comentarios de revisión, que el agente luego refina basándose en el contexto y la claridad. La salida incluye una versión pulida del prompt, una explicación de los ajustes realizados y sugerencias para mejoras adicionales. Esta herramienta es particularmente útil para los usuarios que buscan mejorar la efectividad y precisión de sus prompts, asegurando mejores interacciones con los modelos de IA.

## Comenzando

Para comenzar, asegúrate de haber clonado el **Mejorador de Prompts**. Sigue [Crear Desde Plantillas](/en-us/create-from-templates/) para clonar y configurar tu agente de IA.

## Instrucciones de Configuración

### Entradas de Usuario

No se requieren campos de entrada para estos agentes de IA.

### Conocimiento

Puedes subir archivos en formato `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que cumpla con tus requisitos específicos.

### Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, refina tus prompts para obtener salidas más personalizadas.

::: tip
Para obtener instrucciones más detalladas sobre la configuración de un agente de IA, por favor consulta [Configurar Agente de IA](/en-us/configuer-ai-agent/)
:::

## Ejemplos de Entradas y Salida

### Entradas de Ejemplo

```
Ayúdame a generar un correo electrónico de respuesta para mi cliente que se está quejando de nuestros servicios.
```

### Salida de Ejemplo

````
Prompt Refinado:
Genera un correo electrónico de respuesta a [{} nombre del cliente] respecto a su queja sobre [{} problema de servicio] (por ejemplo, entrega tardía, soporte al cliente deficiente, error de facturación).

Explicación del Refinamiento:
El prompt original es claro pero carece de especificidad. Al agregar los corchetes y ejemplos, proporcionamos más contexto y facilitamos que la IA genere una respuesta relevante y empática.

Sugerencias para un Refinamiento Adicional:

Considera añadir más detalles sobre las interacciones previas del cliente o su historial de comunicación para ayudar a personalizar la respuesta.
También podrías especificar el tono del correo electrónico (por ejemplo, apologético, enfocado en la solución, neutral) para asegurar que la IA genere una respuesta que se alinee con tu enfoque deseado.
Ejemplo con refinamiento adicional:
Genera un correo electrónico de respuesta a [{} nombre del cliente] respecto a su queja sobre [{} problema de servicio] (por ejemplo, entrega tardía, soporte al cliente deficiente, error de facturación), con un tono de [{} tono] (por ejemplo, apologético, enfocado en la solución, neutral).

Correo de Respuesta:
Asunto: Re: [{} problema de servicio] - Disculpas y Solución

Estimado/a [{} nombre del cliente],

Le escribo para disculparme por el [{} problema de servicio] que experimentó con nuestro [{} servicio]. Entendemos el inconveniente que esto ha causado y queremos asegurarle que estamos tomando medidas inmediatas para resolver el problema.

[{} Describe brevemente las acciones que se están tomando para resolver el problema]

Valoramos su negocio y agradecemos sus comentarios. Si tiene alguna preocupación o pregunta adicional, no dude en ponerse en contacto con nosotros.

Gracias por su paciencia y comprensión.

Atentamente,
[{} Tu Nombre]

Explicación de las Optimizaciónes:
El correo de respuesta tiene como objetivo:

- Reconocer la queja del cliente y disculparse por el problema
- Describir las acciones que se están tomando para resolver el problema
- Mostrar aprecio por los comentarios y el negocio del cliente
- Proporcionar un punto de contacto claro para futuras comunicaciones

Esta respuesta pretende abordar las preocupaciones del cliente, demostrar un compromiso para resolver el problema y mantener una relación positiva.
````

## Consejos para una Configuración Efectiva

- **Sé Específico**: Define claramente el contexto de tu prompt para guiar al agente de manera efectiva.
- **Itera**: No dudes en refinar tu prompt varias veces para obtener resultados óptimos.
- **Usa Ejemplos**: Proporciona ejemplos de lo que esperas para ayudar al agente a entender mejor tus necesidades.
- **Prueba Variaciones**: Experimenta con diferentes formulaciones y estructuras para ver cuáles generan los mejores resultados.
- **Ciclo de Retroalimentación**: Utiliza las sugerencias para un mayor refinamiento y mejorar continuamente tus prompts.

## Artículos Relacionados
Continúa explorando nuestra colección de [Plantillas de Agente](/en-us/agent-templates/) para descubrir más ideas de agentes de IA en acción!