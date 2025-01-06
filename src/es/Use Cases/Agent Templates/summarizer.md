---
metatitle: Resumidor | Plantillas de Agentes | Guía de Usuario de FabriXAI
description: Esta es una guía del usuario para configurar y utilizar el agente Resumidor de manera efectiva.
lang: es-ES
permalink: /agent-templates/summarizer
---

# Resumidor

El agente **Resumidor** está diseñado para condensar textos extensos en resúmenes concisos mientras retiene el significado central y el contexto del material original. Los usuarios pueden especificar el tono de la escritura, establecer un límite de palabras y proporcionar retroalimentación para refinar aún más el resumen. Esta versatilidad permite resúmenes que se ajustan a necesidades específicas, ya sea para lectura casual o análisis formal. Puedes personalizar el estilo de salida según tus preferencias, lo que lo convierte en una herramienta invaluable para procesar de manera eficiente grandes cantidades de información.

## Comenzando

Para empezar, asegúrate de haber clonado el **Resumidor**. Sigue [Crear desde Plantillas](/en-us/create-from-templates/) para clonar y configurar tu agente de IA.

## Instrucciones de Configuración

### Entradas del Usuario

| Nombre de la Etiqueta         | Descripción                                              | Instrucción                                         |
| ----------------------------- | -------------------------------------------------------- | --------------------------------------------------- |
| Texto a resumir               | El texto original que deseas resumir.                    | Proporciona párrafos claros y coherentes para resumir. |
| Tono de redacción del resumen | El tono deseado para el resumen (p. ej., casual, formal). | Especifica un tono que se adapte a tu audiencia.     |
| Límite de palabras            | El número máximo de palabras para el resumen.            | Establece un límite entre 50 y 100 palabras.        |

### Conocimiento

Puedes subir archivos `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que cumpla con tus requisitos específicos.

### Modelos de IA

El modelo por defecto es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA soportados. Si es necesario, ajusta tus solicitudes para obtener resultados más personalizados.

::: tip
Para instrucciones más detalladas sobre cómo configurar un agente de IA, por favor consulta [Configurar Agente de IA](/en-us/configure-ai-agent/)
:::

## Entradas y Salidas de Ejemplo

### Entradas de Ejemplo

- **Tono de escritura**: Casual
- **Límite de palabras**: 80
- **Texto**: El rápido avance de la tecnología de inteligencia artificial (IA) en los últimos años ha traído tanto oportunidades emocionantes como desafíos significativos. Por un lado, la IA ha permitido avances en campos como la salud, el transporte y la investigación científica, aumentando y potenciando las capacidades humanas de maneras notables. Los sistemas automatizados impulsados por IA están aumentando la eficiencia, desbloqueando nuevos conocimientos e incluso salvando vidas. Sin embargo, el auge de la IA también plantea importantes cuestiones éticas y sociales. A medida que los sistemas de IA se vuelven más sofisticados y autónomos, hay crecientes preocupaciones sobre temas como el sesgo algorítmico, la privacidad, el desplazamiento laboral y los riesgos existenciales de la IA avanzada. Una gobernanza reflexiva y un desarrollo cuidadoso de la IA serán críticos para asegurar que estas tecnologías se desplieguen de manera responsable y equitativa para beneficiar a la humanidad en su conjunto. En general, el potencial transformador de la IA es tanto tentador como problemático, requiriendo un delicado equilibrio entre la innovación y una consideración prudente de los amplios impactos de la tecnología.

### Salida de Ejemplo

```
El rápido progreso de la IA es muy emocionante pero también viene con algunos grandes desafíos. Está revolucionando el sector de la salud, el transporte y la investigación al hacer que los sistemas sean más inteligentes y eficientes. Sin embargo, con estos avances surgen preocupaciones como el sesgo, los problemas de privacidad, la pérdida de empleos e incluso riesgos para la existencia. Para beneficiarnos realmente de la IA, necesitaremos reglas inteligentes y un desarrollo cuidadoso para equilibrar la innovación con los amplios impactos de la tecnología. En general, el potencial de la IA es asombroso pero necesita ser gestionado de manera reflexiva.
```

## Consejos para una Configuración Efectiva

- **Define parámetros claros**: Especifica el tono de escritura y el límite de palabras de manera efectiva para asegurarte de que tu resumen cumpla con las expectativas.
- **Usa texto conciso**: Cuanto más claro y conciso sea el texto original, mejor será el resumen.
- **Refina tus entradas**: Si la salida no es lo que esperabas, ajusta tu tono de escritura o simplifica el texto proporcionado para mayor claridad.
- **Prueba diferentes tonos**: Experimenta con diferentes tonos de escritura para encontrar el estilo que mejor se adapte a las necesidades de tu audiencia.
- **Revisa la retroalimentación**: Utiliza el mecanismo de retroalimentación del agente para refinar tus resúmenes basándote en salidas anteriores.

## Artículos Relacionados
Continúa explorando nuestra colección de [Plantillas de Agentes](/en-us/agent-templates/) para descubrir más ideas de agentes de IA en acción!