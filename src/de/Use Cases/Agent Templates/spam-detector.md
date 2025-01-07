---
metatitle: Spam-Detektor | Agentenvorlagen | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch zur Konfiguration und Nutzung des Spam-Detektor-AI-Agenten zur effizienten Identifizierung von Spam-Nachrichten.
lang: de-DE
permalink: /agent-templates/spam-detector
---

# Spam-Detektor

Der **Spam-Detektor-Agent** ist darauf ausgelegt, Benutzern dabei zu helfen festzustellen, ob eine E-Mail oder Textnachricht Spam ist oder nicht. Durch die Analyse verschiedener Aspekte der Nachricht, einschließlich unerwünschtem Inhalt, verdächtigen Links, Anfragen nach persönlichen Informationen, dringenden Formulierungen und Grammatikfehlern, gibt der Spam-Detektor ein klares Urteil von "Spam" oder "Kein Spam" ab. Zusätzlich bietet er eine kurze Erklärung der Begründung für die Entscheidung, um den Benutzern zu helfen, die Faktoren zu verstehen, die die Bewertung beeinflussen. Dieses Tool verwendet definierte Richtlinien und einen Vertrauensgrad, um die Genauigkeit seiner Spam-Erkennung zu FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch zur Konfiguration und Nutzung des Spam-Detektor-AI-Agenten zur effizienten Identifizierung von Spam-Nachrichten.
lang: de
permalink: /agent-templates/spam-detector
---

# Spam-Detektor

Der **Spam-Detektor-Agent** ist darauf ausgelegt, Benutzern dabei zu helfen festzustellen, ob eine E-Mail oder Textnachricht Spam ist oder nicht. Durch die Analyse verschiedener Aspekte der Nachricht, einschließlich unerwünschtem Inhalt, verdächtigen Links, Anfragen nach persönlichen Informationen, dringenden Formulierungen und Grammatikfehlern, gibt der Spam-Detektor ein klares Urteil von "Spam" oder "Kein Spam" ab. Zusätzlich bietet er eine kurze Erklärung der Begründung für die Entscheidung, um den Benutzern zu helfen, die Faktoren zu verstehen, die die Bewertung beeinflussen. Dieses Tool verwendet definierte Richtlinien und einen Vertrauensgrad, um die Genauigkeit seiner Spam-Erkennung zu verbessern.

## Erste Schritte

Um loszulegen, stellen Sie sicher, dass Sie den **Spam-Detektor** geklont haben. Folgen Sie [Vorlagen verwenden](/en-us/create-from-templates/), um Ihren KI-Agenten zu klonen und zu konfigurieren.

## Konfigurationsanweisungen

### Nutzerangaben

| Bezeichnung              | Beschreibung                                                    | Anweisung                                                                                                            |
|--------------------------|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| E-Mail oder Textnachricht | Geben Sie die E-Mail oder Textnachricht ein, die Sie bewerten möchten. | Fügen Sie den vollständigen Text der Nachricht ein und behalten Sie dabei die Formatierung bei, um Klarheit und Relevanz zu gewährleisten. |

### Wissen

Sie können `.pdf`- oder `.txt`-Dateien hochladen, um dem Agenten einen kontextangepassten Rahmen bereitzustellen, der Ihren spezifischen Anforderungen entspricht.

### KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle erkunden. Bei Bedarf können Sie Ihre Prompts anpassen, um individuellere Ausgaben zu erhalten.

::: tip
Für detailliertere Anweisungen zur Konfiguration eines KI-Agenten, beziehen Sie sich bitte auf [KI-Agent konfigurieren](/en-us/configure-ai-agent/)
:::

## Beispiel Eingaben und Ausgaben

### Beispiel-Eingaben

- **E-Mail oder Textnachricht**: Hallo, vielen Dank, dass Sie mit uns zusammenarbeiten. Ihre Rechnung über 373,75 $ war am 28. August 2016 fällig. Wenn Sie sie bereits bezahlt haben, ignorieren Sie bitte diese E-Mail und entschuldigen Sie die Störung. Falls Sie die Rechnung noch nicht beglichen haben, bitten wir Sie, dies so bald wie möglich nachzuholen. Zur Ansicht Ihrer Rechnung besuchen Sie [Link]. Bei Fragen oder wenn Sie eine alternative Zahlungsvereinbarung treffen möchten, stehen wir Ihnen gerne zur Verfügung. Vielen Dank, NJW GmbH

### Beispiel-Ausgabe

```
**Urteil:** Kein Spam

**Erklärung:**

* Die E-Mail ist nicht unaufgefordert, da sie anscheinend eine Benachrichtigung über eine Rechnung ist, die an einem bestimmten Datum fällig war.
* Es gibt keine verdächtigen Links, aber der bereitgestellte Link ist wahrscheinlich legitim, um die Rechnung anzusehen.
* Die E-Mail fordert keine persönlichen Informationen an.
* Es gibt ein Gefühl der Dringlichkeit, aber es ist nicht bedrohlich. Die Sprache ist höflich und ermutigt den Empfänger, Maßnahmen zu ergreifen, wenn er die Rechnung noch nicht bezahlt hat.
* Es gibt keine größeren Grammatik- und Rechtschreibfehler.

**Vertrauensgrad:** 5

Ich bin sehr zuversichtlich in Bezug auf dieses Urteil, weil die E-Mail eine legitime Benachrichtigung von einem Unternehmen (NJW Limited) über eine fällige Rechnung zu sein scheint. Die Sprache ist professionell und höflich, und die Aufforderung, die Rechnung anzusehen, ist vernünftig. Das einzige potenzielle Warnsignal ist das Gefühl der Dringlichkeit, aber es ist nicht aggressiv oder bedrohlich. Insgesamt scheint die E-Mail ein echter Versuch zu sein, den Empfänger über eine Rechnung zu informieren, anstatt eine Spam-Nachricht zu sein.
```

## Tipps für eine effektive Konfiguration

- **Geben Sie einen klaren Kontext an**: Stellen Sie sicher, dass Ihre Eingaben klar und frei von Mehrdeutigkeiten sind, um dem Agenten genaue Bewertungen zu ermöglichen.
- **Verwenden Sie relevante Beispiele**: Testen Sie den Agenten mit verschiedenen Nachrichtenarten, um seine Fähigkeiten zu bewerten und die Konfiguration entsprechend anzupassen.
- **Aktualisieren Sie regelmäßig Ihr Wissen**: Halten Sie Ihre hochgeladenen Dokumente aktuell, um dem Agenten den besten Kontext für die Bewertung zu bieten.
- **Überwachen Sie die Leistung**: Überprüfen Sie die Vertrauensgrade in den Ausgaben, um die Zuverlässigkeit zu beurteilen und notwendige Anpassungen vorzunehmen.
- **Experimentieren Sie mit verschiedenen Modellen**: Probieren Sie verschiedene KI-Modelle aus, um festzustellen, welches die besten Ergebnisse für Ihre Bedürfnisse liefert.

## Verwandte Artikel
