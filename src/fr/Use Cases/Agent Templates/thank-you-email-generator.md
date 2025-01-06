---
metatitle: Générateur d'e-mails de remerciement | Modèles d'agents | Guide de l'utilisateur FabriXAI
description: Il s'agit d'un guide utilisateur pour configurer et utiliser l'agent Générateur d'e-mails de remerciement afin de créer des e-mails de remerciement personnalisés.
lang: fr
permalink: /agent-templates/thank-you-email-generator
---

# Générateur d'e-mails de remerciement

L'**agent Générateur d'e-mails de remerciement** vous aide à créer des e-mails de remerciement personnalisés pour les clients ayant effectué des achats récents. En saisissant des détails pertinents tels que le nom du client, le produit acheté et le ton préféré, l'agent génère un e-mail chaleureux et sincère qui exprime de la gratitude et met en avant les avantages du produit. L'e-mail résultant couvrira tous les éléments essentiels pour améliorer la satisfaction client et l'engagement, ce qui en fait un outil idéal pour les entreprises cherchant à maintenir des relations positives avec leur clientèle.

## Premiers pas

Pour commencer, assurez-vous d'avoir cloné le **Générateur d'e-mails de remerciement**. Suivez [Créer à partir de modèles](/en-us/create-from-templates/) pour cloner et configurer votre agent IA.

## Instructions de configuration

### Entrées de l'utilisateur

| Nom de l'étiquette    | Description                                      | Instruction                                                            |
|-----------------------|--------------------------------------------------|------------------------------------------------------------------------|
| Nom du destinataire   | Le nom du client recevant l'e-mail               | Entrez le nom complet (prénom et nom de famille) du client.            |
| Nom du produit        | Le nom du produit acheté                         | Spécifiez clairement le nom du produit, car il sera mis en avant.       |
| Ton de rédaction      | Le ton dans lequel l'e-mail doit être rédigé     | Indiquez un ton tel que "amical", "professionnel" ou "serviable".      |
| Détail du produit     | Détails clés sur le produit et ses avantages     | Fournissez une description brève et claire des caractéristiques du produit. |

### Connaissance

Vous pouvez télécharger des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé répondant à vos besoins spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos instructions pour des résultats plus personnalisés.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent IA, veuillez consulter [Configurer un agent IA](/en-us/configure-ai-agent/)
:::

## Exemples d'entrées et de sortie

### Exemples de saisie

- **Nom du destinataire** : Sarah Johnson
- **Nom du produit** : Ampoules LED intelligentes (Pack de 4)
- **Détails du produit** : Ces ampoules LED économes en énergie et compatibles Wi-Fi peuvent être contrôlées à distance via une application smartphone, vous permettant d'ajuster la luminosité, la température de couleur et la planification des horaires selon vos préférences.
- **Ton de rédaction** : Utile et informatif

### Exemple de sortie

```
Objet : Merci pour votre récent achat d'Ampoules LED intelligentes !

Chère Sarah,

Nous souhaitions prendre un moment pour vous exprimer notre profonde gratitude pour votre récent achat de nos Ampoules LED intelligentes (Pack de 4). Nous sommes ravis que vous ayez choisi notre produit et nous sommes convaincus que vous apprécierez la commodité et l'efficacité énergétique qu'il apporte à votre domicile.

Nos Ampoules LED intelligentes sont conçues pour vous faciliter la vie, avec des fonctionnalités telles que le contrôle à distance via une application smartphone, la luminosité et la température de couleur réglables, et des capacités de planification. Cela signifie que vous pouvez personnaliser votre éclairage selon vos besoins et préférences, directement depuis le confort de votre maison.

Si vous avez des questions ou si vous avez besoin d'une assistance supplémentaire pour la configuration ou l'utilisation de vos nouvelles ampoules, n'hésitez pas à nous contacter. Nous sommes toujours là pour vous aider. Merci encore pour votre confiance, et nous espérons que vous apprécierez vos nouvelles Ampoules LED intelligentes !

Cordialement,  
[Votre Nom]
```

## Conseils pour une configuration efficace

- **Soyez précis** : Assurez-vous que tous les détails saisis sont spécifiques et clairs pour générer des e-mails précis.
- **Choisissez judicieusement le ton** : Le choix du ton peut influencer considérablement la perception du client ; sélectionnez celui qui correspond à la voix de votre marque.
- **Mettez en valeur les avantages clés** : Concentrez-vous sur les fonctionnalités et les bénéfices uniques du produit pour renforcer sa valeur.
- **Personnalisez** : Adressez-vous toujours au client par son nom pour créer une connexion plus personnelle.
- **Testez et affinez** : Expérimentez avec différentes entrées pour voir comment les variations affectent la sortie de l'e-mail, permettant ainsi une amélioration continue de l'interaction.

## Articles connexes
Continuez à explorer notre collection de [Modèles d'agents](/fr-fr/agent-templates/) pour découvrir davantage d'idées d'agents IA en action !