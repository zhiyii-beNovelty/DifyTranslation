---
metatitle: Extractor de Datos de Correo Electrónico | Plantillas de Agentes | Guía del Usuario de FabriXAI
description: Esta es una guía del usuario para el Extractor de Datos de Correo Electrónico, un analizador de correo profesional para extraer información relevante de los correos electrónicos.
lang: es
permalink: /agent-templates/email-data-extractor
---

# Extractor de Datos de Correo Electrónico

El **Extractor de Datos de Correo Electrónico** es una herramienta de inteligencia artificial especializada diseñada para analizar el contenido de los correos electrónicos y extraer información relevante basada en campos de datos específicos. Mediante un formato JSON estructurado, la herramienta procesa el texto del correo electrónico para identificar elementos clave como el nombre del remitente, el asunto y el número de contacto. En los casos en que no se encuentra un campo de datos, el extractor asigna automáticamente el valor 'N/A'. Esto garantiza un resultado completo que se adapta tanto al contenido estructurado como no estructurado de los correos electrónicos, lo que lo hace ideal para el análisis de la comunicación empresarial y la gestión de datos.

## Inicio

Para comenzar, clona el **Extractor de Datos de Correo Electrónico**. Sigue "[Clonar desde Plantilla](/es-es/clonar-desde-plantilla)" para clonar y configurar tu agente de IA.

## Instrucciones de Configuración

### Entradas del Usuario

| Nombre de la Etiqueta      | Descripción                                                        | Instrucción                                                                                                    |
| -------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Campos de Datos            | Una lista de campos de datos de los que se desea extraer información del correo electrónico | Proporcione los nombres estructurados de los campos relevantes para los datos del correo electrónico            |
| Contenido del Correo       | El contenido del correo electrónico a ser analizado                | Envía el cuerpo completo del correo electrónico, asegúrate de que sea claro y conciso; considera incluir encabezados si son relevantes |

### Información

Puedes cargar archivos `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que cumpla con tus requisitos específicos.

### Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, refina tus prompts para obtener resultados más personalizados.

::: tip
Para instrucciones más detalladas sobre cómo configurar un agente de IA, por favor consulta [Configurar Agente de IA](/es/configurar-ai-agent/)
:::

## Entradas y salida de ejemplo

### Inputs de Ejemplo

- **Campos de datos**: Asunto, Nombre del remitente, Rol del remitente, Nombre de la empresa, Número de teléfono
- **Contenido del Correo**: Asunto: Oportunidad de Alianza Estratégica.

Estimada Jane,

Espero que este correo te encuentre bien.

Mi nombre es John Smith y soy el Gerente de Desarrollo de Negocios en Acme Software Solutions, un proveedor líder de productos de software de nivel empresarial.

Me pongo en contacto contigo porque creo que podría haber una gran oportunidad para que nuestras empresas puedan colaborar.

Acme Software Solutions ha desarrollado una suite de herramientas que ayudan a negocios como el tuyo a optimizar operaciones, mejorar la productividad y fomentar el crecimiento.

Me encantaría tener la oportunidad de discutir cómo podríamos trabajar juntos.

Por favor, hazmelo saber si tienes disponibilidad para una llamada esta semana al 555-1234567 para explorar las posibilidades.

Gracias por tu tiempo y espero hablar contigo pronto.

Saludos cordiales,

John Smith,  
Gerente de Desarrollo de Negocios,  
Acme Software Solutions.

### Salida de ejemplo

```
{
  "Asunto": "Oportunidad para una asociación estratégica",
  "Nombre del remitente": "John Smith",
  "Rol del remitente": "Gerente de Desarrollo de Negocios",
  "Nombre de la empresa": "Acme Software Solutions",
  "Número de teléfono": "555-1234567"
}
```

## Consejos para una Configuración Efectiva

- **Define Campos de Datos Claros**: Establece con claridad los campos de datos que necesitas extraer para asegurar una salida JSON precisa y relevante.
- **Usa Contenido de Correo Electrónico Conciso**: Mantén el contenido del correo electrónico enfocado y directo; correos electrónicos largos o complejos pueden generar una extracción de datos poco clara.
- **Revisa la Salida Regularmente**: Prueba tus configuraciones regularmente para asegurar que la salida cumpla con tus expectativas y ajústalas según sea necesario.
- **Ajusta el Modelo de Inteligencia Artificial según sea necesario**: Si el modelo predeterminado no se adapta a tus necesidades, explora modelos alternativos para obtener un mejor rendimiento potencial.
- **Utiliza Entradas de Muestra como Guía**: Consulta las entradas de muestra proporcionadas para estructurar eficazmente el contenido de tu correo electrónico y obtener resultados de extracción óptimos.

## Artículos Relacionados
¡Continúa explorando nuestra colección de [plantillas de agentes](/en-us/agent-templates/) para descubrir más ideas de agentes de inteligencia artificial en acción!