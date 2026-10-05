import * as Print from "expo-print";
import { GeneratedCard } from "../../types/card";

export async function printTrumpCard(card: GeneratedCard) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>PLAYYS Trump Card - ${card.config.name}</title>
        <style>
          @page { size: letter landscape; margin: 0.5in; }
          body {
            font-family: Arial, sans-serif;
            background: #ffffff;
            color: #0f172a;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
          }
          .card-frame {
            width: 3.2in;
            height: 4.8in;
            border: 4px solid #facc15;
            background: #0f172a;
            border-radius: 16px;
            color: #ffffff;
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .card-header { text-align: center; border-bottom: 2px solid #334155; padding-bottom: 8px; }
          .card-title { color: #facc15; font-size: 18px; font-weight: 900; margin: 0; }
          .card-sub { color: #38bdf8; font-size: 12px; font-weight: 700; }
          .stat-row { display: flex; justify-content: space-between; margin: 4px 0; font-size: 12px; }
          .stat-val { color: #facc15; font-weight: 900; }
          .ability-box { background: #1e293b; border-radius: 8px; padding: 8px; margin-top: 6px; }
          .ability-title { color: #f8fafc; font-size: 12px; font-weight: 800; }
          .ability-desc { color: #94a3b8; font-size: 10px; }
        </style>
      </head>
      <body>
        <div class="card-frame">
          <div class="card-header">
            <h1 class="card-title">${(card.config.name || "UNNAMED HERO").toUpperCase()}</h1>
            <div class="card-sub">${card.archetype.title} • ${card.archetype.element}</div>
          </div>
          <div style="text-align: center; margin: 20px 0;">
            <div style="font-size: 40px;">★</div>
            <div style="font-size: 14px; font-weight: 800; color: #facc15;">${card.archetype.rarity} COLLECTIBLE CARD</div>
          </div>
          <div>
            <div class="stat-row"><span>POWER</span><span class="stat-val">${card.stats.power}</span></div>
            <div class="stat-row"><span>SPEED</span><span class="stat-val">${card.stats.speed}</span></div>
            <div class="stat-row"><span>INTELLIGENCE</span><span class="stat-val">${card.stats.intelligence}</span></div>
            <div class="stat-row"><span>ENERGY</span><span class="stat-val">${card.stats.energy}</span></div>
          </div>
        </div>

        <div class="card-frame" style="border-color: #3b82f6;">
          <div class="card-header">
            <h1 class="card-title" style="color: #38bdf8;">CHARACTER DOSSIER</h1>
            <div class="card-sub">${card.archetype.subTitle}</div>
          </div>
          <div>
            <div class="ability-box">
              <div class="ability-title">⚡ ${card.archetype.specialAbility1.name} (DMG: ${card.archetype.specialAbility1.damage})</div>
              <div class="ability-desc">${card.archetype.specialAbility1.description}</div>
            </div>
            <div class="ability-box">
              <div class="ability-title">⚡ ${card.archetype.specialAbility2.name} (DMG: ${card.archetype.specialAbility2.damage})</div>
              <div class="ability-desc">${card.archetype.specialAbility2.description}</div>
            </div>
          </div>
          <div style="font-style: italic; font-size: 11px; color: #c4b5fd; text-align: center;">
            "${card.archetype.quote}"
          </div>
        </div>
      </body>
    </html>
  `;

  await Print.printAsync({ html });
}
