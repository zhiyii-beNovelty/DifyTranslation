---
metatitle: Extracteur de données Email | Modèles d'agents | Guide utilisateur FabriXAI
description: Ceci est un guide utilisateur pour l'Extracteur de données Email, un analyseur d'emails professionnel permettant d'extraire les informations pertinentes des emails.
lang: fr-FR
permalink: /agent-templates/email-data-extractor
---

# Extracteur de données d'e-mails

L'**Extracteur de données d'e-mails** est un outil d'IA spécialisé conçu pour analyser le contenu des e-mails et extraire des informations pertinentes basées sur des champs de données spécifiques. En utilisant un format JSON structuré, l'agent traite le texte des e-mails pour identifier des éléments clés tels que le nom de l'expéditeur, l'objet et le numéro de contact. Dans les cas où un champ de données n'est pas trouvé, l'extracteur attribue automatiquement la valeur 'N/A'. Cela assure une sortie complète qui convient aussi bien au contenu d'e-mails structuré qu'à celui non structuré, ce qui le rend idéal pour l'analyse des communications d'entreprise et la gestion des données.

## Commencer

Pour commencer, assurez-vous d'avoir cloné l'**Extracteur de données Email**. Suivez "[Cloner à partir du modèle](/en-us/clone-from-template)" pour cloner et configurer votre agent d'IA.

## Instructions de configuration

### Entrées utilisateur

| Nom de l'étiquette   | Description                                                                 | Instruction                                                                                  |
| -------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Champs de données    | Une liste des champs de données à partir desquels vous souhaitez extraire des données de l'e-mail | Fournissez les noms structurés des champs pertinents liés aux données de l'e-mail             |
| Contenu de l'e-mail  | Le contenu de l'e-mail à analyser                                           | Soumettez le corps complet de l'e-mail, en vous assurant qu'il est clair et concis ; envisagez d'inclure les en-têtes si pertinent |

### Connaissances

Vous pouvez téléverser des fichiers `.pdf` ou `.txt` pour fournir à l'agent un contexte personnalisé qui répond à vos exigences spécifiques.

### Modèles d'IA

Le modèle par défaut est *Llama 3.1 8B Instruct*, mais vous pouvez également explorer d'autres modèles d'IA pris en charge. Si nécessaire, affinez vos instructions pour obtenir des résultats plus personnalisés.

::: tip
Pour des instructions plus détaillées sur la configuration d'un agent d'IA, veuillez vous référer à [Configurer l'agent d'IA](/en-us/configure-ai-agent/)
:::

## Exemples d'entrées et de sortie

### Exemples d'entrées

- **Champs de données** : Objet, Nom de l'expéditeur, Rôle de l'expéditeur, Nom de l'entreprise, Numéro de téléphone
- **Contenu de l'e-mail** : Objet : Opportunité de Partenariat Stratégique. Chère Jane, J'espère que vous allez bien. Je m'appelle John Smith et je suis le Responsable du développement commercial chez Acme Software Solutions, un fournisseur de premier plan de produits logiciels d'entreprise. Je vous contacte car je crois qu'il pourrait y avoir une grande opportunité pour nos entreprises de collaborer. Acme Software a développé une suite d'outils puissants qui aident des entreprises comme la vôtre à optimiser leurs opérations, améliorer la productivité et stimuler la croissance. Je serais heureux d'avoir l'occasion de discuter de la manière dont nous pourrions travailler ensemble. Veuillez me faire savoir si vous avez des disponibilités pour un appel cette semaine au 555-1234567 pour explorer les possibilités. Merci pour votre temps, et j'attends avec impatience de parler avec vous bientôt. Cordialement, John Smith, Responsable du développement commercial, Acme Software Solutions.

### Exemple de sortie

```
{
  "Objet": "Opportunité de Partenariat Stratégique.",
  "Nom de l'expéditeur": "John Smith",
  "Rôle de l'expéditeur": "Responsable du développement commercial",
  "Nom de l'entreprise": "Acme Software Solutions",
  "Numéro de téléphone": "555-1234567"
}
```

## Conseils pour une configuration efficace

- **Définir des champs de données clairs** : Décrivez précisément les champs de données que vous devez extraire afin de garantir une sortie JSON précise et pertinente.
- **Utiliser un contenu de l'e-mail concis** : Gardez le contenu de l'e-mail ciblé et simple ; des e-mails longs ou complexes peuvent entraîner une extraction de données ambiguë.
- **Réviser la sortie régulièrement** : Testez vos configurations régulièrement pour vous assurer que la sortie correspond à vos attentes et ajustez-les si nécessaire.
- **Ajuster le modèle d'IA si nécessaire** : Si le modèle par défaut ne répond pas à vos besoins, explorez des modèles alternatifs pour une performance potentiellement meilleure.
- **Utiliser des exemples d'entrées comme guide** : Référez-vous aux exemples d'entrées fournis pour structurer efficacement le contenu de votre e-mail afin d'obtenir des résultats d'extraction optimaux.

## Articles liés
Continuez à explorer notre collection de [Modèles d'agents](/en-us/agent-templates/) pour découvrir davantage d'idées d'agents d'IA en action !