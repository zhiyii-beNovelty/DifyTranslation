---
metatitle: Extractor de Datos de Correo Electrónico | Plantillas de Agente | Guía del Usuario de FabriXAI
description: Esta es una guía del usuario para el Extractor de Datos de Correo Electrónico, un analizador de correos electrónicos profesional para extraer información relevante de los correos electrónicos.
lang: es-ES
permalink: /agent-templates/email-data-extractor
---

# Extractor de Datos de Correo Electrónico

El **Extractor de Datos de Correo Electrónico** es una herramienta de IA especializada diseñada para analizar el contenido de los correos electrónicos y extraer información relevante basada en campos de datos específicos. Utilizando un formato JSON estructurado, el agente procesa el texto del correo electrónico para identificar elementos clave como el nombre del remitente, el asunto y el número de contacto. En casos donde no se encuentra un campo de datos, el extractor asigna automáticamente el valor 'N/D'. Esto garantiza una salida completa que se adapta tanto al contenido de correos electrónicos estructurados como no estructurados, lo que lo hace ideal para el análisis de comunicaciones empresariales y la gestión de datos.

## Primeros Pasos

Para comenzar, asegúrate de haber clonado el **Extractor de Datos de Correo Electrónico**. Sigue "[Clonar desde Plantilla](/es-es/clonar-desde-plantilla)" para clonar y configurar tu Agente de Inteligencia Artificial.

## Instrucciones para la Configuración

### Entradas del Usuario

| Nombre de la Etiqueta | Descripción                                               | Instrucción                                                                                                   |
| --------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Campos de Datos       | Una lista de los campos de datos que deseas extraer del correo electrónico | Proporciona nombres estructurados de campos relevantes para los datos del correo electrónico                   |
| Contenido del Correo  | El contenido del correo electrónico que se analizará      | Envía el cuerpo completo del correo electrónico, asegurándote de que sea claro y conciso; considera incluir encabezados si es relevante |

### Información

Puedes subir archivos `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que satisfaga tus requisitos específicos.

### Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, refina tus indicaciones para obtener salidas más personalizadas.

::: consejo
Para obtener instrucciones más detalladas sobre configurar un Agente de IA, consulta [Configurar Agente de IA](/es-es/configure-ai-agent/)
:::

## Entradas de Muestra y Salidas

### Entradas de Muestra

- **Campos de Datos**: Asunto, Nombre del Remitente, Cargo del Remitente, Nombre de la Empresa, Número de Teléfono
- **Contenido del Correo Electrónico**: Asunto: Oportunidad para una Asociación Estratégica. Estimada Jane, espero que se encuentre bien. Mi nombre es John Smith y soy el Gerente de Desarrollo de Negocios en Acme Software Solutions, un proveedor líder de productos de software empresariales. Me pongo en contacto contigo porque creo que podría haber una gran oportunidad para que nuestras empresas colaboren. Acme Software ha desarrollado una suite de herramientas poderosas que ayudan a empresas como la tuya a optimizar operaciones, mejorar la productividad e impulsar el crecimiento. Me encantaría tener la oportunidad de discutir cómo podríamos trabajar juntos. Por favor, házmelo saber si tienes disponibilidad para una llamada esta semana al 555-1234567 para explorar las posibilidades. Gracias por tu tiempo y espero hablar contigo pronto. Saludos cordiales, John Smith, Gerente de Desarrollo de Negocios, Acme Software Solutions.

### Salida de Muestra

```
{
  "Asunto": "Oportunidad para una Asociación Estratégica.",
  "Nombre del Remitente": "John Smith",
  "Cargo del Remitente": "Gerente de Desarrollo de Negocios",
  "Nombre de la Empresa": "Acme Software Solutions",
  "Número de Teléfono": "555-1234567"
}
```

## Consejos para una Configuración Efectiva

- **Define Campos de Datos Claros**: Describe claramente los campos de datos que necesitas extraer para asegurar una salida JSON precisa y relevante.
- **Utiliza Contenido del Correo Conciso**: Mantén el contenido del correo electrónico enfocado y directo; correos electrónicos largos o complejos pueden llevar a una extracción de datos ambigua.
- **Revisa la Salida Regularmente**: Prueba tus configuraciones de manera regular para asegurarte de que la salida cumple con tus expectativas y ajústalas según sea necesario.
- **Ajusta el Modelo de IA según Sea Necesario**: Si el modelo predeterminado no se adapta a tus necesidades, explora modelos alternativos para un rendimiento potencialmente mejor.
- **Utiliza Entradas de Muestra como Guía**: Consulta las entradas de muestra proporcionadas para estructurar efectivamente el contenido de tus correos electrónicos y lograr resultados de extracción óptimos.

## Artículos Relacionados
Continúa explorando nuestra colección de [Plantillas de Agentes](/es-es/agent-templates/) para descubrir más ideas de agentes de IA en funcionamiento!