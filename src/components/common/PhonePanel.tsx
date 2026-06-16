"use client";

import ScoreGauge from "./ScoreGauge";

const FONT = '"Hanken Grotesk", sans-serif';

/** OraScore panel — a clean CSS recreation of the Scout app, light theme. */
export default function PhonePanel() {
  return (
    <div className="d-phone">
      <div className="d-phone-notch" />
      <div className="d-phone-screen">
        <div className="d-streak">
          <span className="d-spark" /> 5-day streak
        </div>
        <div className="d-gauge-main">
          <ScoreGauge
            value={5.3}
            max={10}
            size={208}
            thickness={17}
            gradient={["#f6a623", "#f0623e", "#e8506b"]}
            track="rgba(20,25,30,0.06)"
            valueColor="#15191d"
            label="OraScore"
            labelColor="#5a636e"
            font={FONT}
          />
        </div>
        <div className="d-gauge-row">
          <div className="d-gauge-sm">
            <ScoreGauge
              value={8.7}
              max={10}
              size={118}
              thickness={11}
              gradient={["#3da8d8", "#3fcf9b"]}
              track="rgba(20,25,30,0.06)"
              valueColor="#15191d"
              label="Tooth"
              labelColor="#5a636e"
              font={FONT}
            />
          </div>
          <div className="d-gauge-sm">
            <ScoreGauge
              value={3.5}
              max={10}
              size={118}
              thickness={11}
              gradient={["#f6a623", "#f0623e"]}
              track="rgba(20,25,30,0.06)"
              valueColor="#15191d"
              label="Gum"
              labelColor="#5a636e"
              font={FONT}
            />
          </div>
        </div>
        <div className="d-feedback">
          Your gum score could use a little love — try gentle flossing along your
          lower-left gumline this week.
        </div>
      </div>
    </div>
  );
}
