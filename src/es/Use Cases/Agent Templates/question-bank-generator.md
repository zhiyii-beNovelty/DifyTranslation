---
metatitle: Generador de Banco de Preguntas | Plantillas de Agente | Guía de Usuario de FabriXAI
description: Esta es una guía de usuario para configurar y usar el agente Generador de Banco de Preguntas para crear preguntas de opción múltiple personalizadas.
lang: es
permalink: /agent-templates/question-bank-generator
---

# Generador de Bancos de Preguntas

El **Generador de Bancos de Preguntas** es una herramienta inteligente diseñada para crear preguntas de opción múltiple basadas en temas específicos derivados de contenido web proporcionado. Esta herramienta evalúa la comprensión del usuario formulando preguntas que abarcan varios niveles de dificultad, desde fácil hasta difícil, asegurando una evaluación inclusiva de los conceptos clave. Capaz de generar opciones de respuesta con una sola respuesta correcta o con múltiples respuestas correctas, adapta las evaluaciones de manera efectiva para fines educativos. Es ideal para educadores, estudiantes y cualquier persona que busque fortalecer sus conocimientos de manera Guía del Usuario de FabriXA
description: Esta es una guía de usuario para configurar y usar el agente Generador de Banco de Preguntas para crear preguntas de opción múltiple personalizadas.
lang: es
permalink: /agent-templates/question-bank-generator
---

# Generador de Bancos de Preguntas

El **Generador de Bancos de Preguntas** es una herramienta inteligente diseñada para crear preguntas de opción múltiple basadas en temas específicos derivados de contenido web proporcionado. Esta herramienta evalúa la comprensión del usuario formulando preguntas que abarcan varios niveles de dificultad, desde fácil hasta difícil, asegurando una evaluación inclusiva de los conceptos clave. Capaz de generar opciones de respuesta con una sola respuesta correcta o con múltiples respuestas correctas, adapta las evaluaciones de manera efectiva para fines educativos. Es ideal para educadores, estudiantes y cualquier persona que busque fortalecer sus conocimientos de manera completa.

# Empezando

Para comenzar, asegúrate de haber clonado el **Generador de Banco de Preguntas**. Selecciona [Crear a partir de plantillas](/en-us/create-from-templates/) para clonar y configurar tu Agente de IA.

# Instrucciones de configuración

## Entradas del usuario

| Nombre de la Etiqueta            | Descripción                                               | Instrucción                                                                                     |
| ----------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Tema                           | El tema específico para generar las preguntas             | Especifica claramente el tema; asegura su relevancia para el público objetivo.                   |
| URL de la página web (Fuente conceptual) | El enlace a la página web que contiene información o referencias para generar preguntas | Proporciona una URL válida que contenga información sobre el tema elegido.                        |
| Número de Preguntas            | El número total de preguntas a generar                    | Ingresa el número de preguntas que deseas crear (por ejemplo, entre 1 y 10).                     |

## Conocimiento

Puedes subir archivos `.pdf` o `.txt` para dar al agente un contexto adaptado a tus requisitos específicos.

## Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, refina tus indicaciones para obtener resultados más personalizados.

::: tip
Para obtener instrucciones más detalladas sobre cómo configurar un agente de IA, consulta [Configurar Agente IA](/en-us/configure-ai-agent/)
:::

# Ejemplos de Entrada y Salida

## Ejemplos de entrada

- **Tema**: Python
- **URL de la página web (Fuente de referencia)**: "https://www.guru99.com/python-tutorials.html"
- **Número de preguntas**: 3

## Ejemplo de salida

```
Pregunta 1:
¿Cuál es el enfoque principal de ISO 27001?
A) gestionar registros financieros
B) gestionar la seguridad de la información
C) gestionar las relaciones con los clientes
D) gestionar recursos humanos
respuesta correcta: B

Pregunta 2:
¿Cuál de los siguientes se considera un activo tangible?
A) reputación
B) cumplimiento de la ley
C) portátil
D) propiedad intelectual
respuesta correcta: C

Pregunta 3:
Al trabajar a distancia, ¿cuál de las siguientes acciones NO se recomienda?
A) usar dispositivos autorizados
B) usar dispositivos públicos compartidos
C) tener cuidado con el acceso no autorizado
D) trabajar desde casa
respuesta correcta: B
```

# Consejos para una Configuración Efectiva

- **Aclarar tu tema**: Asegúrate de que el tema sea específico y bien definido para generar preguntas relevantes.
- **Utilizar fuentes confiables**: Proporciona URLs que conduzcan a información de buena reputación y completa para mejorar la calidad de las preguntas.
- **Especificar la cantidad de preguntas**: Indica un número apropiado de preguntas para mantener el enfoque y el detalle en las evaluaciones.
- **Revisar los resultados**: Verifica las preguntas generadas para asegurar claridad y relevancia, con el fin de refinar tus herramientas educativas.
- **Experimentar con los datos de entrada**: Ajusta el tema y el número de preguntas basándote en la retroalimentación y los resultados para maximizar la efectividad.

# Artículos Relacionados
