import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, TrendingUp, AlertCircle, RotateCcw } from 'lucide-react';

const ExerciceSynthese = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questionsDebutant = [
    {
      question: "Qu'est-ce que le contrôle interne ?",
      options: [
        "Un événement ponctuel réalisé une fois par an",
        "Un processus continu mis en œuvre par tous les niveaux de l'organisation",
        "Une fonction exclusivement réservée aux auditeurs",
        "Un contrôle exercé uniquement par la direction générale"
      ],
      correctAnswer: 1,
      explanation: "Le contrôle interne est un processus continu impliquant tous les niveaux de l'organisation (dirigeants, managers, personnel opérationnel), destiné à fournir une assurance raisonnable quant à la réalisation des objectifs."
    },
    {
      question: "Combien d'objectifs fondamentaux poursuit le contrôle interne ?",
      options: ["1 objectif", "2 objectifs", "3 objectifs", "5 objectifs"],
      correctAnswer: 2,
      explanation: "Le contrôle interne poursuit 3 objectifs fondamentaux : (1) l'efficacité et l'efficience des opérations, (2) la fiabilité de l'information financière, et (3) la conformité aux lois et règlements."
    },
    {
      question: "Dans le modèle des 3 lignes de maîtrise, qui compose la 1ère ligne ?",
      options: [
        "Les auditeurs internes",
        "Les contrôleurs budgétaires",
        "Le management opérationnel",
        "La direction générale"
      ],
      correctAnswer: 2,
      explanation: "La 1ère ligne de maîtrise est constituée du management opérationnel (chefs de service, responsables d'activités). Ce sont eux les propriétaires des risques et qui mettent en œuvre les contrôles au quotidien."
    },
    {
      question: "Combien de composantes compte le référentiel COSO 2013 ?",
      options: ["3 composantes", "5 composantes", "8 composantes", "17 composantes"],
      correctAnswer: 1,
      explanation: "COSO 2013 repose sur 5 composantes : (1) Environnement de contrôle, (2) Évaluation des risques, (3) Activités de contrôle, (4) Information et communication, (5) Pilotage. Ces 5 composantes sont opérationnalisées par 17 principes."
    },
    {
      question: "Quelle est l'innovation majeure de COSO 2013 par rapport à COSO initial ?",
      options: [
        "L'ajout de 3 nouvelles composantes",
        "L'introduction de 17 principes opérationnels",
        "La suppression de l'évaluation des risques",
        "Le focus uniquement sur la conformité"
      ],
      correctAnswer: 1,
      explanation: "L'innovation majeure de COSO 2013 est l'introduction de 17 principes fondamentaux qui permettent d'opérationnaliser concrètement les 5 composantes. Cela rend le référentiel plus actionnable et facilite les évaluations."
    },
    {
      question: "Quel est le rôle de la 2ème ligne de maîtrise ?",
      options: [
        "Exécuter les opérations quotidiennes",
        "Surveiller et conseiller",
        "Auditer le dispositif de contrôle interne",
        "Approuver les décisions stratégiques"
      ],
      correctAnswer: 1,
      explanation: "La 2ème ligne de maîtrise (contrôleurs budgétaires, risk managers, conformité) a un rôle de surveillance et de conseil. Elle vérifie que la 1ère ligne applique bien les contrôles et conseille sur les bonnes pratiques."
    },
    {
      question: "Que signifie 'assurance raisonnable' en contrôle interne ?",
      options: [
        "Une garantie absolue que les objectifs seront atteints",
        "Une réduction des risques, mais pas leur élimination totale",
        "Une assurance fournie uniquement par les assureurs",
        "Une certification ISO obligatoire"
      ],
      correctAnswer: 1,
      explanation: "L'assurance raisonnable signifie que le contrôle interne vise à réduire les risques à un niveau acceptable, mais ne peut pas les éliminer totalement. Aucun système n'est infaillible à 100%."
    },
    {
      question: "Combien de principes compte le référentiel ISO 31000:2018 ?",
      options: ["5 principes", "8 principes", "17 principes", "20 principes"],
      correctAnswer: 1,
      explanation: "ISO 31000:2018 repose sur 8 principes : Intégré, Structuré, Personnalisé, Inclusif, Dynamique, Fondé sur l'information, Facteurs humains et culturels, Amélioration continue."
    },
    {
      question: "Quelle est la première étape du processus ISO 31000 ?",
      options: [
        "Identifier les risques",
        "Établir le contexte",
        "Évaluer les risques",
        "Traiter les risques"
      ],
      correctAnswer: 1,
      explanation: "La première étape du processus ISO 31000 est 'Établir le contexte', qui consiste à définir les objectifs, le périmètre et les critères d'évaluation avant d'identifier les risques."
    },
    {
      question: "Quelle est la différence principale entre le contrôle interne et le SMQ (Système de Management de la Qualité) ?",
      options: [
        "Le CI et le SMQ sont identiques",
        "Le CI se concentre sur les risques et la conformité, le SMQ sur la qualité et la satisfaction client",
        "Le CI est obligatoire, le SMQ est interdit",
        "Le CI ne concerne que les finances, le SMQ que la production"
      ],
      correctAnswer: 1,
      explanation: "Le CI se concentre sur la maîtrise des risques et la conformité réglementaire, tandis que le SMQ vise la qualité des produits/services et la satisfaction client. Les deux approches sont complémentaires et partagent des outils communs (documentation, amélioration continue, etc.)."
    }
  ];

  const questionsExperimente = [
    {
      question: "Combien de principes composent la première composante 'Environnement de contrôle' dans COSO 2013 ?",
      options: ["3 principes", "4 principes", "5 principes", "6 principes"],
      correctAnswer: 2,
      explanation: "L'Environnement de contrôle compte 5 principes dans COSO 2013, notamment l'engagement en faveur de l'intégrité et des valeurs éthiques, l'indépendance du conseil d'administration, la définition des structures et des responsabilités, etc."
    },
    {
      question: "Pourquoi la 3ème ligne de maîtrise doit-elle être indépendante ?",
      options: [
        "Pour réduire les coûts",
        "Pour éviter les conflits d'intérêts et garantir l'objectivité des évaluations",
        "Pour accélérer les processus",
        "Pour remplacer le management"
      ],
      correctAnswer: 1,
      explanation: "L'indépendance de la 3ème ligne (audit interne) est essentielle pour garantir l'objectivité des évaluations du dispositif de contrôle interne. Elle permet d'éviter tout conflit d'intérêts et d'assurer une assurance indépendante à la direction et au conseil d'administration."
    },
    {
      question: "Quelle est l'évolution conceptuelle majeure entre COSO ERM 2004 et ERM 2017 ?",
      options: [
        "L'ajout de composantes",
        "La suppression de la gestion des risques",
        "L'intégration des opportunités en plus des menaces",
        "Le focus uniquement sur les risques financiers"
      ],
      correctAnswer: 2,
      explanation: "L'évolution majeure d'ERM 2017 est l'intégration d'une vision stratégique des risques incluant les opportunités, pas seulement les menaces. ERM 2017 passe d'une approche défensive (éviter les risques) à une approche stratégique (optimiser le rapport risque/opportunité pour créer de la valeur)."
    },
    {
      question: "Que signifie le principe 'Intégré' dans ISO 31000:2018 ?",
      options: [
        "Le management des risques est une activité séparée",
        "Le management des risques f
