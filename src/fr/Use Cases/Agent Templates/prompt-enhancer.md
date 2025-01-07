---
metatitle: Améliorateur de Prompts | Modèles d'Agents | Guide Utilisateur FabriXAI
description: Ceci est un guide utilisateur pour l'Améliorateur de Prompts, un assistant IA conçu pour affiner et améliorer vos prompts pour les LLMs.
lang: fr-FR
permalink: /agent-templates/prompt-enhancer
---

# Améliorateur de Prompt

L'**Améliorateur de Prompt** est un assistant IA spécialisé dans la création de prompts pour les grands modèles de langage (LLM). Il permet aux utilisateurs d'entrer des prompts initiaux ou des commentaires de révision, que l'agent affine ensuite en fonction du contexte et de la clarté. Le résultat comprend une version améliorée du prompt, une explication des ajustements effectués et des suggestions pour des améliorations supplémentaires. Cet outil est particulièrement utile pour les utilisateurs cherchant à augmenter l'efficacité et la précision de leurs prompts, garantissant des interactions de meilleure qualité avec les modèles Guide de l'utilisateur FabriXAI
description: Ceci est un guide utilisateur pour l'Améliorateur de Prompts, un assistant IA conçu pour affiner et améliorer vos prompts pour les LLMs.
lang: fr
permalink: /agent-templates/prompt-enhancer
---

# Améliorateur de Prompt

L'**Améliorateur de Prompt** est un assistant IA spécialisé dans la création de prompts pour les grands modèles de langage (LLM). Il permet aux utilisateurs d'entrer des prompts initiaux ou des commentaires de révision, que l'agent affine ensuite en fonction du contexte et de la clarté. Le résultat comprend une version améliorée du prompt, une explication des ajustements effectués et des suggestions pour des améliorations supplémentaires. Cet outil est particulièrement utile pour les utilisateurs cherchant à augmenter l'efficacité et la précision de leurs prompts, garantissant des interactions de meilleure qualité avec les modèles IA.

## Premiers Pas

Pour commencer, assurez-vous d'avoir cloné l'**Améliorateur de requêtes**. Suivez [Créer à partir de modèles](/en-us/create-from-templates/) pour cloner et configurer votre agent d'IA.

## Instructions de configuration

## Entrées utilisateur

Aucun champ d'entrée n'est requis pour ces agents d'IA.

## Informations

Téléchargez des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé répondant à vos besoins spécifiques.

## Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez explorer d'autres Modèles d'IA pris en charge. Si nécessaire, ajustez vos requêtes pour des résultats personnalisés.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent d'IA, veuillez consulter [Configurer un agent d'IA](/en-us/configurer-ai-agent/)
:::

## Exemples d'Entrées et de Sorties

## Exemples d'entrées

```
Pouvez-vous m'aider à rédiger un courriel de réponse à un client qui se plaint de nos services.
```

## Exemple de sortie

````
Invite de rédaction améliorée :
Générez un email de réponse à [{} nom du client] concernant sa plainte au sujet de [{} problème de service] (par exemple, livraison retardée, support client médiocre, erreur de facturation).

Explication de l'Amélioration :
L'invite originale est claire mais manque de spécificité. En ajoutant les crochets et les exemples, nous fournissons plus de contexte et facilitons la génération par l'IA d'une réponse pertinente et empathique.

Suggestions pour une Amélioration Supplémentaire :

Envisagez d'ajouter plus de détails sur les interactions précédentes du client ou l'historique des communications afin d'aider à personnaliser la réponse.
Vous pouvez également préciser le ton de l'email (par exemple, apologétique, axé sur les solutions, neutre) pour vous assurer que l'IA génère une réponse correspondant à votre approche souhaitée.
Exemple avec une amélioration supplémentaire :
Générez un email de réponse à [{} nom du client] concernant sa plainte au sujet de [{} problème de service] (par exemple, livraison retardée, support client médiocre, erreur de facturation), avec un ton de [{} ton] (par exemple, apologétique, axé sur les solutions, neutre).

Email de Réponse :
Objet : Re: [{} problème de service] - Excuses et Solution

Cher/Chère [{} nom du client],

Je vous écris pour m'excuser du [{} problème de service] que vous avez rencontré avec notre [{} service]. Nous comprenons les désagréments que cela a causés et tenons à vous assurer que nous prenons des mesures immédiates pour résoudre le problème.

[{} Décrivez brièvement les actions entreprises pour résoudre le problème]

Nous apprécions votre confiance et vos retours. Si vous avez d'autres préoccupations ou questions, n'hésitez pas à nous contacter.

Merci pour votre patience et votre compréhension.

Cordialement,
[{} votre nom]

Explications des Améliorations :
L'email de réponse vise à :

Reconnaître la plainte du client et s'excuser pour le problème
Décrire les actions entreprises pour résoudre le problème
Montrer de la gratitude pour les retours et la confiance du client
Fournir un point de contact clair pour une communication ultérieure
Cette réponse vise à répondre aux préoccupations du client, à démontrer un engagement à résoudre le problème et à maintenir une relation positive.
````

## Conseils pour une Configuration Efficace

- **Soyez Précis** : Définissez clairement le contexte de votre requête pour guider efficacement l'agent.
- **Itérez** : N'hésitez pas à affiner votre requête plusieurs fois pour obtenir des résultats optimaux.
- **Utilisez des Exemples** : Fournissez des exemples de ce que vous attendez pour aider l'agent à mieux comprendre vos besoins.
- **Testez des Variations** : Expérimentez avec différentes formulations et structures pour voir lesquelles produisent les meilleures sorties.
- **Boucle de Rétroaction** : Utilisez les suggestions pour un affinement supplémentaire afin d'améliorer continuellement vos requêtes.

## Articles connexes
