---
metatitle: Agent de Priorisation des Demandes Clients | Modèles d'Agents | Guide de l'utilisateur FabriXAI
description: Ceci est un guide utilisateur pour l'Agent de Priorisation des Demandes Clients afin de classer les demandes clients en fonction de leur urgence.
lang: fr-FR
permalink: /agent-templates/customer-inquiry-prioritizing-agent
---

# Agent de Priorisation des Demandes Clients

L'**Agent de Priorisation des Demandes Clients** est conçu pour analyser les demandes clients et les classer en l'un des cinq niveaux d'urgence : Urgent, Élevé, Moyen, Faible ou Général. En évaluant l'urgence, la sévérité et le potentiel de problèmes supplémentaires dans chaque demande, l'agent aide les entreprises à prioriser efficacement les requêtes de support client. Cela garantit que les problèmes critiques sont traités rapidement, améliorant la satisfaction client et l'efficacité Guide de l'utilisateur FabriXAI
description: Ceci est un guide utilisateur pour l'Agent de Priorisation des Demandes Clients afin de classer les demandes clients en fonction de leur urgence.
lang: fr
permalink: /agent-templates/customer-inquiry-prioritizing-agent
---

# Agent de Priorisation des Demandes Clients

L'**Agent de Priorisation des Demandes Clients** est conçu pour analyser les demandes clients et les classer en l'un des cinq niveaux d'urgence : Urgent, Élevé, Moyen, Faible ou Général. En évaluant l'urgence, la sévérité et le potentiel de problèmes supplémentaires dans chaque demande, l'agent aide les entreprises à prioriser efficacement les requêtes de support client. Cela garantit que les problèmes critiques sont traités rapidement, améliorant la satisfaction client et l'efficacité opérationnelle.

## Premiers Pas

Pour commencer, assurez-vous d'avoir cloné l'**Agent de Priorisation des Demandes Clients**. Suivez [Créer à partir des modèles](/fr/create-from-templates/) pour cloner et configurer votre agent d'IA.

## Instructions de configuration

### Entrées de l'utilisateur

| Nom de l'étiquette   | Description                                           | Instruction                                                                                                                           |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Demande du client    | Le texte de la demande du client à classer.           | L'entrée devrait être une description claire et concise de la demande, idéalement limitée à 200 mots. Concentrez-vous sur l'inclusion de problèmes clés, préoccupations ou demandes. |

### Informations

Vous pouvez téléverser des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé répondant à vos exigences spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA disponibles. Si nécessaire, affinez vos invites pour des résultats plus personnalisés.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent IA, veuillez vous référer à [Configurer un agent IA](/en-us/configurer-ai-agent/)
:::

## Exemples d'entrée et de sortie

### Exemples d'entrées

- **Demande du client** : J'essaie de finaliser une commande pressante pour un client, mais je ne parviens pas à me connecter à mon compte sur votre plateforme de commerce électronique. J'ai été verrouillé et je ne peux pas accéder à mes outils de gestion des commandes. Cela m'empêche de traiter une commande pressante pour un client majeur. J'ai besoin que cela soit résolu immédiatement car cela cause une perturbation significative de mes opérations commerciales.

### Exemple de sortie

```
Urgent

Le client ne peut pas se connecter à son compte, ce qui l'empêche de passer une commande urgente pour un client important. Cela entraîne une perturbation significative de ses opérations commerciales et requiert une intervention immédiate afin d'être résolu. Son entreprise est gravement affectée, et le problème doit être traité rapidement pour éviter d'autres répercussions.
```

## Conseils pour une configuration efficace

- **Soyez précis** : Fournir des demandes détaillées aide l'agent à les analyser plus précisément pour la classification de l'urgence.
- **Limitez la longueur** : Essayez de garder les demandes concises ; une limite de 200 mots améliore généralement la précision de la réponse.
- **Utilisez un langage clair** : Évitez le jargon et les termes ambigus pour une meilleure compréhension de la demande par l'agent.
- **Testez des variantes** : Essayez différentes versions de demandes similaires pour voir comment l'agent les classe, afin d'optimiser vos entrées.
- **Mises à jour régulières** : Maintenez la base de connaissances à jour pour garantir que l'agent réponde avec les informations les plus pertinentes.

## Articles liés
