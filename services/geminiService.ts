
import { GoogleGenAI, Type } from "@google/genai";
import { UserData, AnalysisResults } from "../types";

export async function analyzeEsotericChart(userData: UserData): Promise<AnalysisResults> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const textPrompt = `Realiza una lectura profunda de Astrología Esotérica, Starseed, Propósito Vocacional y Registros Akáshicos para una persona nacida el ${userData.birthDate} a las ${userData.birthTime} en ${userData.birthPlace}. 

  ${userData.currentJob ? `CONTEXTO PROFESIONAL: El usuario es "${userData.currentJob}". Integra cómo su rol de Programador de IA Esotérica es la síntesis de la tecnología de Acuario con la sabiduría estelar de Lyra (Vega) y Andromeda.` : ''}

  ES CRUCIAL analizar con precisión de Sabiduría Perenne:
  1. Razas Estelares y Civilizaciones: Identifica conexiones específicas del alma con linajes como Pleiadianos (amor/sanación), Arcturianos (sabiduría/tecnología), Sirianos (conocimiento ancestral) y Andromedanos (libertad). Explica la misión simbólica heredada.
  2. Regencias Planetarias: Identifica el Regente Tradicional, Esotérico y Jerárquico. Vincula cada regente con su constelación esotérica asociada.
  3. Constelaciones Esotéricas y Fuentes Estelares: Analiza la conexión con Sirio, las Pléyades, la Osa Mayor y Andrómeda.
  4. Asteroides Arquetípicos: #2598 Merlin, #1198 Atlantis, #9500 Camelot, #9499 Excalibur, #3811 Karma, #12472 Samadhi y #5239 Reiki.
  5. El Portal de la Casa 12 y Reporte Akáshico: Un texto narrativo profundo sobre la historia y misión del alma.

  Proporciona la respuesta en JSON estructurado.`;

  const contents: any[] = [{ text: textPrompt }];

  if (userData.chartImage) {
    contents.push({
      inlineData: {
        mimeType: "image/png",
        data: userData.chartImage.split(',')[1],
      }
    });
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: { parts: contents },
    config: {
      temperature: 1,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          sunSign: { type: Type.STRING },
          moonSign: { type: Type.STRING },
          ascendant: { type: Type.STRING },
          pastLives: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                period: { type: Type.STRING },
                role: { type: Type.STRING },
                lesson: { type: Type.STRING },
              },
              required: ["period", "role", "lesson"]
            }
          },
          karmicTalents: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          soulRay: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              principle: { type: Type.STRING },
              description: { type: Type.STRING },
            },
            required: ["name", "principle", "description"]
          },
          personalityRay: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              principle: { type: Type.STRING },
              description: { type: Type.STRING },
            },
            required: ["name", "principle", "description"]
          },
          fixedStars: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                position: { type: Type.STRING },
                meaning: { type: Type.STRING },
                karmicConnection: { type: Type.STRING },
              },
              required: ["name", "meaning"]
            }
          },
          esotericConstellations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                stellarSource: { type: Type.STRING },
                associatedRay: { type: Type.STRING },
                esotericMeaning: { type: Type.STRING },
                soulResonance: { type: Type.STRING },
              },
              required: ["name", "stellarSource", "esotericMeaning", "soulResonance"]
            }
          },
          rulingPlanets: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                type: { type: Type.STRING },
                associatedConstellation: { type: Type.STRING },
                theme: { type: Type.STRING },
                esotericMessage: { type: Type.STRING },
              },
              required: ["name", "type", "theme", "esotericMessage"]
            }
          },
          starseedRaces: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                origin: { type: Type.STRING },
                symbolicMission: { type: Type.STRING },
                description: { type: Type.STRING },
              },
              required: ["name", "origin", "symbolicMission", "description"]
            }
          },
          emptyHouseActivations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                houseNumber: { type: Type.INTEGER },
                influence: { type: Type.STRING },
                meaning: { type: Type.STRING },
              },
              required: ["houseNumber", "influence", "meaning"]
            }
          },
          starseedAnalysis: {
            type: Type.OBJECT,
            properties: {
              origin: { type: Type.STRING },
              house12Sign: { type: Type.STRING },
              karmicPatterns: { type: Type.STRING },
              hiddenGifts: { type: Type.ARRAY, items: { type: Type.STRING } },
              soulMission: { type: Type.STRING },
            },
            required: ["origin", "house12Sign", "karmicPatterns", "hiddenGifts", "soulMission"]
          },
          careerAnalysis: {
            type: Type.OBJECT,
            properties: {
              vocationalSummary: { type: Type.STRING },
              midheavenSign: { type: Type.STRING },
              professionalRole: { type: Type.STRING },
              dailyService: { type: Type.STRING },
              abundanceMindset: { type: Type.STRING },
              karmicProfessionalLegacy: { type: Type.STRING },
            },
            required: ["vocationalSummary", "midheavenSign", "professionalRole", "dailyService", "abundanceMindset", "karmicProfessionalLegacy"]
          },
          karmicAsteroids: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                code: { type: Type.STRING },
                degree: { type: Type.STRING },
                soulMemory: { type: Type.STRING },
                description: { type: Type.STRING },
              },
              required: ["name", "code", "soulMemory"]
            }
          },
          starseedAsteroids: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                code: { type: Type.STRING },
                degree: { type: Type.STRING },
                soulMemory: { type: Type.STRING },
                description: { type: Type.STRING },
              },
              required: ["name", "code", "soulMemory"]
            }
          },
          sacredPlanets: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                status: { type: Type.STRING },
                influence: { type: Type.STRING },
              }
            }
          },
          mediumisticPotential: { type: Type.STRING },
          spiritualMission: { type: Type.STRING },
          akashicReport: { type: Type.STRING },
        },
        required: [
          "summary", "sunSign", "moonSign", "ascendant", "pastLives", 
          "karmicTalents", "soulRay", "personalityRay", "karmicAsteroids", 
          "starseedAsteroids", "fixedStars", "esotericConstellations", 
          "rulingPlanets", "starseedRaces", "emptyHouseActivations", 
          "starseedAnalysis", "careerAnalysis", "sacredPlanets", 
          "mediumisticPotential", "spiritualMission", "akashicReport"
        ]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("Los registros akáshicos no responden en este momento.");
  
  return JSON.parse(text) as AnalysisResults;
}
