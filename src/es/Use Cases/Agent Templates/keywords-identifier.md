---
metatitle: Identificador de Palabras Clave | Plantillas de Agentes | Guía del Usuario de FabriXAI
description: Esta es una guía de usuario para el Identificador de Palabras Clave, diseñado para extraer temas y tópicos clave de un texto dado.
lang: es
permalink: /agent-templates/keywords-identifier
---

# Identificador de Palabras Clave

El **Identificador de Palabras Clave** es un agente inteligente diseñado para extraer temas y tópicos clave de un texto dado. Al analizar el contenido, identifica y clasifica las palabras clave o etiquetas más relevantes que encapsulan las ideas y temas principales discutidos. Esta herramienta es particularmente útil para creadores de contenido, investigadores y especialistas en marketing digital que necesitan destilar rápidamente información de grandes volúmenes de texto. Garantiza que las palabras clave extraídas sean concisas y reflejen con precisión el contenido del texto, proporcionando una lista clasificada basada en su importancia.

## Comenzando

Para comenzar, asegúrate de haber clonado el **Identificador de Palabras Clave**. Sigue [Crear a partir de Plantillas](/en-us/create-from-templates/) para clonar y configurar tu agente de IA.

## Instrucciones de Configuración

### Entradas del Usuario

| Nombre de la Etiqueta      | Descripción                                              | Instrucción                                                  |
| -------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| Texto                      | El contenido del que deseas extraer palabras clave.     | Proporciona un texto claro para el análisis.                 |
| Número de Palabras Clave   | El número máximo de palabras clave o etiquetas que deseas extraer. | Especifica un número para limitar los resultados (por ejemplo, 5, 10, etc.). |

### Conocimiento

Puedes subir archivos `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que cumpla con tus requisitos específicos.

### Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, refina tus indicaciones para obtener salidas más personalizadas.

::: tip
Para instrucciones más detalladas sobre cómo configurar un agente de IA, consulta [Configurar Agente de IA](/en-us/configuer-ai-agent/)
:::

## Entradas de Ejemplo y Salida

### Entradas de Ejemplo

- **Texto**: El marketing en redes sociales es esencial para las empresas hoy en día. Ayuda a las marcas a conectarse con su audiencia, aumentar la visibilidad y fomentar la interacción. Al aprovechar plataformas como Facebook, Instagram y Twitter, las empresas pueden crear campañas dirigidas que resuenan con sus clientes.
- **Número de Palabras Clave**: 5

### Salida de Ejemplo

```
Basado en el texto, he extraído las 5 principales palabras clave/etiquetas que capturan los temas y tópicos principales. Aquí están:

1. **Marketing en Redes Sociales**: Este es el tema principal del texto y es la palabra clave/etiqueta más relevante.
2. **Branding**: El texto menciona conectarse con la audiencia, aumentar la visibilidad y fomentar la interacción, todo lo cual está relacionado con la construcción de una marca.
3. **Marketing Digital**: Esta palabra clave/etiqueta captura el aspecto en línea del marketing, que es un tema clave en el texto.
4. **Campañas Dirigidas**: El texto resalta la importancia de crear campañas que resuenen con los clientes, lo que implica un enfoque en el marketing dirigido.
5. **Presencia en Línea**: Esta palabra clave/etiqueta refleja la idea de que las empresas necesitan establecer una presencia en línea para conectarse con su audiencia y alcanzar sus objetivos de marketing.

Estas palabras clave/etiquetas capturan la esencia del texto y proporcionan un resumen conciso de los temas y tópicos principales.
```

## Consejos para una Configuración Efectiva

- **Proporciona Texto Claro**: Asegúrate de que el texto que proporcionas esté bien estructurado y sea relevante para las palabras clave que deseas extraer, para obtener mejores resultados.
- **Limita la Cantidad de Palabras Clave**: Especifica un número razonable de palabras clave para evitar saturar los resultados y enfocarte en los temas más significativos.
- **Utiliza Contexto Relevante**: Si es posible, sube documentos de apoyo que proporcionen contexto para mejorar la precisión en la extracción de palabras clave.
- **Prueba con Diversos Textos**: Experimenta con diferentes estilos y temáticas de texto para ver cómo se desempeña el agente con contenido variado.
- **Revisa los Resultados Regularmente**: Evalúa periódicamente las palabras clave extraídas para verificar su relevancia y precisión, y ajusta el texto de entrada o las configuraciones según sea necesario.

## Artículos Relacionados
Continúa explorando nuestra colección de [Plantillas de Agentes](/en-us/agent-templates/) para descubrir más ideas de agentes de IA en acción!