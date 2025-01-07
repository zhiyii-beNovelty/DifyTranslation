---
metatitle: E-Mail-Datenextraktor | Agentenvorlagen | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den E-Mail-Datenextraktor, ein professionelles E-Mail-Analysewerkzeug zur Extraktion relevanter Informationen aus E-Mails.
lang: de-DE
permalink: /agent-templates/email-data-extractor
---

# E-Mail-Datenextraktor

Der **E-Mail-Datenextraktor** ist ein spezialisierter KI-Agent, der entwickelt wurde, um E-Mail-Inhalte zu analysieren und relevante Informationen basierend auf spezifischen Datenfeldern zu extrahieren. Unter Verwendung eines strukturierten JSON-Formats verarbeitet der Agent E-Mail-Texte, um Schlüsselinformationen wie den Namen des Absenders, den Betreff und die Kontaktnummer zu identifizieren. In Fällen, in denen ein Datenfeld nicht gefunden wird, weist der Extraktor automatisch den Wert 'N/A' zu. Dies gewährleistet eine umfassende Ausgabe, die sowohl strukturierte als auch unstrukturierte E-Mail-Inhalte abdeckt und somit ideal für die Analyse der Geschäftskommunikation und die Datenverwaltung FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den E-Mail-Datenextraktor, ein professionelles E-Mail-Analysewerkzeug zur Extraktion relevanter Informationen aus E-Mails.
lang: de
permalink: /agent-templates/email-data-extractor
---

# E-Mail-Datenextraktor

Der **E-Mail-Datenextraktor** ist ein spezialisierter KI-Agent, der entwickelt wurde, um E-Mail-Inhalte zu analysieren und relevante Informationen basierend auf spezifischen Datenfeldern zu extrahieren. Unter Verwendung eines strukturierten JSON-Formats verarbeitet der Agent E-Mail-Texte, um Schlüsselinformationen wie den Namen des Absenders, den Betreff und die Kontaktnummer zu identifizieren. In Fällen, in denen ein Datenfeld nicht gefunden wird, weist der Extraktor automatisch den Wert 'N/A' zu. Dies gewährleistet eine umfassende Ausgabe, die sowohl strukturierte als auch unstrukturierte E-Mail-Inhalte abdeckt und somit ideal für die Analyse der Geschäftskommunikation und die Datenverwaltung ist.

# Erste Schritte

Um zu beginnen, stellen Sie sicher, dass Sie den **E-Mail-Datenextraktor** geklont haben. Folgen Sie [von der Vorlage klonen](/en-us/clone-from-template), um Ihren KI-Agenten zu klonen und zu konfigurieren.

# Anleitung zur Konfiguration

## Benutzereingaben

| Bezeichnung   | Beschreibung                                                                                     | Anleitung                                                                                                               |
|---------------|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Datenfelder   | Eine Liste von Datenfeldern, aus denen Sie Daten aus der E-Mail extrahieren möchten              | Geben Sie strukturierte Namen der für die E-Mail relevanten Felder an                                                  |
| E-Mail-Inhalt | Der Inhalt der zu analysierenden E-Mail                                                          | Senden Sie den vollständigen E-Mail-Inhalt, stellen Sie sicher, dass er klar und prägnant ist; erwägen Sie, relevante Kopfzeilen einzubeziehen |

## Informationen

Du kannst `.pdf`- oder `.txt`-Dateien hochladen, um dem Agenten kontextbezogene Informationen bereitzustellen, die genau auf deine Bedürfnisse zugeschnitten sind.

## KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle auswählen. Falls erforderlich, verfeinern Sie Ihre Eingabeaufforderungen für maßgeschneiderte Ergebnisse.

::: tip
Für detailliertere Anweisungen zur Einrichtung eines KI-Agenten, verweisen Sie bitte auf [KI-Agent konfigurieren](/de-us/configure-ai-agent/)
:::

# Beispiel Eingaben und Ausgaben

## Muster-Eingaben

- **Datenfelder**: Betreff, Absendername, Absenderrolle, Firmenname, Telefonnummer
- **E-Mail-Inhalt**: Betreff: Gelegenheit für strategische Partnerschaft. Liebe Jane, ich hoffe, diese E-Mail erreicht dich wohlauf. Mein Name ist John Smith und ich bin der Leiter Geschäftsentwicklung bei Acme Software Solutions, einem führenden Anbieter von geschäftsspezifischen Softwarelösungen. Ich wende mich an dich, weil ich glaube, dass unsere Unternehmen eine großartige Möglichkeit zur Zusammenarbeit haben könnten. Acme Software hat eine leistungsfähige Softwarelösung entwickelt, die Unternehmen wie deines dabei hilft, Betriebsabläufe zu optimieren, die Produktivität zu verbessern und Wachstum voranzutreiben. Ich würde mich freuen, die Gelegenheit zu haben, zu besprechen, wie wir zusammenarbeiten können. Bitte lass mich diese Woche wissen, ob du Zeit für einen Anruf hast, um die Möglichkeiten zu erkunden. Du erreichst mich unter 555-1234567. Vielen Dank für deine Zeit und ich freue mich auf ein baldiges Gespräch mit dir. Mit freundlichen Grüßen, John Smith, Leiter Geschäftsentwicklung, Acme Software Solutions.

## Sample output

```
{
  "Subject": "Gelegenheit für eine strategische Partnerschaft.",
  "Sender Name": "John Smith",
  "Sender Role": "Geschäftsentwicklungsmanager",
  "Company Name": "Acme Software Solutions",
  "Phone Number": "555-1234567"
}
```

# Tipps für effektive Konfiguration

- **Definieren Sie die Datenfelder klar**: Legen Sie genau fest, welche Datenfelder Sie extrahieren müssen, um eine präzise und relevante JSON-Ausgabe zu gewährleisten.
- **Verwenden Sie einen klaren E-Mail-Inhalt**: Halten Sie den Inhalt der E-Mail fokussiert und einfach; lange oder komplexe E-Mails können zu unklaren Datenextraktionen führen.
- **Überprüfen Sie die Ausgabe regelmäßig**: Testen Sie Ihre Konfigurationen regelmäßig, um sicherzustellen, dass die Ausgabe Ihren Erwartungen entspricht, und passen Sie sie bei Bedarf an.
- **Passen Sie das KI-Modell bei Bedarf an**: Wenn das Standardmodell nicht Ihren Anforderungen entspricht, erkunden Sie alternative Modelle für eine potenziell bessere Leistung.
- **Nutzen Sie Beispieleingaben als Leitfaden**: Beziehen Sie sich auf die bereitgestellten Beispieleingaben, um Ihren E-Mail-Inhalt effektiv zu strukturieren und optimale Extraktionsergebnisse zu erzielen.

# Verwandte Artikel
