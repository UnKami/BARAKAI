import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface WhitepaperProps {
  onBack: () => void;
}

const Whitepaper: React.FC<WhitepaperProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "BARAKAI",
      subtitle: "Platform: Desktop",
      content: "BARAKAI is a narrative-driven, strategic RPG for PC that combines a deep, character-focused gacha system with tactical base-building. Players take on the role of a \"Master\" guiding a primary \"protagonist Agent\" and a squad of autonomous AI \"Agents.\" The core gameplay revolves around ascending a mysterious \"Tower\" in an automated-RTS combat system. The player strategically intervenes by spawning minions and using skills. Success dynamically generates a \"Living Manga Saga,\" a unique comic detailing the protagonist's recovered past, viewable on a companion mobile app, creating a personalized and evolving narrative."
    },
    {
      title: "Primary Gameplay Mechanics",
      subtitle: "Mechanics",
      content: "The primary gameplay involves tactical RPG elements, strategic base-building, and an AI-driven auto-battler system. Players engage in ascending a multi-tiered 'Tower' filled with combat encounters and strategic puzzles. Combat is automated, but players intervene strategically by deploying minions, buffs, and 'Intervention Skills.' Character collection via a gacha system, interactive narrative generation, and a Web3 economy are also central to the experience."
    },
    {
      title: "Secondary Gameplay Mechanics",
      subtitle: "Mechanics",
      content: "Beyond the core combat and progression, players manage a 'Floating Island' base, where they train Agents, craft gear, and gather resources. A companion mobile app allows for viewing the 'Living Manga Saga,' managing base activities, and handling marketplace/Web3 interactions. This cross-integration between PC and mobile provides a comprehensive experience, allowing for both deep strategic gameplay and convenient light management and narrative consumption."
    },
    {
      title: "Dynamic 'Living Manga Saga'",
      subtitle: "Systemic & Emergent Features",
      content: "The game generates a single, evolving manga in real-time, chronicling the player's progression and choices. This dynamic narrative creates a deeply personal and ownable story, unique to each player. The entire saga is tokenized as a single, evolving NFT, representing the player's unique journey. This feature provides a novel form of narrative reward and player ownership, enhancing replayability and emotional investment in the game's story."
    },
    {
      title: "Master/Agent AI Dynamic",
      subtitle: "Systemic & Emergent Features",
      content: "Players do not directly control individual units. Instead, they command autonomous AI Agents whose behavior is influenced by their unique roles, traits, and 'Drives' (e.g., Glory, Loyalty, Curiosity). This creates a strategic layer where players must understand and leverage their Agents' inherent behaviors rather than micromanaging them. The AI dynamic promotes a more strategic and less click-intensive gameplay experience, focusing on high-level decision-making."
    },
    {
      title: "Strategic Intervention Combat",
      subtitle: "Mechanics",
      content: "Combat is an auto-RTS system where the player's primary interaction is strategic intervention rather than direct control. Players spend resources to spawn minions, deploy buffs, or unleash game-changing 'Intervention Skills' at critical moments. This unique combat system ensures players remain engaged and their decisions have a significant impact on the battle's outcome, despite the autonomous nature of the Agents."
    },
    {
      title: "PC/Mobile Cross-Integration",
      subtitle: "Systemic & Emergent Features",
      content: "The game offers deep, strategic gameplay on PC, complemented by a convenient companion app for mobile devices. The mobile app facilitates narrative consumption through the 'Living Manga Saga' and light management tasks, such as resource collection and Agent training. This cross-platform integration ensures that players can engage with the game in different ways, whether they're at their PC for intense strategy or on the go for quick checks and narrative updates."
    },
    {
      title: "True Account Ownership (Web3)",
      subtitle: "Monetization Model",
      content: "Leveraging Web3 technology, the entire 'Floating Island Base' (representing the player's account) is tokenized as a unique, tradable NFT. This allows for the sale of the complete account, including the non-transferable protagonist Agent and the full evolving 'Manga Saga'. This feature provides players with true ownership over their game assets and progression, enabling a unique player-driven economy and offering a new dimension of value beyond traditional gaming experiences."
    },
    {
      title: "Premise",
      subtitle: "Storyline",
      content: "In a shattered cosmos comprised of floating islands, the player assumes the role of a \"Master\" tasked with guiding a powerful, yet amnesiac, main protagonist Agent. The key to the Agent's forgotten past is sealed within the 'Tower,' a colossal and mysterious structure. The Master's quest is to lead their Agents in ascending the Tower, battling minions of the enigmatic 'Archons.' This premise sets up a narrative of discovery, conflict, and personal growth for the protagonist."
    },
    {
      title: "The Tower: Main PvE Progression",
      subtitle: "Difficulty Progression",
      content: "The Tower serves as the primary PvE game mode and the literal manifestation of the main quest. It is a multi-tiered structure containing hundreds of floors, each presenting a unique combat encounter or strategic puzzle. Clearing these floors is the main driver of progression in the game and the key trigger for generating new chapters of the 'Living Manga Saga.' The Tower's progressive challenges ensure a continuous and engaging path for players to advance."
    },
    {
      title: "The Living Manga: Main Reward & Narrative Generation",
      subtitle: "Rewards",
      content: "The 'Living Manga Saga' is the central narrative reward, dynamically generated by the 'Generative IP Factory' AI based on in-game actions. These actions include clearing Tower floors, defeating key bosses, making critical narrative choices, and Agent achievements during Expeditions. The manga's story is framed as the Agent's recovered past, creating a personal and ownable canon viewable in the companion app, providing a deep, personalized narrative experience."
    },
    {
      title: "The BARAKAI Flywheel: Core Gameplay Loop",
      subtitle: "Mechanics",
      content: "The game is built around a self-reinforcing loop that encompasses preparation, challenge, intervention, and reward. Players strategize and prepare at their 'Floating Island' Base, then challenge the Tower with their AI Agents. During automated battles, players strategically intervene to ensure victory. Clearing floors generates new chapters of the 'Living Manga Saga,' which in turn empowers Agents and allows for further expansion and exploration, looping back to strategic preparation."
    },
    {
      title: "Synchronized Tactics Battle System (STBS)",
      subtitle: "Mechanics",
      content: "Combat in BARAKAI utilizes a Synchronized Tactics Battle System (STBS), an automated RTS where the player's role is not passive observation but high-frequency, critical intervention. This system emphasizes strategic command over autonomous Agents. While Agents engage enemies automatically, the Master's timely interventions, such as spawning minions, deploying buffs, and unleashing 'Intervention Skills,' are crucial for victory, making combat a dynamic and engaging experience."
    },
    {
      title: "Agent's Role: Autonomous Combat",
      subtitle: "Mechanics",
      content: "Agents engage enemies automatically based on their advanced AI (Behavior Trees), which are influenced by their Role (e.g., Knight, Rogue, Archer), Stats, and unique Drives (e.g., Glory, Loyalty, Curiosity). Agents build 'Willpower' through combat engagement, which is their internal resource used to unleash high-impact Ultimate Abilities. This autonomous combat system allows players to focus on higher-level strategy rather than micromanaging individual units."
    },
    {
      title: "Master's Role: Strategic Intervention",
      subtitle: "Mechanics",
      content: "The player, as the Master, acts as the 'Conductor of the Orchestra' through strategic intervention using 'Command Points' (CP). CP is a high-frequency resource that regenerates quickly and is partially earned by Agent actions. Players make critical decisions every 5-10 seconds, such as activating Agent Ultimates, overriding Agent Drives, and deploying tactical minions. This ensures the player's agency is constantly engaged, influencing the flow and outcome of battles."
    },
    {
      title: "Willpower Activation",
      subtitle: "Mechanics",
      content: "Instead of Agents automatically triggering Ultimates, the Master must spend 'Command Points' (CP) to instantly activate an Agent's powerful Ultimate Ability. This mechanism provides the player with tactical control over the most impactful moments of the fight, allowing for precise timing, targeting, and location control. This deepens the strategic layer, making player intervention crucial for maximizing Agent effectiveness and securing victory."
    },
    {
      title: "Dynamic AI Influence (Drive Commands)",
      subtitle: "Mechanics",
      content: "The Master can spend a significant amount of 'Command Points' (CP) to temporarily override an Agent's inherent Drive for 5-10 seconds. For example, a Glory-driven Agent might be forced into a 'Defend Stance,' or a Loyalty-driven Agent to 'Focus Boss.' This feature represents the deepest level of tactical control over the Agents' autonomous behavior, allowing players to adapt their squad's actions to specific battle situations."
    },
    {
      title: "Strategic Minion Deployment",
      subtitle: "Mechanics",
      content: "Players can spend 'Command Points' (CP) to deploy temporary, low-impact Minions from a limited 'Intervention' deck. These minions serve as flexible tools to adjust the battlefield flow. Examples include the Scrapper (Attacker) for damage, the Bulwark (Taunter) for defense, the Healsprite (Support) for healing, and the Haste-Sprite for speed boosts. Minion deployment adds another layer of strategic depth to the auto-RTS combat."
    },
    {
      title: "Synchronization Phase",
      subtitle: "Mechanics",
      content: "The Synchronization Phase is a high-cost skill that triggers a brief slow-motion state during combat. This allows the player to queue up Agent abilities and Minion deployments for devastating, coordinated combos. This mechanic provides a window for precise, high-impact interventions, enabling players to execute complex strategies and turn the tide of battle with carefully timed actions. It rewards anticipation and tactical planning."
    },
    {
      title: "The Tower: Structure and Paradox Rules",
      subtitle: "Levels",
      content: "The Tower features hundreds of floors, each presenting progressively complex challenges. Higher floors introduce 'Paradox Rules'—unique modifiers that dramatically alter combat and force players to adapt strategies. Examples include 'Agents can only be healed by Minions,' 'Only Knight class Agents can damage the boss,' or 'Gravity is reversed, enabling new paths.' These rules ensure that each ascent through the Tower remains fresh and strategically demanding."
    },
    {
      title: "The Base: The Floating Island",
      subtitle: "Locations",
      content: "The 'Floating Island' serves as the player's central hub for all out-of-combat activity and progression. It houses various facilities crucial for managing Agents and resources. This base is essential for preparing for Tower challenges, upgrading Agents, and engaging in other game systems, acting as the strategic center where players plan their next moves and develop their roster of Agents."
    },
    {
      title: "Dojo",
      subtitle: "Base Facility - Locations",
      content: "Within the 'Floating Island' Base, the Dojo is a facility where players can passively train their Agents to increase their level and stats. This continuous training ensures Agents are always improving, contributing to the overall strength of the player's squad. The Dojo is a key component of Agent progression, allowing for steady growth without constant active management."
    },
    {
      title: "Forge",
      subtitle: "Base Facility - Locations",
      content: "The Forge is a facility located on the 'Floating Island' Base where players can craft and upgrade weapons, armor, and artifacts. This allows for customization and enhancement of Agent gear, directly impacting their performance in combat. The Forge is crucial for optimizing Agent loadouts and preparing for tougher challenges within the Tower and Expeditions."
    },
    {
      title: "Expedition Gate",
      subtitle: "Base Facility - Locations",
      content: "The Expedition Gate is a base facility that allows players to send teams of Agents on autonomous side-missions. These Expeditions are vital for gathering rare resources, testing new team compositions, and finding unique items. The Expedition Gate expands the game's scope beyond the Tower, offering additional avenues for progression and resource acquisition."
    },
    {
      title: "Arena",
      subtitle: "Base Facility - Locations",
      content: "The Arena is a facility within the 'Floating Island' Base that provides access to asynchronous PvP combat modes. Here, players can test their Agent teams against those of other players, setting defensive strategies for their AI team. The Arena offers competitive challenges and opportunities to prove the strength and tactical prowess of one's Agents in a social combat setting."
    },
    {
      title: "Marketplace",
      subtitle: "Base Facility - Locations",
      content: "The Marketplace is a facility on the 'Floating Island' Base where players can trade NFT assets with other players. This integrates the Web3 economy directly into the game's core loop, allowing for player-driven exchange of digital assets. The Marketplace facilitates ownership and monetization of in-game items, enhancing the player's investment and interaction with the game's economy."
    },
    {
      title: "Expeditions: Dynamic Side-Missions",
      subtitle: "Mechanics",
      content: "Expeditions are autonomous side-missions designed for resource gathering and secondary challenges. Players send Agent squads on these missions to collect rare resources, test team compositions, and find unique items. Unlike the linear Tower, Expeditions feature dynamically designed maps with obstacles and rules that require specific Agent abilities, creating a playground for dynamic AI and varied strategic approaches."
    },
    {
      title: "Expedition Map Features",
      subtitle: "Mechanics",
      content: "Expedition maps are dynamically designed with unique obstacles and rules that demand specific Agent abilities. These include Climbable Walls for Rogue/Agility Agents, Destructible Barricades for Knight/Brute Force Agents, Strategic High Ground for Archer Agents, Stealth Zones (bushes) for Rogues, and Alarm Traps. These features create varied tactical environments, encouraging players to adapt their team compositions and strategies for each mission."
    },
    {
      title: "Expedition Mission Types",
      subtitle: "Mechanics",
      content: "Expeditions offer a variety of mission scenarios beyond simple resource gathering. These can include rescue missions or strategic 'Capture the Flag'-style objectives against enemy AI factions. The diverse mission types ensure that Expeditions remain engaging and provide varied challenges, encouraging players to develop versatile Agent squads and adaptive strategies to succeed in different contexts."
    },
    {
      title: "Agent Acquisition",
      subtitle: "Mechanics",
      content: "Players 'awaken' new Agents primarily through a gacha-style system. The main protagonist Agent, however, is unique and not acquired through this system. This gacha mechanic allows for the collection of a diverse roster of AI Agents, each with distinct attributes and narrative significance, driving player engagement through anticipation and the pursuit of powerful or rare units."
    },
    {
      title: "Agent Attributes",
      subtitle: "Playable Characters",
      content: "Each Agent is unique, defined by both their in-game stats and their role in the narrative. Core Stats include STR, AGI, INT, VIT, DEX, and LCK, while Derived Stats cover HP, WILL (skill resource), and MORALE (a hidden stat). These attributes, combined with inherent personality biases (Drives) and activity-weight scalars (Traits), influence their autonomous decision-making and overall combat effectiveness, making each Agent distinct and strategic."
    },
    {
      title: "Agent Leveling",
      subtitle: "Progression Systems",
      content: "Agents progress through leveling, which increases their base stats. This process occurs passively in the Dojo and actively through combat engagement. Continuous leveling ensures that Agents grow in power over time, allowing them to tackle increasingly difficult challenges in the Tower and Expeditions. This system provides a consistent sense of character development and strength accumulation."
    },
    {
      title: "Skill Upgrades",
      subtitle: "Progression Systems",
      content: "Skill Upgrades enhance the effects of an Agent's skills. This system allows players to customize and improve the specific abilities of their Agents, making them more potent in combat. Strategic skill upgrades are crucial for optimizing Agent performance and tailoring them to specific tactical roles within the squad, adding depth to character development."
    },
    {
      title: "Gear Progression",
      subtitle: "Progression Systems",
      content: "Players can equip weapons, armor, and artifacts found in the Tower or crafted at the Forge. This gear provides significant boosts to Agent stats and capabilities, allowing for further customization and power scaling. The pursuit and crafting of powerful gear are essential for overcoming higher-level challenges and optimizing Agent performance, offering a tangible sense of progression."
    },
    {
      title: "Agent Awakening",
      subtitle: "Progression Systems",
      content: "Agent Awakening is a duplicate system where obtaining a copy of an Agent provides 'Awaken Shards.' These shards are used to permanently increase the Agent's base stats and unlock new passive abilities. This system incentivizes collecting duplicate Agents, offering a clear path to significantly enhance core units and further specialize their roles, adding a long-term progression goal."
    },
    {
      title: "NFT Categories (Play-to-Own)",
      subtitle: "Monetization Model",
      content: "The core ownable assets in the game are structured as NFTs, emphasizing a play-to-own model. These include the entire 'Floating Island Base' (as the primary, single-tradable NFT representing the player's account), individual Autonomous Agent NFTs (for non-protagonist Agents), High-Tier Items (legendary weapons and artifacts), and the 'Living Manga Saga' NFT (a single, evolving asset). This framework facilitates true ownership and potential monetization for players."
    },
    {
      title: "The Base/Account NFT",
      subtitle: "Loot & Equipment",
      content: "The 'Floating Island Base' is the primary, single-tradable NFT, representing the player's complete account. Selling this NFT transfers all its contents, including the non-transferable protagonist Agent, the full Agent roster, all gear, and the complete evolving 'Manga Saga' NFT. This offers players true ownership and the ability to monetize their entire game progression and assets as a single, valuable digital item."
    },
    {
      title: "Autonomous Agent NFTs",
      subtitle: "Loot & Equipment",
      content: "All non-protagonist Agents in the game are individually mintable and tradable as Autonomous Agent NFTs. This allows players to truly own their collected Agents and participate in a player-driven marketplace. The ability to trade Agents adds a significant economic layer to the game, providing flexibility in roster management and potential for value creation based on market demand and rarity."
    },
    {
      title: "High-Tier Items (NFTs)",
      subtitle: "Loot & Equipment",
      content: "Legendary weapons and artifacts are categorized as High-Tier Items and are also NFTs. This means players can own, trade, and potentially monetize these powerful in-game assets. The rarity and utility of these items, combined with their NFT status, add a layer of prestige and economic value, incentivizing players to seek out and acquire the most powerful gear for their Agents."
    },
    {
      title: "Living Manga Saga NFT",
      subtitle: "Loot & Equipment",
      content: "The entire 'Living Manga Saga' is tokenized as a single, evolving NFT that updates with player progression. This asset is intrinsically tied to the Base NFT. Players can monetize this unique, personalized saga by allowing other players to 'Read' or license access to their chronicle for a fee. This innovative use of NFTs provides a unique way for players to own and potentially profit from their personalized narrative journey."
    },
    {
      title: "Arena (PvP)",
      subtitle: "Multiplayer",
      content: "The Arena offers asynchronous social combat where players set defensive strategies for their AI team to battle against other players' Agents. This includes 'Echo Duel' (1v1) for pitting a single Agent against another, 'Chorus Squad' (5v5) for full team battles, and 'Raid' (Base vs. Base) for strategic asynchronous base defense and offense. The Arena provides competitive engagement without requiring real-time interaction, allowing players to test their strategies and Agent compositions."
    },
    {
      title: "Live Operations",
      subtitle: "Live Events",
      content: "The game will feature a regular cadence of seasonal events, new story arcs, and global modifiers (e.g., 'Celestial Calendar'). These live operations are designed to keep the experience fresh and imprint rarity on player sagas. By regularly introducing new content and challenges, the game aims to maintain player engagement, foster a dynamic community, and ensure a continuously evolving experience for all Masters."
    },
    {
      title: "Permadeath Clause",
      subtitle: "Rules",
      content: "To add narrative weight, a unique permadeath rule is in effect. If the Main Protagonist Agent dies during a main quest (Tower) mission, the attempt is 'negated by the narrator,' the timeline declared 'false,' and all other Agents lose memory of the attempt, requiring the player to retry the floor. If a non-protagonist Agent dies and the mission is successfully completed, that death is permanent, and a 'Tombstone NFT' is created as a memento."
    },
    {
      title: "First Time User Experience (FTUE)",
      subtitle: "Onboarding & Tutorial",
      content: "The game provides a 20-minute guided introduction to all core systems, led by a guide character known as 'The Archivist.' The FTUE flow includes: an introduction to the 'Manga,' Agent Awakening, Base Building, the first Tower Climb (with STBS/Minion tutorial), and the generation of the first Manga Chapter. This comprehensive onboarding ensures new players understand the game's mechanics, narrative, and progression systems effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-[#05020a] pt-24 pb-20 px-4 md:px-8 relative z-20">
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#05020a]/90 backdrop-blur-md border-b border-purple-900/30 py-4 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display font-bold text-sm tracking-widest uppercase">Return to Simulation</span>
          </button>
          
          <div className="flex items-center gap-2 opacity-80">
            <BookOpen className="w-5 h-5 text-fuchsia-500" />
            <span className="text-white font-display font-bold tracking-widest">ARCHIVES</span>
          </div>
        </div>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-12 mt-8"
      >
        <div className="text-center border-b border-purple-500/30 pb-12">
          <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-4 tracking-tighter">
            WHITEPAPER
          </h1>
          <p className="text-purple-300 font-mono tracking-widest uppercase">
            Technical Documentation V 1.0
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative"
            >
              {/* Decoration Line */}
              <div className="absolute -left-4 md:-left-8 top-0 h-full w-[1px] bg-gradient-to-b from-purple-500/50 to-transparent opacity-30" />
              
              <div className="mb-2">
                <span className="text-xs font-bold text-fuchsia-500 tracking-[0.2em] uppercase bg-fuchsia-900/10 px-2 py-1 rounded">
                  {section.subtitle}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold font-display text-white mb-4 tracking-wide">
                {section.title}
              </h2>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="pt-16 text-center">
          <button 
            onClick={onBack}
            className="px-8 py-4 bg-transparent border border-purple-500/30 hover:border-fuchsia-500 text-purple-300 hover:text-white transition-all font-display font-bold uppercase tracking-widest"
          >
            Close Archives
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default Whitepaper;
