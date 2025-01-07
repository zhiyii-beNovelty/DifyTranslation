---
metatitle: Convertidor de Código | Plantillas de Agentes | Guía del Usuario de FabriXAI
description: Esta es una guía del usuario para el agente Convertidor de Código, que ayuda a convertir código de un lenguaje de programación a otro asegurando su funcionalidad.
lang: es-ES
permalink: /agent-templates/code-convertor
---

# Convertidor de Código

El **Convertidor de Código** es un agente de IA diseñado para ayudar a los programadores a convertir código de un lenguaje de programación a otro. Al especificar los lenguajes de programación inicial y final, así como el código que se va a convertir, los usuarios pueden confiar en el agente para realizar traducciones precisas. El agente garantiza que la funcionalidad del código permanezca intacta, mientras también proporciona comentarios dentro del código para resaltar cualquier cambio significativo realizado durante el proceso de conversión. En caso de que no se pueda realizar la conversión, el agente explicará la razón. Esto hace del Convertidor de Código una herramienta valiosa para los desarrolladores que buscan trabajar con diferentes lenguajes de Guía del Usuario de FabriXA
description: Esta es una guía del usuario para el agente Convertidor de Código, que ayuda a convertir código de un lenguaje de programación a otro asegurando su funcionalidad.
lang: es
permalink: /agent-templates/code-convertor
---

# Convertidor de Código

El **Convertidor de Código** es un agente de IA diseñado para ayudar a los programadores a convertir código de un lenguaje de programación a otro. Al especificar los lenguajes de programación inicial y final, así como el código que se va a convertir, los usuarios pueden confiar en el agente para realizar traducciones precisas. El agente garantiza que la funcionalidad del código permanezca intacta, mientras también proporciona comentarios dentro del código para resaltar cualquier cambio significativo realizado durante el proceso de conversión. En caso de que no se pueda realizar la conversión, el agente explicará la razón. Esto hace del Convertidor de Código una herramienta valiosa para los desarrolladores que buscan trabajar con diferentes lenguajes de programación.

## Comenzando

Para comenzar, asegúrate de haber clonado el **Convertidor de Código**. Sigue [Crear Desde Plantillas](/en-us/create-from-templates/) para clonar y configurar tu agente de IA.

## Instrucciones de Configuración

### Entradas de Usuario

| Nombre de la Etiqueta | Descripción                                      | Instrucción                                                                                        |
| --------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Lenguaje Inicial      | El lenguaje de programación del código de entrada. | Especifica un lenguaje como Python, Java, C++, etc.                                                |
| Lenguaje Final        | El lenguaje de programación para el código de salida. | Elige un lenguaje al que convertir, diferente del lenguaje inicial.                               |
| Código                | El código real que necesita ser convertido.       | Proporciona un fragmento de código completo que cumpla con la sintaxis del lenguaje inicial.        |

### Conocimiento

Puedes subir archivos `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que cumpla con tus requisitos específicos.

### Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA compatibles. Si es necesario, refina tus indicaciones para obtener resultados más personalizados.

::: tip
Para obtener instrucciones más detalladas sobre cómo configurar un agente de IA, por favor consulta [Configurar Agente de IA](/en-us/configuer-ai-agent/)
:::

## Ejemplos de Entrada y Salida

### Ejemplos de Entrada

- **Lenguaje Inicial**: Python
- **Lenguaje Final**: C
- **Código**: from datetime import datetime\nnow = datetime.now()\ncurrent_time = now.strftime("%H:%M:%S")\nprint("Current Time =", current_time)

### Ejemplo de Salida

```
#include <stdio.h>
#include <time.h>

int main() {
    time_t now;
    struct tm *current_time;

    // Obtener el tiempo actual
    time(&now);
    current_time = localtime(&now);

    // Formatear el tiempo como HH:MM:SS
    char time_str[9];
    strftime(time_str, sizeof(time_str), "%H:%M:%S", current_time);

    // Imprimir el tiempo actual
    printf("Tiempo Actual = %s\n", time_str);

    return 0;
}
```

## Consejos para una Configuración Efectiva

- **Aclara el propósito de tu código**: Asegúrate de describir claramente lo que se supone que debe hacer el código para ayudar al agente a comprender el contexto.
- **Manténlo simple**: Usa ejemplos directos y evita fragmentos de código demasiado complejos para garantizar una conversión precisa.
- **Verifica tus entradas**: Revisa que los lenguajes de programación y fragmentos de código estén correctamente formateados antes de enviarlos.
- **Prueba las salidas**: Después de recibir el código generado, compílalo y ejecútalo en el entorno del lenguaje de destino para asegurar su funcionalidad.
- **Usa sabiamente los comentarios**: Si estás subiendo código con comentarios, asegúrate de que sean concisos y relevantes para una mejor comprensión de la conversión.

## Artículos Relacionados
