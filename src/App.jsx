import React, { useState } from "react";

const questions = [
  {
    id: "Q1",
    text: `Cas CHU – Achat de scanners médicaux.
L’équipe contrôle uniquement la conformité des pièces administratives, mais n’analyse pas les risques de surcoût, de retard ou de performance du fournisseur.
Quelle affirmation est correcte ?`,
    options: {
      A: "C’est un problème de contrôle interne uniquement",
      B: "C’est un problème de gestion des risques uniquement",
      C: "C’est un problème combiné : absence d’analyse des risques (ERM) + dispositif de contrôle interne insuffisant",
      D: "Aucun problème si les pièces sont complètes"
    },
    correctOption: "C",
    explanation:
      "Les pièces administratives conformes ne garantissent ni la performance ni la soutenabilité. Il manque une analyse prospective des risques (démarche ERM) et des contrôles internes adaptés (CI). Le problème est double."
  },
  {
    id: "Q2",
    text: `Cas EPN agricole – Le même agent analyse les risques phytosanitaires, valide les achats et signe les bons de commande.
Dans le modèle des 3 lignes de maîtrise IFACI, quelle ligne est affaiblie ?`,
    options: {
      A: "Ligne 1 – Opérationnelle",
      B: "Ligne 2 – Fonctions de contrôle (risque, conformité, contrôle interne)",
      C: "Ligne 3 – Audit interne",
      D: "Aucune, c’est une organisation acceptable en EPN"
    },
    correctOption: "B",
    explanation:
      "En cumulant exécution et contrôle, l’agent brouille la frontière entre la 1ère et la 2e ligne. La 2e ligne doit garder un rôle de supervision et de challenge distinct de l’exécution opérationnelle."
  },
  {
    id: "Q3",
    text: "Quel élément est véritablement nouveau dans COSO 2013 par rapport au COSO de 1992 ?",
    options: {
      A: "L’existence de 5 composantes du contrôle interne",
      B: "L’introduction de 17 principes avec documentation systématique",
      C: "La notion de séparation des tâches",
      D: "L’importance des activités de contrôle"
    },
    correctOption: "B",
    explanation:
      "Les 5 composantes existaient déjà en 1992. COSO 2013 formalise 17 principes et renforce la nécessité de documenter et démontrer l’existence et l’efficacité des contrôles."
  },
  {
    id: "Q4",
    text: `Cas Institut de Recherche – Un nouvel axe scientifique est lancé sans évaluation des risques financiers, opérationnels ou d’image associés.
Quel aspect de COSO ERM 2017 est principalement négligé ?`,
    options: {
      A: "La performance",
      B: "La gouvernance et la culture",
      C: "La définition de la stratégie et de l’appétit au risque",
      D: "La revue et l’amélioration du dispositif"
    },
    correctOption: "C",
    explanation:
      "COSO ERM 2017 insiste sur le lien entre stratégie, objectifs et risques. Lancer un programme stratégique sans évaluer les risques revient à ignorer ce pilier."
  },
  {
    id: "Q5",
    text: `Selon ISO 31000, un DAF d’EPN commence directement la matrice des risques sans définir le contexte (objectifs, périmètre, parties prenantes).
Cette approche est-elle conforme à la norme ?`,
    options: {
      A: "Oui, si l’EPN est déjà mature en gestion des risques",
      B: "Non, car ISO 31000 impose d’abord l’étape \"Établir le contexte\"",
      C: "Oui, si COSO est appliqué en parallèle",
      D: "Oui, si les risques sont déjà connus intuitivement"
    },
    correctOption: "B",
    explanation:
      "ISO 31000 structure la démarche : établir le contexte, puis identifier, analyser, évaluer et traiter les risques. Sauter la définition de contexte conduit à une cartographie déconnectée des objectifs."
  },
  {
    id: "Q6",
    text: `Cas CHU – Le risque est formulé ainsi : "Erreur dans l’élaboration du budget".
Comment qualifier cette formulation de risque ?`,
    options: {
      A: "Correcte, suffisamment précise",
      B: "Trop vague, ne décrit ni la cause ni la conséquence",
      C: "Correcte uniquement si l’assiette budgétaire est instable",
      D: "Pertinente pour le contrôle interne budgétaire uniquement"
    },
    correctOption: "B",
    explanation:
      "Un bon énoncé de risque inclut un événement, une cause et une conséquence (ex. : sous-estimation des charges médicales → dépassement de crédits → rupture de trésorerie)."
  },
  {
    id: "Q7",
    text: `Service logistique – Aucun relevé, procès-verbal ou note ne retrace les décisions d’achat de matériel.
Quel est le principal risque pour l’EPN ?`,
    options: {
      A: "Baisse de performance globale",
      B: "Absence de piste d’audit pour les contrôles et investigations",
      C: "Risque purement financier sur le budget",
      D: "Aucun, si les achats sont validés oralement par la hiérarchie"
    },
    correctOption: "B",
    explanation:
      "Sans piste d’audit, l’organisation ne peut pas démontrer la régularité des opérations, ce qui fragilise la conformité, la lutte contre la fraude et l’auditabilité."
  },
  {
    id: "Q8",
    text: `Une Direction ne supervise jamais le travail de son service financier et ne dispose d’aucun tableau de bord ni revue régulière.
Quel principe de COSO 2013 est principalement violé ?`,
    options: {
      A: "Principe 5 – Responsabilités clairement définies",
      B: "Principe 10 – Mise en œuvre d’activités de contrôle",
      C: "Principe 16 – Réaliser des évaluations continues ou ponctuelles",
      D: "Principe 2 – Rôle du conseil d’administration"
    },
    correctOption: "C",
    explanation:
      "La composante « Pilotage » (monitoring) du COSO se traduit par des évaluations régulières du dispositif. L’absence de supervision constitue une défaillance majeure sur ce principe."
  },
  {
    id: "Q9",
    text: "Quelle affirmation décrit correctement l’évolution entre COSO ERM 2004 et COSO ERM 2017 ?",
    options: {
      A: "ERM 2004 intègre la performance, ERM 2017 n’en parle plus",
      B: "ERM 2017 relie explicitement gestion des risques, stratégie et performance",
      C: "Aucun des deux ne prend en compte la culture d’entreprise",
      D: "Les deux exigent une matrice des risques identique en structure"
    },
    correctOption: "B",
    explanation:
      "ERM 2017 met au centre la création et la préservation de valeur, en intégrant la performance, la culture et la stratégie. ERM 2004 était plus centré sur la gestion des risques négatifs."
  },
  {
    id: "Q10",
    text: `Dans un EPN, les mandats sont régulièrement signés en retard, ce qui entraîne des pénalités et des dépenses supplémentaires.
De quel type de risque s’agit-il principalement ?`,
    options: {
      A: "Risque stratégique",
      B: "Risque opérationnel uniquement",
      C: "Risque de conformité uniquement",
      D: "Risque budgétaire affectant la soutenabilité et l’exécution du budget"
    },
    correctOption: "D",
    explanation:
      "Les retards de mandatement génèrent des pénalités et perturbent l’exécution des crédits. Le cœur du problème est budgétaire, même si des dimensions opérationnelles et d’image peuvent exister."
  },
  {
    id: "Q11",
    text: "Le contrôle interne budgétaire (CIB) dans un EPN a pour finalité principale :",
    options: {
      A: "Le respect mécanique des procédures écrites",
      B: "La soutenabilité budgétaire, la maîtrise des engagements et le pilotage de la performance",
      C: "L’audit interne périodique",
      D: "La conformité juridique uniquement, sans lien avec l’efficacité"
    },
    correctOption: "B",
    explanation:
      "Le CIB est un sous-ensemble du contrôle interne axé sur le cycle budgétaire : engagement, liquidation, ordonnancement, paiement et performance associée."
  },
  {
    id: "Q12",
    text: `Un EPN affirme avoir des contrôles, mais n’a aucune procédure, aucun mode opératoire, aucun formulaire standardisé.
Quel risque majeur cela pose-t-il en termes de maîtrise et d’audit ?`,
    options: {
      A: "Uniquement un risque réputationnel",
      B: "Uniquement un risque d’audit",
      C: "Le risque que les contrôles existent mais soient impossibles à prouver et à reproduire",
      D: "Aucun risque si les agents sont expérimentés"
    },
    correctOption: "C",
    explanation:
      "Sans formalisation, le contrôle repose sur des pratiques individuelles, non traçables. Vis-à-vis d’un auditeur ou du régulateur, ce qui n’est pas documenté est considéré comme inexistant."
  },
  {
    id: "Q13",
    text: `Une procédure impose une double signature systématique pour les dépenses supérieures à un certain seuil, mais cette règle n’est jamais respectée en pratique.
Quel est le problème de contrôle interne ?`,
    options: {
      A: "Le contrôle est trop faible",
      B: "Le contrôle est trop fort, donc inutile",
      C: "Le contrôle est mal conçu ou non réaliste, donc contourné et inefficace",
      D: "Le contrôle est trop coûteux et ne devrait pas exister"
    },
    correctOption: "C",
    explanation:
      "Un contrôle inapplicable ou non adapté à la réalité opérationnelle devient un « contrôle mort ». Il vaut mieux simplifier et concevoir des contrôles fiables, applicables et suivis."
  },
  {
    id: "Q14",
    text: `Dans une matrice des risques, un événement est évalué avec une probabilité « moyenne » et un impact « critique » (sur le service rendu au public et le budget).
Comment classeriez-vous ce risque brut ?`,
    options: {
      A: "Faible",
      B: "Moyen",
      C: "Élevé / critique",
      D: "Impossible à classer sans connaître les contrôles existants"
    },
    correctOption: "C",
    explanation:
      "Dans la plupart des grilles, un impact critique fait basculer le risque dans la zone rouge, même avec une probabilité moyenne. Le rôle des contrôles est ensuite de réduire ce risque résiduel."
  },
  {
    id: "Q15",
    text: `Un EPN souhaite : (1) sécuriser ses engagements et son exécution budgétaire, (2) piloter sa performance, (3) structurer sa gestion des risques.
Quel choix de référentiels est le plus pertinent ?`,
    options: {
      A: "COSO 2013 uniquement",
      B: "COSO ERM 2017 uniquement",
      C: "ISO 31000 uniquement",
      D: "Combiner COSO 2013 (contrôle interne), COSO ERM 2017 (lien stratégie-performance-risques) et ISO 31000 (processus de gestion des risques)"
    },
    correctOption: "D",
    explanation:
      "Les référentiels ne sont pas exclusifs. COSO 2013 structure le CI, ERM 2017 relie risques et performance, ISO 31000 décrit la mécanique de gestion des risques. Ensemble, ils sont très adaptés aux EPN."
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (optionKey) => {
    if (showExplanation) return; // éviter de recliquer

    setSelectedOption(optionKey);
    setShowExplanation(true);

    if (optionKey === currentQuestion.correctOption) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#f9fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "#020617",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 25px 50px -12px rgba(15,23,42,0.9)",
          border: "1px solid rgba(148,163,184,0.3)"
        }}
      >
        <header
          style={{
            marginBottom: "16px",
            borderBottom: "1px solid rgba(148,163,184,0.4)",
            paddingBottom: "12px"
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "4px" }}>
            QCM – Module 1 : Contrôle interne & gestion des risques
          </h1>
          <p style={{ fontSize: "14px", color: "#9ca3af" }}>
            Niveau confirmé – DCB / DGBF – EPN ivoiriens
          </p>
        </header>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "13px",
            color: "#9ca3af",
            marginBottom: "16px"
          }}
        >
          <span>
            Question {currentIndex + 1} / {questions.length}
          </span>
          <span>Score : {score} / {questions.length}</span>
        </div>

        {finished ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px"
            }}
          >
            <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
              Quiz terminé 🎯
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "16px" }}>
              Votre score : <strong>{score}</strong> / {questions.length}
            </p>
            <p style={{ fontSize: "14px", color: "#9ca3af", marginBottom: "24px" }}>
              Réutilisez ce QCM comme base de discussion pour les cas pratiques du module.
            </p>
            <button
              onClick={handleRestart}
              style={{
                padding: "10px 20px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background:
                  "linear-gradient(135deg, rgb(59 130 246), rgb(56 189 248))",
                color: "#0b1120",
                fontWeight: 600,
                fontSize: "14px"
              }}
            >
              Recommencer
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(56,189,248,0.05))",
                borderRadius: "12px",
                padding: "16px 18px",
                marginBottom: "16px",
                border: "1px solid rgba(59,130,246,0.4)"
              }}
            >
              <p style={{ fontSize: "15px", whiteSpace: "pre-line" }}>
                {currentQuestion.text}
              </p>
            </div>

            <div style={{ display: "grid", gap: "10px", marginBottom: "16px" }}>
              {Object.entries(currentQuestion.options).map(([key, label]) => {
                const isSelected = selectedOption === key;
                const isCorrect = currentQuestion.correctOption === key;

                let background = "#020617";
                let border = "1px solid rgba(148,163,184,0.5)";
                if (showExplanation) {
                  if (isCorrect) {
                    background = "rgba(22,163,74,0.2)";
                    border = "1px solid rgba(34,197,94,0.9)";
                  } else if (isSelected && !isCorrect) {
                    background = "rgba(220,38,38,0.2)";
                    border = "1px solid rgba(248,113,113,0.9)";
                  }
                } else if (isSelected) {
                  background = "rgba(59,130,246,0.2)";
                  border = "1px solid rgba(59,130,246,0.9)";
                }

                return (
                  <button
                    key={key}
                    onClick={() => handleOptionClick(key)}
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      border,
                      background,
                      color: "#e5e7eb",
                      fontSize: "14px",
                      cursor: "pointer",
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start"
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        minWidth: "20px"
                      }}
                    >
                      {key}.
                    </span>
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div
                style={{
                  marginBottom: "16px",
                  backgroundColor: "rgba(15,23,42,0.9)",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  border: "1px solid rgba(148,163,184,0.6)",
                  fontSize: "13px"
                }}
              >
                <p style={{ marginBottom: "6px" }}>
                  <strong>Bonne réponse :</strong>{" "}
                  {currentQuestion.correctOption}
                </p>
                <p style={{ color: "#e5e7eb" }}>
                  <strong>Explication :</strong> {currentQuestion.explanation}
                </p>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={handleNext}
                disabled={!showExplanation}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: showExplanation ? "pointer" : "not-allowed",
                  background: showExplanation
                    ? "linear-gradient(135deg, rgb(59 130 246), rgb(129 140 248))"
                    : "rgba(75,85,99,0.6)",
                  color: "#e5e7eb",
                  fontWeight: 600,
                  fontSize: "14px"
                }}
              >
                {currentIndex === questions.length - 1
                  ? "Terminer"
                  : "Question suivante"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
