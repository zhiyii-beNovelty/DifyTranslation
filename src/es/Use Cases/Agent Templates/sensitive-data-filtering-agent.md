---
metatitle: Agente de Filtrado de Datos Sensibles | Plantillas de Agentes | Guía del Usuario FabriXAI
description: Esta es una guía del usuario para el Agente de Filtrado de Datos Sensibles, diseñado para ayudar a los usuarios a salvaguardar la información personal mediante la identificación y ocultación automática de datos sensibles dentro de un texto dado.
lang: es-ES
permalink: /agent-templates/sensitive-data-filtering-agent
---

# Agente de Filtrado de Datos Sensibles

El **Agente de Filtrado de Datos Sensibles** está diseñado para ayudar a los usuarios a salvaguardar la información personal mediante la identificación automática y el enmascaramiento de datos sensibles dentro de un texto dado. Apuntando a categorías específicas como números de HKID, números de teléfono, direcciones, información financiera y fechas de nacimiento, este agente reemplaza sistemáticamente los datos sensibles con marcadores de posición predefinidos. Los usuarios pueden mantener la integridad de su comunicación y el cumplimiento de las regulaciones de privacidad de datos, mientras aseguran que los detalles confidenciales no se filtren, convirtiéndolo en una herramienta invaluable para profesionales que manejan documentos Guía del Usuario de FabriXA
description: Esta es una guía del usuario para el Agente de Filtrado de Datos Sensibles, diseñado para ayudar a los usuarios a salvaguardar la información personal mediante la identificación y ocultación automática de datos sensibles dentro de un texto dado.
lang: es
permalink: /agent-templates/sensitive-data-filtering-agent
---

# Agente de Filtrado de Datos Sensibles

El **Agente de Filtrado de Datos Sensibles** está diseñado para ayudar a los usuarios a salvaguardar la información personal mediante la identificación automática y el enmascaramiento de datos sensibles dentro de un texto dado. Apuntando a categorías específicas como números de HKID, números de teléfono, direcciones, información financiera y fechas de nacimiento, este agente reemplaza sistemáticamente los datos sensibles con marcadores de posición predefinidos. Los usuarios pueden mantener la integridad de su comunicación y el cumplimiento de las regulaciones de privacidad de datos, mientras aseguran que los detalles confidenciales no se filtren, convirtiéndolo en una herramienta invaluable para profesionales que manejan documentos sensibles.

## Empezando

Para comenzar, asegúrate de haber clonado el **Agente de Filtrado de Datos Sensibles**. Sigue [Crear desde Plantillas](/en-us/create-from-templates/) para clonar y configurar tu agente de IA.

## Instrucciones de Configuración

### Entradas de Usuario

No se requieren campos de entrada para estos agentes de IA.

### Conocimiento

Puedes cargar archivos `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que cumpla con tus requisitos específicos.

### Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, refina tus indicaciones para obtener salidas más personalizadas.

::: tip
Para obtener instrucciones más detalladas sobre cómo configurar un agente de IA, consulta [Configurar Agente de IA](/en-us/configuer-ai-agent/)
:::

## Entradas y Salidas de Ejemplo

### Entradas de Ejemplo

```
Nombre completo: John Doe
HKID: A123456(7)
Número de teléfono: 9123 4567
Número de cuenta: 123-456-789
Fecha de nacimiento: 01/01/1990
Dirección: 23 Main St, Hong Kong
```

### Salida de Ejemplo

```
Basándome en las directrices proporcionadas, filtraré los datos sensibles del texto. Aquí está el texto modificado:

Nombre completo: John Doe
HKID: XXXXXXXX(X)
Número de teléfono: XXXXXXXX
Número de cuenta: XXXXXXXX
Fecha de nacimiento: XX/XX/XXXX
Dirección: XXXX (dirección)

Reemplacé los datos sensibles de la siguiente manera:

1. HKID: A123456(7) -> XXXXXXXX(X)
2. Número de teléfono: 9123 4567 -> XXXXXXXX
3. Número de cuenta: 123-456-789 -> XXXXXXXX
4. Fecha de nacimiento: 01/01/1990 -> XX/XX/XXXX
5. Dirección: 23 Main St, Hong Kong -> XXXX (dirección)

Ten en cuenta que reemplacé todas las ocurrencias de datos sensibles en el texto, asegurando que el texto original permanezca sin cambios excepto por el filtrado de datos sensibles.
```

## Consejos para una Configuración Efectiva

- **Comprender los Tipos de Datos**: Conoce los diversos tipos de datos sensibles que necesitas filtrar para garantizar una cobertura completa.
- **Proporcionar Ejemplos Contextuales**: Sube ejemplos de datos sensibles para ayudar al agente a identificar y reemplazar esta información con precisión.
- **Probar con Entradas Diversas**: Utiliza diferentes formatos de datos sensibles para verificar el rendimiento del agente en múltiples escenarios.
- **Monitorear el Rendimiento del Agente**: Revisa regularmente las salidas para detectar cualquier dato omitido o falsos positivos y ajusta las configuraciones según sea necesario.
- **Mantenerte al Día con las Regulaciones**: Mantente informado sobre las leyes de privacidad de datos para garantizar que las prácticas de filtrado del agente cumplan con las normativas.

## Artículos Relacionados
