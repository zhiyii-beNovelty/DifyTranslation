---
metatitle: Convertisseur de Code | Modèles d'Agents | Guide utilisateur FabriXAI
description: Ceci est un guide utilisateur pour l'agent Convertisseur de Code, qui aide à convertir le code d'un langage de programmation à un autre tout en assurant la fonctionnalité.
lang: fr
permalink: /agent-templates/code-convertor
---

# Convertisseur de Code

Le **Convertisseur de Code** est un agent IA conçu pour aider les programmeurs à convertir du code d'un langage de programmation à un autre. En spécifiant les langages de programmation initial et final, ainsi que le code à convertir, les utilisateurs peuvent compter sur l'agent pour effectuer des traductions précises. L'agent garantit que la fonctionnalité du code reste intacte, tout en fournissant des commentaires dans le code pour souligner tout changement significatif effectué pendant le processus de conversion. Dans les cas où la conversion ne peut pas être effectuée, l'agent expliquera la raison. Cela fait du Convertisseur de Code un outil précieux pour les développeurs cherchant à travailler avec différents langages de Guide de l'utilisateur FabriXAI
description: Ceci est un guide utilisateur pour l'agent Convertisseur de Code, qui aide à convertir le code d'un langage de programmation à un autre tout en assurant la fonctionnalité.
lang: fr
permalink: /agent-templates/code-convertor
---

# Convertisseur de Code

Le **Convertisseur de Code** est un agent IA conçu pour aider les programmeurs à convertir du code d'un langage de programmation à un autre. En spécifiant les langages de programmation initial et final, ainsi que le code à convertir, les utilisateurs peuvent compter sur l'agent pour effectuer des traductions précises. L'agent garantit que la fonctionnalité du code reste intacte, tout en fournissant des commentaires dans le code pour souligner tout changement significatif effectué pendant le processus de conversion. Dans les cas où la conversion ne peut pas être effectuée, l'agent expliquera la raison. Cela fait du Convertisseur de Code un outil précieux pour les développeurs cherchant à travailler avec différents langages de programmation.

## Commencer

Pour commencer, assurez-vous d'avoir cloné le **Convertisseur de Code**. Suivez [Créer à partir de modèles](/fr-fr/create-from-templates/) pour cloner et configurer votre agent IA.

## Instructions de Configuration

### Entrées Utilisateur

| Nom de l'étiquette      | Description                                                     | Instruction                                                                              |
| ----------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Langage Initial         | Le langage de programmation du code d'entrée.                   | Spécifiez un langage tel que Python, Java, C++, etc.                                     |
| Langage Final           | Le langage de programmation pour le code de sortie.             | Choisissez un langage différent du langage initial pour la conversion.                   |
| Code                    | Le code réel qui doit être converti.                            | Fournissez un extrait de code complet qui respecte la syntaxe du langage initial.        |

### Connaissance

Vous pouvez téléverser des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé répondant à vos exigences spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos invites pour des sorties personnalisées.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent IA, veuillez vous référer à [Configurer l'agent IA](/fr-fr/configurer-ai-agent/)
:::

## Exemples d’Entrées et de Sorties

### Exemples d'Entrées

- **Langage Initial** : Python
- **Langage Final** : C
- **Code** : from datetime import datetime\nnow = datetime.now()\ncurrent_time = now.strftime("%H:%M:%S")\nprint("Current Time =", current_time)

### Exemple de Sortie

```
#include <stdio.h>
#include <time.h>

int main() {
    time_t now;
    struct tm *current_time;

    // Obtenir l'heure actuelle
    time(&now);
    current_time = localtime(&now);

    // Formater l'heure en HH:MM:SS
    char time_str[9];
    strftime(time_str, sizeof(time_str), "%H:%M:%S", current_time);

    // Afficher l'heure actuelle
    printf("Heure actuelle = %s\n", time_str);

    return 0;
}
```

## Astuces pour une Configuration Efficace

- **Clarifiez l'objectif de votre code** : Assurez-vous de décrire clairement ce que le code est censé faire pour aider l'agent à comprendre le contexte.
- **Restez simple** : Utilisez des exemples simples et évitez un code trop complexe pour garantir une conversion précise.
- **Vérifiez la mise en forme de votre code** : Assurez-vous que les langages de programmation et les extraits de code sont correctement formatés avant de soumettre.
- **Testez les sorties** : Après avoir reçu le code de sortie, compilez et exécutez-le dans l'environnement de la langue cible pour assurer son bon fonctionnement.
- **Utilisez les commentaires judicieusement** : Si vous téléversez du code avec des commentaires, assurez-vous qu'ils sont concis et pertinents pour une meilleure compréhension pendant la conversion.

## Articles Connexes
