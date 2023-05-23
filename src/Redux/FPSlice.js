import { createSlice } from "@reduxjs/toolkit";

const FPSLice = createSlice({
  name: "FP",
  initialState: {
    weights: [
      {
        id: 1,
        Name: "Input",
        simple: 3,
        average: 4,
        complex: 6,
      },

      //output
      {
        id: 2,
        Name: "Output",
        simple: 4,
        average: 5,
        complex: 7,
      },

      //inquiries
      {
        id: 3,
        Name: "Queries",
        simple: 3,
        average: 4,
        complex: 6,
      },

      //internalFiles
      {
        id: 4,
        Name: "Internal Files",
        simple: 7,
        average: 10,
        complex: 15,
      },

      //externalFiles
      {
        id: 5,
        Name: "External Files",
        simple: 5,
        average: 7,
        complex: 10,
      },
    ],
    UFP: 0,
    TCF: 0,
    Results: [],
    FP: 0,
    DIResults: [],
    DI: 0,
    TCFNames: [
      {
        id: 1,
        name: "1-Data communications",
      },
      {
        id: 2,
        name: "2-Distributed data processing",
      },
      {
        id: 3,
        name: "3-performance",
      },
      {
        id: 4,
        name: "4-Heavily Used Configurations",
      },
      {
        id: 5,
        name: "5-Transaction Rate",
      },
      {
        id: 6,
        name: "6-On-Line Data Entry",
      },
      {
        id: 7,
        name: "7-End-User Effeciency",
      },
      {
        id: 8,
        name: "8-On-line Update",
      },
      {
        id: 9,
        name: "9-Complex Processing",
      },
      {
        id: 10,
        name: "10-Reusability",
      },
      {
        id: 11,
        name: "11-Installation Ease",
      },
      {
        id: 12,
        name: "12-Operational Ease",
      },
      {
        id: 13,
        name: "13-Multiple Sites ",
      },
      {
        id: 14,
        name: "14-Facilitate Changes",
      },
    ],
    DIRates: {
      NoInfluence: 0,
      Incidental: 1,
      Moderate: 2,
      Average: 3,
      Significant: 4,
      Essential: 5,
    },

    AVC: {
      Assembly: 320,
      C: 128,
      COBOL: 105,
      Pascal: 90,
      Ada: 70,
      Cpp: 64,
      VisualBasic: 32,
      OOL: 30,
      SmallTalk: 22,
      CodeGenerator: 15,
      SQL: 12,
      SpreadSheets: 6,
      GraphicalLanguages: 4,
    },
  },
  reducers: {
    calcUFP: (state, action) => {
      if (state.Results.length <= 4) {
        state.Results.push(action.payload);
        state.UFP = state.Results.reduce((accum, current) => {
          return accum + current;
        }, 0);
      }
    },
    calcDI: (state, action) => {
      state.DIResults.push(action.payload);
      state.DI = state.DIResults.reduce((accum, current) => {
        return accum + current;
      }, 0);
    },
    calcTCF: (state, action) => {
      state.TCF = 0.65 + 0.01 * action.payload;
    },
    calcFP: (state, action) => {
      state.FP = state.UFP * state.TCF;
    },
    calcDirectDI: (state, action) => {
      state.DI = action.payload;
    },
  },
});

export const { calcUFP, calcTCF, calcFP, calcDI, calcDirectDI } =
  FPSLice.actions;
export default FPSLice.reducer;
