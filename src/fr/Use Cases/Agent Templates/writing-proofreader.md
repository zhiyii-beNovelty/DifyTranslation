---
metatitle: Correcteur d'écriture | Modèles d'agents | Guide de l'utilisateur FabriXAI
description: Ceci est un guide utilisateur pour configurer et utiliser l'agent IA Correcteur d'écriture afin de peaufiner un texte donné.
lang: fr-FR
permalink: /agent-templates/writing-proofreader
---

# Correcteur d'écriture

L'agent IA **Correcteur d'écriture** est conçu pour fournir des retours de niveau professionnel sur votre contenu écrit. En évaluant la grammaire, la structure et le contenu, il vous aide à affiner votre texte afin d'améliorer sa clarté et son attrait. Que vous rédigiez une critique de livre, un article ou toute autre forme d'expression écrite, cet agent offre des suggestions détaillées pour l'amélioration, ce qui en fait un outil inestimable pour les écrivains à tous les niveaux.

## Premiers Pas

Pour commencer, assurez-vous d'avoir cloné le **Correcteur d'écriture**. Suivez [Créer à partir de modèles](/fr/create-from-templates/) pour cloner et configurer votre agent IA.

## Instructions de configuration

### Entrées utilisateur

| Nom de l'étiquette | Description | Instruction |
| --- | --- | --- |
| Objectif de la rédaction | Spécifiez l'objectif ou le but du texte | Incluez une brève déclaration sur le but de votre rédaction (par exemple, "Une critique de livre", "Un article") |
| Texte à réviser | Saisissez le texte que vous souhaitez faire réviser | Fournissez un texte détaillé pour évaluation, idéalement entre 300 et 1000 mots pour des retours complets |

### Connaissances

Vous pouvez téléverser des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé répondant à vos exigences spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos requêtes pour des résultats plus personnalisés.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent IA, veuillez consulter [Configurer l'agent IA](/fr/configurer-agent-ia/)
:::

## Exemples d'entrées et de sorties

### Exemples d'entrées

- **Objectif de la rédaction** : Une critique du livre Harry Potter à l'école des sorciers
- **Texte à réviser** : Harry Potter à l'école des sorciers de J.K. Rowling est un premier ouvrage captivant qui présente aux lecteurs le monde des sorciers et le garçon qui deviendrait l'un des héros les plus emblématiques de la littérature. L'histoire suit le jeune Harry Potter, un garçon ordinaire qui découvre, le jour de son onzième anniversaire, qu'il est en réalité un sorcier. Emmené à l'école de sorcellerie Poudlard, Harry entreprend un voyage extraordinaire, se faisant de nouveaux amis, apprenant la magie et découvrant la vérité sur son passé. La création de l'univers de Rowling est tout simplement magique. Du dynamique Chemin de Traverse à la fascinante Grande Salle, chaque décor est conçu avec un souci du détail méticuleux et un sentiment d'émerveillement. L'auteure mélange harmonieusement le quotidien et le surnaturel, créant un royaume fantastique qui semble à la fois étranger et familier.

### Exemple de sortie

```
Commentaires :
Grammaire :
La grammaire du texte est généralement correcte, sans erreurs flagrantes. Cependant, il y a quelques zones où la ponctuation pourrait être améliorée pour une meilleure lisibilité. Par exemple, la phrase « L'histoire suit le jeune Harry Potter, un garçon ordinaire qui découvre, le jour de son onzième anniversaire, qu'il est en réalité un sorcier » pourrait bénéficier d'une virgule après « en réalité ».

Structure :
La structure du texte est claire et logique. Elle commence par une introduction au livre et à son importance, suivie d'un bref résumé de l'intrigue et se conclut par une analyse des compétences de l'auteur en matière de création de monde. Cependant, les transitions entre les phrases et les paragraphes pourraient être plus fluides pour améliorer le flux de la critique.

Contenu :
Le contenu répond efficacement à l'objectif d'une critique de livre. Il fournit un aperçu de l'intrigue et met en évidence des éléments clés tels que la création de monde. Cependant, il pourrait bénéficier d'une analyse plus critique des forces et des faiblesses du livre. Par exemple, mentionner le développement des personnages, le rythme ou les éléments thématiques offrirait une critique plus complète.

Texte Révisé :
Harry Potter à l'école des sorciers de J.K. Rowling est un premier ouvrage captivant qui présente aux lecteurs le monde des sorciers et le garçon qui deviendra l'un des héros les plus emblématiques de la littérature. L'histoire suit le jeune Harry Potter, un garçon ordinaire qui découvre, le jour de son onzième anniversaire, qu'il est en réalité un sorcier. Emmené à l'école de sorcellerie Poudlard, Harry entreprend un voyage extraordinaire, se faisant de nouveaux amis, apprenant la magie et découvrant la vérité sur son passé.

La création de monde de Rowling est tout simplement magique. Du dynamique Chemin de Traverse à la fascinante Grande Salle, chaque décor est conçu avec un souci du détail méticuleux et un sens d'émerveillement. L'auteure mélange harmonieusement le quotidien et le surnaturel, créant un royaume fantastique qui semble à la fois étranger et familier.

Alors que le livre excelle dans la création d'un monde immersif, il brille également dans le développement des personnages. Harry, ainsi que ses amis Hermione Granger et Ron Weasley, évoluent tout au long de l'histoire, affrontant des défis qui mettent à l'épreuve leur courage et leur amitié. Le rythme est bien équilibré, maintenant l'intérêt des lecteurs du début à la fin. De plus, les thèmes de bravoure, d'amitié et de la lutte entre le bien et le mal sont tissés de manière transparente dans le récit, faisant de ce livre non seulement une œuvre pour enfants mais aussi une histoire à portée universelle.
```

## Conseils pour une Configuration Optimale

- **Définissez clairement votre objectif** : Définissez clairement la cible de votre rédaction afin de guider les retours de manière appropriée.
- **Fournissez un texte complet** : Plus votre contenu est riche, plus les retours seront détaillés ; visez une longueur entre 300 et 1000 mots.
- **Utilisez une mise en forme adéquate** : Assurez-vous que votre texte comporte des paragraphes clairs et une structure pour permettre une meilleure analyse.
- **Itérez en fonction des retours** : Examinez les suggestions fournies par l'agent et affinez votre texte, puis soumettez-le à nouveau à l'agent pour des améliorations supplémentaires.
- **Expérimentez avec les options de modèles** : Si vous n'êtes pas satisfait des résultats, essayez différents modèles d'IA pour voir lequel correspond le mieux à votre style d'écriture.

## Articles connexes
Continuez à explorer notre collection de [Modèles d'agents](/agent-templates/) pour découvrir davantage d'idées d'agents IA en action !