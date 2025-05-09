import { getMoonIllumination } from "suncalc";

export type MoonPhaseReponse = {
  phase: string;
  illumination: number;
  emoji: string;
};

export class MoonPhaseAPI {
  async getMoonPhase(dateISO: string): Promise<MoonPhaseReponse> {
    const date = new Date(dateISO);
    const { phase, fraction } = getMoonIllumination(date);

    let phaseName = "",
      emoji = "";

    if (phase === 0) {
      phaseName = "New Moon";
      emoji = "🌑";
    } else if (phase > 0 && phase < 0.25) {
      phaseName = "Waxing Crescent";
      emoji = "🌒";
    } else if (phase === 0.25) {
      phaseName = "First Quarter";
      emoji = "🌓";
    } else if (phase > 0.25 && phase < 0.5) {
      phaseName = "Waxing Gibbous";
      emoji = "🌔";
    } else if (phase === 0.5) {
      phaseName = "Full Moon";
      emoji = "🌕";
    } else if (phase > 0.5 && phase < 0.75) {
      phaseName = "Waning Gibbous";
      emoji = "🌖";
    } else if (phase === 0.75) {
      phaseName = "Last Quarter";
      emoji = "🌗";
    } else if (phase > 0.75 && phase < 1) {
      phaseName = "Waning Crescent";
      emoji = "🌘";
    } else {
      phaseName = "New Moon";
      emoji = "🌑";
    }

    return {
      phase: phaseName,
      illumination: +(fraction * 100).toFixed(1),
      emoji,
    };
  }
}
