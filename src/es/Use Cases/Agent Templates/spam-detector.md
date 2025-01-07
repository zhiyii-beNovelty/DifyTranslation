---
metatitle: Detector de Spam | Plantillas de Agente | Guía del Usuario de FabriXAI
description: Esta es una guía del usuario para configurar y utilizar el agente de IA Detector de Spam para identificar mensajes no deseados de manera eficiente.
lang: es-ES
permalink: /agent-templates/spam-detector
---

# Detector de Spam

El agente **Detector de Spam** está diseñado para ayudar a los usuarios a determinar si un correo electrónico o mensaje de texto es spam o no. Al analizar diversos aspectos del mensaje, incluyendo contenido no solicitado, enlaces sospechosos, solicitudes de información personal, lenguaje urgente y errores gramaticales, el Detector de Spam proporciona un veredicto claro de "Spam" o "No es spam." Además, ofrece una breve explicación del razonamiento detrás de la decisión, ayudando a los usuarios a comprender los factores que influyen en la evaluación. Esta herramienta utiliza directrices definidas y una calificación de confianza para mejorar la precisión de su detección de Guía del Usuario de FabriXA
description: Esta es una guía del usuario para configurar y utilizar el agente de IA Detector de Spam para identificar mensajes no deseados de manera eficiente.
lang: es
permalink: /agent-templates/spam-detector
---

# Detector de Spam

El agente **Detector de Spam** está diseñado para ayudar a los usuarios a determinar si un correo electrónico o mensaje de texto es spam o no. Al analizar diversos aspectos del mensaje, incluyendo contenido no solicitado, enlaces sospechosos, solicitudes de información personal, lenguaje urgente y errores gramaticales, el Detector de Spam proporciona un veredicto claro de "Spam" o "No es spam." Además, ofrece una breve explicación del razonamiento detrás de la decisión, ayudando a los usuarios a comprender los factores que influyen en la evaluación. Esta herramienta utiliza directrices definidas y una calificación de confianza para mejorar la precisión de su detección de spam.

## Inicio

Para comenzar, asegúrate de haber clonado el **Detector de Spam**. Sigue [Crear desde plantillas](/es/create-from-templates/) para clonar y configurar tu agente de IA.

## Instrucciones de configuración

### Entradas del Usuario

| Nombre de la etiqueta                 | Descripción                                                       | Instrucción                                                                                          |
|---------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Correo Electrónico o Mensaje de Texto | Introduzca el correo electrónico o mensaje de texto que desea evaluar. | Incluya el texto completo del mensaje, manteniendo el formato adecuado. Asegúrese de que el mensaje sea claro y relevante. |

### Conocimiento

Puedes cargar archivos `.pdf` o `.txt` para brindar al agente un contexto personalizado que satisfaga tus necesidades específicas.

### Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, ajusta tus entradas para obtener resultados más personalizados.

::: tip
Para instrucciones más detalladas sobre cómo configurar un agente de IA, consulta [Configurar Agente de IA](/en-us/configurar-ai-agent/)
:::

## Entradas y Salidas de muestra

### Entradas de muestra

- **Correo o Mensaje de texto**: Hola, gracias por trabajar con nosotros. Su factura por 373,75 $ venció el 28 de agosto de 2016. Si ya la ha pagado, por favor, ignore este correo electrónico y le pedimos disculpas por las molestias. Si no la ha pagado, por favor, hágalo lo antes posible. Para ver su factura, visite [link]. Si tiene algunas preguntas o desea organizar un pago alternativo, no dude en ponerse en contacto. Gracias, NJW Limited

### Salida de muestra

```
**Veredicto:** No es spam

**Explicación:**

* El correo electrónico no es no solicitado, ya que parece ser una notificación sobre una factura que venció en una fecha específica.
* No hay enlaces sospechosos, pero el enlace proporcionado probablemente es un enlace legítimo para ver la factura.
* El correo electrónico no solicita información personal.
* Hay un sentido de urgencia, pero no es amenazante. El lenguaje es educado y alienta al destinatario a actuar si no ha pagado la factura.
* No hay errores excesivos de gramática y ortografía.

**Nivel de Confianza:** 5

Estoy muy seguro de este veredicto porque el correo electrónico parece ser una notificación legítima de una empresa (NJW Limited) sobre una factura que venció. El lenguaje es profesional y cortés, y la solicitud para ver la factura es razonable. La única posible señal de alerta es el sentido de urgencia, pero no es agresivo o amenazante. En general, el correo electrónico parece ser un intento genuino de notificar al destinatario sobre una factura, en lugar de un mensaje de spam.
```

## Consejos para una Configuración Efectiva

- **Proporcione un contexto claro**: Asegúrese de que sus entradas sean claras y libres de ambigüedad para ayudar al agente a realizar evaluaciones precisas.
- **Use muestras relevantes**: Pruebe al agente con diferentes tipos de mensajes para evaluar su capacidad y ajustar la configuración en consecuencia.
- **Actualice regularmente el conocimiento**: Mantenga actualizados sus documentos cargados para asegurar que el agente tenga el mejor contexto para la evaluación.
- **Monitoree el rendimiento**: Revise el nivel de confianza de las respuestas para evaluar la fiabilidad y realizar los ajustes necesarios.
- **Experimente con diferentes modelos**: Pruebe varios modelos de IA para determinar cuál ofrece los mejores resultados para sus necesidades.

## Artículos Relacionados
