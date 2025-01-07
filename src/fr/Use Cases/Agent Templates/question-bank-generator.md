---
metatitle: Générateur de Banque de Questions | Modèles d'Agents | Guide Utilisateur FabriXAI
description: Il s'agit d'un guide utilisateur pour configurer et utiliser l'agent Générateur de Banque de Questions afin de créer des questions à choix multiples personnalisées.
lang: fr-FR
permalink: /agent-templates/question-bank-generator
---

# Générateur de Banque de Questions

Le **Générateur de Banque de Questions** est un agent intelligent conçu pour créer des questions à choix multiples basées sur des sujets spécifiques dérivés du contenu web fourni. L'agent évalue la compréhension de l'utilisateur en formulant des questions qui couvrent divers niveaux de difficulté, de facile à difficile, garantissant une évaluation complète des concepts clés. Avec la capacité de générer à la fois des options de réponse à choix unique et à choix multiples, cet outil adapte efficacement les évaluations à des fins éducatives. Il est idéal pour les éducateurs, les étudiants et toute personne souhaitant renforcer ses connaissances de manière Guide de l'utilisateur FabriXAI
description: Il s'agit d'un guide utilisateur pour configurer et utiliser l'agent Générateur de Banque de Questions afin de créer des questions à choix multiples personnalisées.
lang: fr
permalink: /agent-templates/question-bank-generator
---

# Générateur de Banque de Questions

Le **Générateur de Banque de Questions** est un agent intelligent conçu pour créer des questions à choix multiples basées sur des sujets spécifiques dérivés du contenu web fourni. L'agent évalue la compréhension de l'utilisateur en formulant des questions qui couvrent divers niveaux de difficulté, de facile à difficile, garantissant une évaluation complète des concepts clés. Avec la capacité de générer à la fois des options de réponse à choix unique et à choix multiples, cet outil adapte efficacement les évaluations à des fins éducatives. Il est idéal pour les éducateurs, les étudiants et toute personne souhaitant renforcer ses connaissances de manière exhaustive.

## Démarrage

Pour commencer, assurez-vous d'avoir cloné le **Générateur de Banque de Questions**. Suivez [Créer à partir des modèles](/en-us/create-from-templates/) pour cloner et configurer votre agent d'IA.

## Instructions de Configuration

### Entrées de l'utilisateur

| Nom de l'étiquette | Description | Instruction |
| ------------------- | ----------- | ----------- |
| Sujet | Le sujet spécifique pour générer les questions | Spécifiez clairement le sujet ; assurez-vous de sa pertinence pour le public cible. |
| URL de la page Web (Source du concept) | Le lien vers la page Web contenant des informations ou des références pour générer des questions | Fournissez une URL valide qui contient un contenu complet sur le sujet choisi. |
| Nombre de questions | Le nombre total de questions à générer | Entrez un nombre représentant combien de questions vous souhaitez créer (par exemple, entre 1 et 10). |

### Connaissances

Vous pouvez télécharger des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé répondant à vos exigences spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos requêtes pour des résultats plus personnalisés.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent d'IA, veuillez vous référer à [Configurer l'agent d'IA](/en-us/configuer-ai-agent/)
:::

## Exemples d'Entrées et de Sorties

### Exemples d'Entrées

- **Sujet** : Python
- **URL de la page Web (Source du concept)** : "https://www.guru99.com/python-tutorials.html"
- **Nombre de questions** : 3

### Exemple de sortie

```
Question 1 :
Quel est l'objectif principal de l'ISO 27001 ?
A) Gestion des dossiers financiers
B) Gestion de la sécurité de l'information
C) Gestion des relations avec les clients
D) Gestion des ressources humaines
Réponse correcte : B

Question 2 :
Lequel des éléments suivants est considéré comme un actif tangible ?
A) Réputation
B) Conformité légale
C) Ordinateur portable
D) Propriété intellectuelle
Réponse correcte : C

Question 3 :
Lors du télétravail, laquelle des actions suivantes N'EST PAS recommandée ?
A) Utiliser des appareils autorisés
B) Utiliser des appareils publics partagés
C) Faire attention aux accès non autorisés
D) Travailler à domicile
Réponse correcte : B
```

## Conseils pour une Configuration Efficace

- **Clarifiez votre sujet** : Assurez-vous que le sujet est spécifique et bien défini pour produire des questions pertinentes.
- **Utilisez des sources fiables** : Fournissez des URL menant à des informations réputées et complètes pour améliorer la qualité des questions.
- **Précisez le nombre de questions** : Indiquez un nombre approprié de questions pour maintenir la concentration et le détail dans les évaluations.
- **Examinez les résultats** : Vérifiez les questions générées pour leur clarté et leur pertinence afin d'affiner davantage vos outils éducatifs.
- **Expérimentez avec les entrées** : Ajustez le sujet et le nombre de questions en fonction des retours et des résultats pour obtenir les meilleurs résultats.

## Articles Connexes

