import React, { useState } from "react";

// ----------------------------
//  QUESTIONS débutants
// ----------------------------
const beginnerQuestions = [
  {
    id: "B1",
    text: `Un EPN reçoit des factures sans engagement préalable. 
Quel est le risque principal ?`,
    options: {
      A: "Conflit hiérarchique",
      B: "Dépenses irrégulières et non maîtrisées",
      C: "Risque uniquement réputationnel",
      D: "Aucun, si la facture est approuvée"
    },
    correctOption: "B",
    explanation:
      "L’absence d’engagement préalable rompt la chaîne budgétaire : l’EPN dépense sans autorisation ni disponibilité de crédits. C’est une irrégularité majeure."
  },
  {
    id: "B2",
    text: `Le directeur signe des bons de commande sans vérifier les crédits disponibles.
Quel principe du CIB est violé ?`,
    options: {
      A: "La séparation des tâches",
      B: "La soutenabilité et la maîtrise des engagements",
      C: "L’audit interne",
      D: "La gestion des risques externes"
    },
    correctOption: "B",
    explanation:
      "Le CIB repose sur le contrôle des engagements avant toute dépense. S'engager sans disponibilité de crédit met en danger l’exécution budgétaire."
  },
  {
    id: "B3",
    text: `Le chef de service valide seul les dépenses importantes.
Quel est le problème ?`,
    options: {
      A: "Aucun, c’est plus rapide",
      B: "Manque de séparation des tâches",
      C: "La dépense devient stratégique",
      D: "Risque uniquement informatique"
    },
    correctOption: "B",
    explanation:
      "L’absence de double validation sur les montants sensibles augmente les risques d’erreur, de fraude et d’opérations irrégulières."
  },
  {
    id: "B4",
    text: `Dans ISO 31000, quelle étape vient avant l'identification des risques ?`,
    options: {
      A: "L'analyse",
      B: "L’établissement du contexte",
      C: "Le traitement",
      D: "La communication"
    },
    correctOption: "B",
    explanation:
      "L’établissement du contexte est fondamental : objectifs, périmètre et parties prenantes conditionnent toute la gestion des risques."
  },
  {
    id: "B5",
    text: `Dans un CHU, aucun document ne retrace les décisions d’achat. Quel risque ?`,
    options: {
      A: "Retard administratif",
      B: "Absence de piste d’audit",
      C: "Risque informatique",
      D: "Risque stratégique uniquement"
    },
    correctOption: "B",
    explanation:
      "Sans preuve ni traçabilité, l’EPN ne peut pas démontrer la régularité de ses dépenses ni se défendre en audit."
  }
];

// ----------------------------
// QUESTIONS confirmés
// Niveau avancé + cas réels EPN
// ----------------------------
const expertQuestions = [
  {
    id: "C1",
    text: `Cas CHU – Un fournisseur propose un prix 40% plus bas que la moyenne du marché, mais exige un paiement anticipé total. 
Le comité technique valide sans analyse. 
Quel est le risque majeur ?`,
    options: {
      A: "Non-conformité documentaire",
      B: "Risque de performance et risque fournisseur non évalués",
      C: "Risque uniquement budgétaire",
      D: "Aucun, si le prix est attractif"
    },
    correctOption: "B",
    explanation:
      "Un prix anormalement bas + un paiement anticipé = risque élevé de défaillance du fournisseur, livraison partielle, ou fraude. Sans analyse de marché ni due diligence, le risque est majeur."
  },
  {
    id: "C2",
    text: `Cas EPN agricole – Le même agent réalise l’analyse technique, valide la conformité et autorise le paiement.
Quel mécanisme de contrôle interne est compromis ?`,
    options: {
      A: "Le reporting",
      B: "La séparation des tâches et l'indépendance des lignes de maîtrise",
      C: "La planification stratégique",
      D: "Le contrôle externe"
    },
    correctOption: "B",
    explanation:
      "L'agent concentre analyse, validation et paiement : absence totale d’indépendance entre les lignes 1 et 2."
  },
  {
    id: "C3",
    text: `Cas Institut de recherche – Un nouveau programme scientifique est lancé sans analyse d’impact RH, financier et opérationnel. 
Quel pilier COSO ERM 2017 est ignoré ?`,
    options: {
      A: "Performance",
      B: "Révision continue",
      C: "Stratégie et appétit au risque",
      D: "Culture d’entreprise uniquement"
    },
    correctOption: "C",
    explanation:
      "COSO ERM 2017 impose d’évaluer les risques liés à la stratégie. Ici, le lien stratégie-risques est absent."
  }
];



