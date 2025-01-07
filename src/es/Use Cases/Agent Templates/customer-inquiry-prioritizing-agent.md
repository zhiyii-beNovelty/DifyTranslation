---
metatitle: Agente de Priorización de Consultas de Clientes | Plantillas de Agentes | Guía del Usuario de FabriXAI
description: Esta es una guía del usuario para el Agente de Priorización de Consultas de Clientes para clasificar las consultas de los clientes según su urgencia.
lang: es
permalink: /agent-templates/customer-inquiry-prioritizing-agent
---

# Agente de priorización de consultas de clientes

El **Agente de priorización de consultas de clientes** está diseñado para analizar consultas de clientes y clasificarlas en uno de cinco niveles de urgencia: Urgente, Alto, Medio, Bajo o General. Al evaluar la urgencia, gravedad y el potencial de generar problemas adicionales en cada consulta, el agente ayuda a las empresas a priorizar de manera efectiva las solicitudes de servicio al cliente. Esto asegura que los problemas críticos se aborden con prontitud, mejorando la satisfacción del cliente y la eficiencia operativa.

## Primeros Pasos

Para comenzar, asegúrate de haber clonado el **Agente para Priorizar Consultas de Clientes**. Sigue [Crear desde plantillas](/es/create-from-templates/) para clonar y configurar tu agente de inteligencia artificial.

## Instrucciones de Configuración

### Entradas del Usuario

| Nombre de la Etiqueta | Descripción                                               | Instrucción                           |
| --------------------- | --------------------------------------------------------- | ------------------------------------- |
| Consulta del Cliente  | El texto de la consulta del cliente que se clasificará.  | La entrada debe ser una descripción clara y concisa de la consulta, idealmente limitada a 200 palabras. Debe incluir los problemas, preocupaciones o solicitudes principales. |

### Base de Conocimiento

Puedes subir archivos `.pdf` o `.txt` para proporcionar al agente un contexto personalizado que satisfaga tus requisitos específicos.

### Modelos de IA

El modelo predeterminado es *Llama 3.1 8B Instruct*, pero también puedes explorar otros modelos de IA soportados. Si es necesario, ajusta tus indicaciones para obtener resultados más personalizados.

::: tip
Para obtener instrucciones más detalladas sobre cómo configurar un agente de IA, consulta [Configurar Agente de IA](/en-us/configure-ai-agent/)
:::

## Ejemplos de Entradas y Salida

### Entradas de ejemplo

- **Consulta de cliente**: Estoy intentando completar un pedido urgente para un cliente, pero no puedo iniciar sesión en mi cuenta en su plataforma de comercio electrónico. He sido bloqueado y no puedo acceder a mis herramientas de gestión de pedidos. Esto me impide cumplir con un pedido urgente para un cliente importante. Necesito que esto se resuelva de inmediato ya que está causando una interrupción significativa en mis operaciones comerciales.

### Salida de ejemplo

```
Urgente

El cliente no puede iniciar sesión en su cuenta, lo que le impide cumplir con un pedido urgente para un cliente importante. Esto está causando una interrupción significativa en sus operaciones comerciales y requiere atención inmediata. El negocio del cliente está severamente afectado, y el problema necesita ser atendido rápidamente para evitar más consecuencias.
```

## Consejos para una configuración efectiva

- **Sé específico**: Proporciona consultas detalladas que ayuden al agente a analizarlas con mayor precisión para la clasificación de prioridad.
- **Limita la longitud**: Trata de mantener las consultas concisas; un límite de 200 palabras generalmente mejora la precisión de respuesta.
- **Usa lenguaje claro**: Evita jerga y términos ambiguos para que el agente comprenda mejor la consulta.
- **Prueba variantes**: Intenta diferentes versiones de consultas similares para ver cómo las clasifica el agente, optimizando eventualmente tus entradas.
- **Actualizaciones regulares**: Mantén la base de conocimientos actualizada para asegurar que el agente responda con la información más relevante.

## Artículos relacionados
Continúa explorando nuestra colección de [Plantillas de agentes](/en-us/agent-templates/) para descubrir más ejemplos de agentes de IA en funcionamiento!