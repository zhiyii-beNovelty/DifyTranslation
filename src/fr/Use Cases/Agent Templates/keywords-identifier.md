---
metatitle: Identificateur de Mots-Clés | Modèles d'Agents | Guide de l'Utilisateur FabriXAI
description: Ceci est un guide utilisateur pour l'Identificateur de Mots-Clés, conçu pour extraire les thèmes et sujets clés d'un texte donné.
lang: fr
permalink: /agent-templates/keywords-identifier
---

# Identificateur de Mots-Clés

L'**Identificateur de Mots-Clés** est un agent intelligent conçu pour extraire les thèmes clés et les sujets d'un texte donné. En analysant le contenu, il identifie et classe les mots-clés ou étiquettes les plus pertinents qui encapsulent les idées et sujets principaux discutés. Cet outil est particulièrement utile pour les créateurs de contenu, les chercheurs et les spécialistes du marketing numérique qui ont besoin de distiller rapidement des informations à partir de grands volumes de texte. Il garantit que les mots-clés extraits sont concis et reflètent avec précision le contenu du texte, fournissant une liste classée en fonction de leur importance.

## Commencer

Pour commencer, assurez-vous d'avoir cloné l'**Identificateur de Mots-Clés**. Suivez [Créer à partir de modèles](/en-us/create-from-templates/) pour cloner et configurer votre agent IA.

## Instructions de Configuration

### Entrées de l'Utilisateur

| Nom de l'étiquette      | Description                                               | Instruction                                           |
| ----------------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| Texte                   | Le contenu à partir duquel vous souhaitez extraire des mots-clés. | Fournissez un texte clair pour l'analyse.             |
| Nombre de Mots-Clés     | Le nombre maximum de mots-clés ou étiquettes à extraire.   | Indiquez un nombre pour limiter les résultats (ex. : 5, 10, etc.). |

### Contexte

Vous pouvez télécharger des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé répondant à vos besoins spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA disponibles. Si besoin, affinez vos invites pour des sorties plus personnalisées.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent IA, veuillez vous référer à [Configurer l'agent IA](/en-us/configuer-ai-agent/)
:::

## Exemples d'Entrées et de Sortie

### Exemples d'Entrées

- **Texte** : Le marketing sur les réseaux sociaux est essentiel pour les entreprises aujourd'hui. Il aide les marques à se connecter avec leur public, à augmenter leur visibilité et à susciter l'engagement. En tirant parti de plateformes comme Facebook, Instagram et Twitter, les entreprises peuvent créer des campagnes ciblées qui résonnent avec leurs clients.
- **Nombre de Mots-Clés** : 5

### Exemple de Sortie

```
D'après le texte, j'ai extrait les 5 mots-clés principaux qui capturent les sujets et thèmes. Les voici :

1. **Marketing sur les réseaux sociaux** : Il s'agit du sujet principal du texte et c'est le mot-clé le plus pertinent.
2. **Image de Marque** : Le texte mentionne la connexion avec le public, l'augmentation de la visibilité et l'engagement, tous liés à la construction d'une image de marque.
3. **Marketing Digital** : Ce mot-clé capture l'aspect en ligne du marketing, qui est un thème clé dans le texte.
4. **Campagnes Ciblées** : Le texte souligne l'importance de créer des campagnes qui résonnent avec les clients, impliquant une focalisation sur le marketing ciblé.
5. **Présence en Ligne** : Ce mot-clé reflète l'idée que les entreprises doivent établir une présence en ligne pour se connecter avec leur public et atteindre leurs objectifs marketing.

Ces mots-clés capturent l'essence du texte et fournissent un résumé concis des principaux sujets et thèmes.
```

## Conseils pour une Configuration Efficace

- **Fournir un Texte Clair** : Assurez-vous que le texte que vous fournissez est bien structuré et pertinent par rapport aux mots-clés que vous souhaitez extraire pour de meilleurs résultats.
- **Limiter le Nombre de Mots-Clés** : Spécifiez un nombre raisonnable de mots-clés pour éviter des résultats encombrants et vous concentrer sur les thèmes les plus significatifs.
- **Utiliser un Contexte Pertinent** : Si possible, téléchargez des documents de soutien qui fournissent un contexte pour améliorer la précision de l’extraction des mots-clés.
- **Tester avec Différents Textes** : Expérimentez avec différents styles et sujets de texte pour voir comment l’agent se comporte avec des contenus divers.
- **Revoir Régulièrement les Résultats** : Évaluez régulièrement les mots-clés extraits pour leur pertinence et leur précision, et ajustez le texte d’entrée ou les paramètres selon les besoins.

## Articles Connexes
Continuez à explorer notre collection de [Modèles d'Agents](/en-us/agent-templates/) pour découvrir davantage d'agents IA en action !