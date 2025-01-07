---
metatitle: Agent de filtrage des données sensibles | Modèles d'agents | Guide de l'utilisateur FabriXAI
description: Ceci est un guide de l'utilisateur pour l'Agent de filtrage des données sensibles, conçu pour aider les utilisateurs à protéger les informations personnelles en identifiant automatiquement et en masquant les données sensibles dans un texte donné.
lang: fr-FR
permalink: /agent-templates/sensitive-data-filtering-agent
---

# Agent de filtrage des données sensibles

L’**Agent de filtrage des données sensibles** est conçu pour aider les utilisateurs à protéger leurs informations personnelles en identifiant automatiquement et en masquant les données sensibles dans un texte donné. Ciblant des catégories spécifiques telles que les numéros HKID, les numéros de téléphone, les adresses, les informations financières et les dates de naissance, cet agent remplace systématiquement les données sensibles par des espaces réservés définis. Les utilisateurs peuvent ainsi maintenir l’intégrité de leur communication et se conformer aux réglementations sur la protection des données. Cela garantit que les détails confidentiels ne soient pas divulgués, faisant de cet outil un atout inestimable pour les professionnels qui manipulent des documents Guide de l'utilisateur FabriXAI
description: Ceci est un guide de l'utilisateur pour l'Agent de filtrage des données sensibles, conçu pour aider les utilisateurs à protéger les informations personnelles en identifiant automatiquement et en masquant les données sensibles dans un texte donné.
lang: fr
permalink: /agent-templates/sensitive-data-filtering-agent
---

# Agent de filtrage des données sensibles

L’**Agent de filtrage des données sensibles** est conçu pour aider les utilisateurs à protéger leurs informations personnelles en identifiant automatiquement et en masquant les données sensibles dans un texte donné. Ciblant des catégories spécifiques telles que les numéros HKID, les numéros de téléphone, les adresses, les informations financières et les dates de naissance, cet agent remplace systématiquement les données sensibles par des espaces réservés définis. Les utilisateurs peuvent ainsi maintenir l’intégrité de leur communication et se conformer aux réglementations sur la protection des données. Cela garantit que les détails confidentiels ne soient pas divulgués, faisant de cet outil un atout inestimable pour les professionnels qui manipulent des documents sensibles.

# Premiers Pas

Pour commencer, assurez-vous d'avoir cloné l'**Agent de filtrage des données sensibles**. Suivez [Créer à partir de modèles](/fr-fr/create-from-templates/) pour cloner et configurer votre agent d'IA.

# Instructions de configuration

## Saisies utilisateur

Aucun champ de saisie n'est nécessaire pour ces agents intelligents.

## Connaissance

Vous pouvez téléverser des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé qui répond à vos exigences spécifiques.

## Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos instructions pour des résultats plus personnalisés.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent d'IA, veuillez vous référer à [Configurer un agent d'IA](/fr/configurer-ai-agent/)
:::

# Exemples, Entrées et Sorties

## Exemples d'Entrées

```
Nom complet: John Doe
HKID: A123456(7)
Numéro de téléphone: 9123 4567
Numéro de compte: 123-456-789
Date de naissance: 01/01/1990
Adresse: 23 Main St, Hong Kong
```

## Exemple de sortie

```
Selon les directives fournies, je vais filtrer les données sensibles du texte. Voici le texte modifié :

Nom complet : John Doe
HKID : XXXXXXXX(X)
Numéro de téléphone : XXXXXXXX
Numéro de compte : XXXXXXXX
Date de naissance : XX/XX/XXXX
Adresse : XXXX (adresse)

J'ai remplacé les données sensibles comme suit :

1. HKID : A123456(7) -> XXXXXXXX(X)
2. Numéro de téléphone : 9123 4567 -> XXXXXXXX
3. Numéro de compte : 123-456-789 -> XXXXXXXX
4. Date de naissance : 01/01/1990 -> XX/XX/XXXX
5. Adresse : 23 Main St, Hong Kong -> XXXX (adresse)

J'ai remplacé toutes les données sensibles dans le texte, tout en veillant à ce que le contenu original reste inchangé, à l'exception du filtrage des données sensibles.
```

# Conseils pour une Configuration Efficace

- **Comprendre les Types de Données** : Connaître les différents types de données sensibles que vous devez filtrer pour garantir une couverture complète.
- **Fournir des Exemples Contextuels** : Téléverser des exemples de données sensibles pour aider l'agent à identifier et remplacer ces informations avec précision.
- **Tester avec des Entrées Diverses** : Utiliser différents formats de données sensibles pour vérifier les performances de l'agent dans divers scénarios.
- **Surveiller les Performances de l'Agent** : Examiner régulièrement les résultats pour détecter des données manquantes ou des faux positifs et ajuster les configurations si nécessaire.
- **Rester Informé sur les Réglementations** : Se tenir au courant des lois sur la protection des données personnelles pour garantir que les pratiques de filtrage de l'agent restent conformes.

# Articles Liés