export default function App() {
  const [level, setLevel] = useState(null); // débutant / confirmé
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // QUESTION LIST DYNAMIQUE
  const questionList =
    level === "beginner" ? beginnerQuestions : level === "expert" ? expertQuestions : [];

  const current = questionList[index];

  function selectLevel(l) {
    setLevel(l);
    setIndex(0);
    setScore(0);
    setShow(false);
    setFinished(false);
    setSelected(null);
  }

  function chooseOption(key) {
    if (show) return;
    setSelected(key);
    setShow(true);
    if (key === current.correctOption) setScore((s) => s + 1);
  }

  function next() {
    if (index === questionList.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setShow(false);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setShow(false);
    setScore(0);
    setFinished(false);
  }

  // ----------------------------------------
  // ÉCRAN DE CHOIX DU NIVEAU
  // ----------------------------------------
  if (!level) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: 20
        }}
      >
        <div
          style={{
            background: "#020617",
            padding: 30,
            borderRadius: 14,
            width: "90%",
            maxWidth: 600,
            textAlign: "center",
            border: "1px solid #334155"
          }}
        >
          <h1 style={{ marginBottom: 20 }}>
            QCM Module 1 – Contrôle interne & gestion des risques
          </h1>
          <p style={{ marginBottom: 30, color: "#94a3b8" }}>
            Choisissez votre niveau
          </p>

          <button
            onClick={() => selectLevel("beginner")}
            style={{
              padding: "12px 20px",
              marginBottom: 15,
              width: "100%",
              borderRadius: 8,
              background: "#3b82f6",
              border: "none",
              color: "white",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            🟦 Niveau débutant
          </button>

          <button
            onClick={() => selectLevel("expert")}
            style={{
              padding: "12px 20px",
              width: "100%",
              borderRadius: 8,
              background: "#8b5cf6",
              border: "none",
              color: "white",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            🟪 Niveau confirmé
          </button>
        </div>
      </div>
    );
  }

  // ----------------------------------------
  // SI FINI
  // ----------------------------------------
  if (finished) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: 20
        }}
      >
        <div
          style={{
            background: "#020617",
            padding: 30,
            borderRadius: 14,
            width: "90%",
            maxWidth: 650,
            border: "1px solid #334155",
            textAlign: "center"
          }}
        >
          <h1>🎯 Quiz terminé</h1>
          <p style={{ margin: "10px 0 20px" }}>
            Score : {score} / {questionList.length}
          </p>

          <button
            onClick={() => selectLevel(null)}
            style={{
              padding: "10px 18px",
              marginBottom: 15,
              borderRadius: 8,
              background: "#3b82f6",
              border: "none",
              color: "white",
              cursor: "pointer"
            }}
          >
            Retour au choix du niveau
          </button>

          <button
            onClick={restart}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              background: "#64748b",
              border: "none",
              color: "white",
              cursor: "pointer"
            }}
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  // ----------------------------------------
  // ÉCRAN DE QUIZ
  // ----------------------------------------
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        color: "white"
      }}
    >
      <div
        style={{
          background: "#020617",
          padding: 30,
          borderRadius: 14,
          width: "95%",
          maxWidth: 900,
          border: "1px solid #334155"
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <h2>QCM – Module 1 : Contrôle interne & gestion des risques</h2>
          <p style={{ color: "#94a3b8" }}>
            Niveau {level === "beginner" ? "débutant" : "confirmé"}
          </p>
        </div>

        <p style={{ marginBottom: 20 }}>
          Question {index + 1} / {questionList.length}
        </p>

        <div
          style={{
            background: "rgba(59,130,246,0.15)",
            padding: 18,
            borderRadius: 10,
            border: "1px solid rgba(59,130,246,0.4)",
            marginBottom: 20,
            whiteSpace: "pre-line"
          }}
        >
          {current.text}
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {Object.entries(current.options).map(([key, val]) => {
            const isSelected = key === selected;
            const isCorrect = key === current.correctOption;

            let bg = "#020617";
            let border = "1px solid #475569";

            if (show) {
              if (isCorrect) {
                bg = "rgba(34,197,94,0.25)";
                border = "1px solid #22c55e";
              } else if (isSelected) {
                bg = "rgba(239,68,68,0.25)";
                border = "1px solid #ef4444";
              }
            } else if (isSelected) {
              bg = "rgba(59,130,246,0.3)";
              border = "1px solid #3b82f6";
            }

            return (
              <button
                key={key}
                onClick={() => chooseOption(key)}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  borderRadius: 10,
                  border,
                  background: bg,
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  gap: 10
                }}
              >
                <strong>{key}.</strong> {val}
              </button>
            );
          })}
        </div>

        {show && (
          <div
            style={{
              marginTop: 20,
              background: "#0f172a",
              padding: 14,
              borderRadius: 10,
              border: "1px solid #475569"
            }}
          >
            <p>
              <strong>Bonne réponse : </strong>
              {current.correctOption}
            </p>
            <p style={{ marginTop: 8 }}>{current.explanation}</p>
          </div>
        )}

        <div style={{ marginTop: 25, textAlign: "right" }}>
          <button
            onClick={next}
            disabled={!show}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              border: "none",
              background: show ? "#3b82f6" : "#475569",
              cursor: show ? "pointer" : "not-allowed",
              color: "white"
            }}
          >
            {index === questionList.length - 1
              ? "Terminer"
              : "Question suivante"}
          </button>
        </div>

        <div style={{ marginTop: 20 }}>
          <button
            onClick={() => selectLevel(null)}
            style={{
              padding: "8px 14px",
              background: "#475569",
              border: "none",
              borderRadius: 8,
              color: "white",
              cursor: "pointer"
            }}
          >
            Changer de niveau
          </button>
        </div>
      </div>
    </div>
  );
}
