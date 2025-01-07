---
metatitle: Résumeur | Modèles d'Agents | Guide de l'Utilisateur FabriXAI
description: Ceci est un guide utilisateur pour configurer et utiliser efficacement l'agent Résumeur.
lang: fr-FR
permalink: /agent-templates/summarizer
---

# Résumeur

L'**agent Résumeur** est conçu pour condenser de longs textes en résumés concis tout en conservant le sens principal et le contexte du matériel original. Les utilisateurs peuvent spécifier le ton de l'écriture, établir une limite de mots et fournir des retours pour affiner davantage le résumé. Cette polyvalence permet des résumés adaptés à des besoins spécifiques, que ce soit pour une lecture informelle ou une analyse formelle. Vous pouvez personnaliser le style de sortie en fonction de vos préférences, ce qui en fait un outil inestimable pour traiter efficacement de grandes quantités d'informations.

## Démarrage

Pour commencer, assurez-vous d'avoir cloné le **Résumeur**. Suivez [Créer à partir de modèles](/en-us/create-from-templates/) pour cloner et configurer votre agent IA.

## Instructions de configuration

### Entrées de l'utilisateur

| Nom de l'étiquette          | Description                                               | Instruction                                           |
| ---------------------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| Texte à résumer             | Le texte original que vous souhaitez résumer.             | Fournissez des paragraphes clairs et cohérents à résumer. |
| Ton de rédaction du résumé  | Le ton désiré pour le résumé (par exemple, décontracté, formel). | Spécifiez un ton adapté à votre audience.             |
| Limite de mots              | Le nombre maximum de mots pour le résumé.                | Fixez une limite entre 50 et 100 mots.                |

### Connaissances

Vous pouvez télécharger des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé répondant à vos exigences spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos invites pour des sorties plus personnalisées.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent IA, veuillez vous référer à [Configurer un agent IA](/en-us/configure-ai-agent/)
:::

## Exemples d'Entrées et de Sorties

### Exemples d'Entrées

- **Ton de rédaction** : Décontracté
- **Limite de mots** : 80
- **Texte** : L'avancée rapide de l'intelligence artificielle (IA) ces dernières années a offert à la fois des opportunités passionnantes et des défis significatifs. D'une part, l'IA a permis des percées dans des domaines comme la santé, les transports et la recherche scientifique, augmentant et renforçant les capacités humaines de manière remarquable. Les systèmes automatisés alimentés par l'IA augmentent l'efficacité, dévoilent de nouvelles perspectives et sauvent même des vies. Cependant, la montée de l'IA soulève également des questions éthiques et sociétales importantes. À mesure que les systèmes d'IA deviennent plus sophistiqués et autonomes, les préoccupations concernant des problèmes tels que les biais algorithmiques, la confidentialité, la perte d'emplois et les risques existentiels de l'IA avancée augmentent. Une gouvernance réfléchie et un développement minutieux de l'IA seront essentiels pour garantir que ces technologies sont déployées de manière responsable et équitable au bénéfice de l'humanité dans son ensemble. Dans l'ensemble, le potentiel transformateur de l'IA est à la fois séduisant et semé d'embûches, nécessitant un équilibre délicat entre innovation et considération prudente des impacts étendus de la technologie.

### Exemple de Sortie

```
Le progrès rapide de l'intelligence artificielle est extrêmement excitant mais comporte aussi de grands défis. Elle révolutionne les soins de santé, les transports et la recherche en rendant les systèmes plus intelligents et plus efficaces. Cependant, ces avancées suscitent des préoccupations telles que les biais, les problèmes de confidentialité, la perte d'emplois et même les risques existentiels. Pour vraiment bénéficier de l'IA, nous aurons besoin de règles intelligentes et d'un développement soigné pour équilibrer l'innovation avec les vastes impacts de la technologie. Dans l'ensemble, le potentiel de l'IA est incroyable mais doit être géré de manière réfléchie.
```

## Conseils pour une Configuration Efficace

- **Définir des paramètres clairs** : Spécifiez efficacement le ton d'écriture et la limite de mots pour garantir que votre résumé répond aux attentes.
- **Utiliser un texte concis** : Plus le texte original est clair et concis, meilleur sera le résumé.
- **Affiner vos entrées** : Si le résultat n'est pas ce à quoi vous vous attendiez, ajustez le ton d'écriture ou simplifiez le texte fourni pour plus de clarté.
- **Tester différents tons** : Expérimentez avec différents tons d'écriture pour trouver le style qui convient le mieux aux besoins de votre audience.
- **Revoir les retours** : Utilisez le mécanisme de rétroaction de l'agent pour affiner davantage vos résumés en fonction des sorties précédentes.

## Articles connexes

Continuez à explorer notre collection de [Modèles d'Agents](/en-us/agent-templates/) pour découvrir davantage d'idées d'agents IA en action!