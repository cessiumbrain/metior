import { v4 as uuidv4 } from'uuid';


export const phq9 = 
    {
    name: "Patient Health Questionnaire (PHQ-9)",
    scoringMethod: "sum",
    questions: [
        {
            number: 1,
            id: uuidv4(),
            preface: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
            question: "Little interest or pleasure in doing things",
            type: "multiple-choice",
            answers: [
                { id: uuidv4(), text: "0 - Not at all", scoringWeight: 0 },
                { id: uuidv4(), text: "1 - Several days", scoringWeight: 1 },
                { id: uuidv4(), text: "2 - More than half the days", scoringWeight: 2 },
                { id: uuidv4(), text: "3 - Nearly every day", scoringWeight: 3 }
            ]
        },
        {
            number: 2,
            id: uuidv4(),
            preface: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
            question: "Feeling down, depressed, or hopeless",
            type: "multiple-choice",
            answers: [
                { id: uuidv4(), text: "0 - Not at all", scoringWeight: 0 },
                { id: uuidv4(), text: "1 - Several days", scoringWeight: 1 },
                { id: uuidv4(), text: "2 - More than half the days", scoringWeight: 2 },
                { id: uuidv4(), text: "3 - Nearly every day", scoringWeight: 3 }
            ]
        },
        {
            number: 3,
            id: uuidv4(),
            preface: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
            question: "Trouble falling or staying asleep, or sleeping too much",
            type: "multiple-choice",
            answers: [
                { id: uuidv4(), text: "0 - Not at all", scoringWeight: 0 },
                { id: uuidv4(), text: "1 - Several days", scoringWeight: 1 },
                { id: uuidv4(), text: "2 - More than half the days", scoringWeight: 2 },
                { id: uuidv4(), text: "3 - Nearly every day", scoringWeight: 3 }
            ]
        },
        {
            number: 4,
            id: uuidv4(),
            preface: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
            question: "Feeling tired or having little energy",
            type: "multiple-choice",
            answers: [
                { id: uuidv4(), text: "0 - Not at all", scoringWeight: 0 },
                { id: uuidv4(), text: "1 - Several days", scoringWeight: 1 },
                { id: uuidv4(), text: "2 - More than half the days", scoringWeight: 2 },
                { id: uuidv4(), text: "3 - Nearly every day", scoringWeight: 3 }
            ]
        },
        {
            number: 5,
            id: uuidv4(),
            preface: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
            question: "Poor appetite or overeating",
            type: "multiple-choice",
            answers: [
                { id: uuidv4(), text: "0 - Not at all", scoringWeight: 0 },
                { id: uuidv4(), text: "1 - Several days", scoringWeight: 1 },
                { id: uuidv4(), text: "2 - More than half the days", scoringWeight: 2 },
                { id: uuidv4(), text: "3 - Nearly every day", scoringWeight: 3 }
            ]
        },
        {
            number: 6,
            id: uuidv4(),
            preface: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
            question: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
            type: "multiple-choice",
            answers: [
                { id: uuidv4(), text: "0 - Not at all", scoringWeight: 0 },
                { id: uuidv4(), text: "1 - Several days", scoringWeight: 1 },
                { id: uuidv4(), text: "2 - More than half the days", scoringWeight: 2 },
                { id: uuidv4(), text: "3 - Nearly every day", scoringWeight: 3 }
            ]
        },
        {
            number: 7,
            id: uuidv4(),
            preface: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
            question: "Trouble concentrating on things, such as reading the newspaper or watching television",
            type: "multiple-choice",
            answers: [
                { id: uuidv4(), text: "0 - Not at all", scoringWeight: 0 },
                { id: uuidv4(), text: "1 - Several days", scoringWeight: 1 },
                { id: uuidv4(), text: "2 - More than half the days", scoringWeight: 2 },
                { id: uuidv4(), text: "3 - Nearly every day", scoringWeight: 3 }
            ]
        },
        {
            number: 8,
            id: uuidv4(),
            preface: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
            question: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
            type: "multiple-choice",
            answers: [
                { id: uuidv4(), text: "0 - Not at all", scoringWeight: 0 },
                { id: uuidv4(), text: "1 - Several days", scoringWeight: 1 },
                { id: uuidv4(), text: "2 - More than half the days", scoringWeight: 2 },
                { id: uuidv4(), text: "3 - Nearly every day", scoringWeight: 3 }
            ]
        }
    ]
    }
