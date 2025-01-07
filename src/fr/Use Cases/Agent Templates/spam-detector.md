---
metatitle: Détecteur de spam | Modèles d'agents | Guide de l'utilisateur FabriXAI
description: Ceci est un guide de l'utilisateur pour configurer et utiliser l'agent IA Détecteur de spam afin d'identifier efficacement les messages de spam.
lang: fr-FR
permalink: /fr/agent-templates/spam-detector
---

# Détecteur de spam

L'**agent Détecteur de spam** est conçu pour aider les utilisateurs à déterminer si un e-mail ou un message texte est du spam ou non. En analysant divers aspects du message, y compris le contenu non sollicité, les liens suspects, les demandes d'informations personnelles, le langage indiquant une urgence et les erreurs de grammaire, l'agent Détecteur de spam fournit un verdict clair de "Spam" ou "Non spam". De plus, il offre une brève explication du raisonnement derrière la décision, aidant les utilisateurs à comprendre les facteurs influençant l'évaluation. Cet outil utilise des directives définies et un taux de confiance pour améliorer la précision de sa détection de spam.

## Démarrage

Pour commencer, assurez-vous d'avoir cloné le **Détecteur de spam**. Suivez [Créer à partir de modèles](/fr/create-from-templates/) pour cloner et configurer votre agent IA.

## Instructions de configuration

### Entrées de l'utilisateur

| Nom du label          | Description                                         | Instruction                                                                                         |
| --------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Email ou message texte | Saisissez l'email ou le message texte que vous souhaitez évaluer. | Incluez le texte complet du message en conservant un formatage approprié. Privilégiez la clarté et la pertinence. |

### Connaissances

Vous pouvez charger des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé adapté à vos besoins spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos requêtes pour des sorties plus personnalisées.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent d'IA, veuillez consulter [Configurer l'agent d'IA](/fr/configuer-ai-agent/)
:::

## Exemples d'Entrées et de Sortie

### Exemples d'entrées

- **Courrier électronique ou SMS**: Bonjour, merci de travailler avec nous. Votre facture de 373,75 $ était due le 28 août 2016. Si vous l'avez déjà payée, veuillez ignorer ce courriel et nous excusons de vous déranger. Si vous ne l'avez pas payée, veuillez le faire dès que possible. Pour consulter votre facture, visitez [lien]. Si vous avez des questions ou souhaitez organiser un paiement alternatif, n'hésitez pas à nous contacter. Merci, NJW Limited

### Sortie Exemple

```
**Verdict:** Pas de courrier indésirable

**Explication:**

* L'email n'est pas non sollicité, car il semble être une notification concernant une facture qui était due à une date spécifique.
* Il n'y a pas de liens suspects, mais le lien fourni est probablement un lien légitime pour consulter la facture.
* L'email ne demande aucune information personnelle.
* Il y a un sentiment d'urgence, mais ce n'est pas menaçant. Le langage est poli et encourage le destinataire à agir s'il n'a pas payé la facture.
* Il n'y a pas d'erreurs excessives de grammaire et d'orthographe.

**Niveau de certitude:** 5

Je suis très confiant dans ce verdict car l'email semble être une notification légitime d'une entreprise (NJW Limited) au sujet d'une facture qui était due. Le langage est professionnel et poli, et la demande de consulter la facture est raisonnable. Le seul éventuel drapeau rouge est le sentiment d'urgence, mais il n'est pas agressif ou menaçant. Dans l'ensemble, l'email semble être une tentative authentique de notifier le destinataire au sujet d'une facture, plutôt qu'un message de courrier indésirable.
```

## Conseils pour une Configuration Efficace

- **Fournir un Contexte Clair** : Assurez-vous que vos entrées sont précises et sans ambiguïté pour permettre à l'agent de réaliser des évaluations fiables.
- **Utiliser des Échantillons Pertinents** : Testez l'agent avec divers types de messages pour évaluer ses capacités et ajuster la configuration en conséquence.
- **Mettre Régulièrement à Jour les Documents Téléversés** : Maintenez vos documents téléversés à jour pour garantir que l'agent dispose du contexte le plus pertinent pour l'évaluation.
- **Surveiller les Performances** : Analysez le degré de confiance des résultats pour évaluer la fiabilité et effectuer les ajustements nécessaires.
- **Expérimenter avec Différents Modèles** : Essayez divers modèles d'IA pour déterminer celui qui offre les meilleurs résultats pour vos besoins.

## Articles connexes
Continuez à explorer notre collection de [Modèles d'agents](/fr/agent-templates/) pour découvrir plus d'exemples d'agents IA en action !