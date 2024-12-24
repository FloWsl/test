import React from 'react';
import { BookOpen, Star, Coins, Trophy, ArrowRight, Users, Calendar, Target, Gift, MessageCircle, Bell } from 'lucide-react';

export function AirdropGuide() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* SEO-optimized header section */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            PLAY2AIRDROP Guide: Complete Guide to Sleepagotchi Token Allocation
          </h1>
          <div className="flex items-center justify-center gap-2 text-galaxy-300 mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="text-lg">Complete Strategy Guide</span>
          </div>
          <p className="text-galaxy-300 text-center max-w-2xl mx-auto">
            Master Sleepagotchi LITE gameplay mechanics and optimize your point earning strategies to maximize your share in the upcoming token distribution.
          </p>
        </header>

        {/* Table of Contents */}
        <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon mb-8">
          <h2 className="text-2xl font-bold text-galaxy-100 mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-galaxy-100">In-Game Activities (Telegram App)</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-galaxy-300">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Daily Essential Activities</span>
                </li>
                <li className="flex items-center gap-2 text-galaxy-300">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Hero Collection System</span>
                </li>
                <li className="flex items-center gap-2 text-galaxy-300">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Gold Earning Strategies</span>
                </li>
                <li className="flex items-center gap-2 text-galaxy-300">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Leaderboard Optimization</span>
                </li>
                <li className="flex items-center gap-2 text-galaxy-300">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Clan Participation</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-galaxy-100">Community & External Activities</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-galaxy-300">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>Discord Integration & Community Events</span>
                </li>
                <li className="flex items-center gap-2 text-galaxy-300">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span>V1 and V2 Player Benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Game Introduction */}
        <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon mb-8">
          <h2 className="text-2xl font-bold text-galaxy-100 mb-6">What is Sleepagotchi LITE?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-galaxy-100">
                <Target className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold">Telegram-Based Gaming</h3>
              </div>
              <p className="text-galaxy-300">
                Sleepagotchi LITE is the Telegram-based version of the upcoming full Sleepagotchi game. This LITE version allows players to start earning points that will convert into tokens for the full game launch. The full version will be deployed on the Solana blockchain after TGE, offering an expanded gaming experience with additional features and capabilities.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-galaxy-100">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold">Token Generation Event</h3>
              </div>
              <p className="text-galaxy-300">
                Snapshot of total points will be taken prior to TGE in Q1 2025 to determine final token allocation.
              </p>
            </div>
          </div>
        </section>

        {/* Core Game Mechanics */}
        <div className="space-y-8">
          {/* Getting Started Section */}
          <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon">
            <h2 className="text-2xl font-bold text-galaxy-100 mb-4">Getting Started</h2>
            <div className="prose prose-invert">
              <p className="text-galaxy-300">
                When you first open Sleepagotchi LITE in Telegram, you'll land on the homepage which serves as your central hub for all game activities. Here you can access your hero collection, view your resources (Gold, Gems, Points), and navigate to different game features through the intuitive menu system.
              </p>
              <div className="my-6 w-full flex justify-center">
                <img src="/api/placeholder/400/600" alt="Telegram Interface Overview" className="rounded-lg border border-galaxy-700/50" />
              </div>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-galaxy-300">Join using the official Telegram link to access the game</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-galaxy-300">Start exploring the in-game features and mechanics</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-galaxy-300">Connect with the community through provided Discord links</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Hero Collection System */}
          <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon">
            <h2 className="text-2xl font-bold text-galaxy-100 mb-4">Hero Collection System</h2>
            <div className="prose prose-invert">
              <p className="text-galaxy-300">
                The hero system is fundamental to your point-earning potential in Sleepagotchi LITE. With 23 unique heroes across three distinct rarity tiers: Rare, Epic, and Legendary. What makes this system particularly interesting is that all rarities contribute equally to your star count – it's not about having the rarest heroes, but about how efficiently you can accumulate and upgrade them.
              </p>
              <div className="mt-6 grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-galaxy-800 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-galaxy-100">Star System Progression</h3>
                    <p className="text-galaxy-300">
                      The star progression system rewards strategic collection and upgrading. Here's how the duplicate requirements scale:
                      2★: Requires 2 total cards
                      3★: Requires 5 total cards (3 additional)
                      4★: Requires 9 total cards (4 additional)
                      5★: Requires 14 total cards (5 additional)
                      
                      Each subsequent star level follows this pattern, requiring one more card than the previous level's increment. This creates an engaging progression system where every duplicate card matters.
                      
                      You can find your total number of stars on your hero collection page, this total count will be taken into account at snapshot and converted into points.
                    </p>
                    <div className="my-6 w-full flex justify-center">
                      <img src="/api/placeholder/400/600" alt="Hero Collection Stars" className="rounded-lg border border-galaxy-700/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gold Stars & Farming */}
          <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon">
            <h2 className="text-2xl font-bold text-galaxy-100 mb-4">Gold Stars & Farming</h2>
            <div className="prose prose-invert">
              <p className="text-galaxy-300">
                In the clan environment, gold stars serve as crucial farming locations for efficient resource gathering. Every gold star interaction contributes to your personal total. Gold earnings center mainly around the constellation system and its gold stars, providing a consistent way to accumulate points through gold conversion.
              </p>
              <div className="mt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-galaxy-800 flex items-center justify-center flex-shrink-0">
                  <Coins className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-galaxy-100">Maximizing Gold Collection</h3>
                  <p className="text-galaxy-300">
                    Gold earnings directly translate into points through the constellation system and gold stars. Focus on consistent gold farming through these mechanics to improve your leaderboard position.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Daily Rewards Section */}
          <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon">
            <h2 className="text-2xl font-bold text-galaxy-100 mb-4">Daily Rewards System</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-galaxy-100">4-Day Reward Cycle</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    { day: 'Day 1', reward: 'Gem' },
                    { day: 'Day 2', reward: 'Gacha' },
                    { day: 'Day 3', reward: 'Gold' },
                    { day: 'Day 4', reward: 'Airdrop Points' }
                  ].map((item) => (
                    <li key={item.day} className="flex items-center gap-2 text-galaxy-300">
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                      <span>{item.day}: {item.reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-semibold text-galaxy-100">Consistency Rewards</h3>
                </div>
                <p className="text-galaxy-300">
                  Regular claiming of daily rewards ensures steady progress and maximizes your point accumulation over time.
                </p>
              </div>
            </div>
          </section>

          {/* Discord Integration & Community Events */}
          <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon">
            <h2 className="text-2xl font-bold text-galaxy-100 mb-4">Discord Integration & Community Events</h2>
            <div className="prose prose-invert">
              <p className="text-galaxy-300">
                Discord participation offers substantial opportunities for point earning through various engagement systems and community activities. While to fate, there is no indication on how discord points will be converted into airdrop points, understanding how to maximize these opportunities is crucial for optimal point accumulation.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-galaxy-100 mb-4">Mastering the Level-Based Point System</h3>
                <p className="text-galaxy-300">
                  Discord rewards active participation through a tiered role system that directly impacts your daily point earning potential. If you are not on Sleepagotchi discord, join using the following invite link: <a href="https://mee6.xyz/i/nKnO0XURWC" className="text-purple-400 hover:text-purple-300">https://mee6.xyz/i/nKnO0XURWC</a>
                </p>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-semibold text-galaxy-100 mb-2">Role Progression & Rewards</h4>
                  <ul className="space-y-2">
                    <li className="text-galaxy-300">• Level 10 (Rank D): 3 points daily</li>
                    <li className="text-galaxy-300">• Level 15 (Rank C): 5 points daily</li>
                    <li className="text-galaxy-300">• Level 20 (Rank B): 7 points daily</li>
                    <li className="text-galaxy-300">• Level 25 (Rank A): 10 points daily</li>
                    <li className="text-galaxy-300">• Level 30 (Rank S): 14 points daily</li>
                  </ul>
                </div>

                <p className="text-galaxy-300 mt-4">
                  To increase level in Discord, it's extremely simple, every message you send rewards you with some XP, with a maximum of one message per minute. It will take you an average of 250 messages to get to level 10. Come and chat with the community, and get the best role you can.
                </p>

                <p className="text-galaxy-300 mt-4">
                  Understanding this progression system is crucial because these points stack with other earnings, potentially allowing you to earn up to 40 points daily when optimized correctly!
                </p>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-semibold text-galaxy-100 mb-2">Daily Claiming Strategy</h4>
                  <p className="text-galaxy-300">Your daily Discord earnings come from two sources:</p>
                  <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li className="text-galaxy-300">Your level-based claim (3-40 points depending on rank)</li>
                    <li className="text-galaxy-300">The universal bonus claim (+1 point available to everyone)</li>
                  </ol>
                  <p className="text-galaxy-300 mt-2">
                    Those earnings are not automatically added and you need to claim those points using the Engage bot in the <a href="https://discord.com/channels/961446120364605540/977514283241979955" className="text-purple-400 hover:text-purple-300">🤖 bot-commands</a> channel and type /claim role and /claim daily (if you are using the bot for the first time you will have to connect your X account)
                  </p>
                </div>

                <div className="bg-yellow-900/30 border border-yellow-700/50 p-4 rounded-lg mt-4">
                  <p className="text-yellow-200 font-semibold">⚠️ Important:</p>
                  <p className="text-galaxy-300">
                    If you reach Rank S (Level 30), maintain regular activity. A 30-day inactivity period will result in demotion to Rank A, significantly reducing your daily point earnings.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-galaxy-100 mb-4">Community Night Events Guide</h3>
                <p className="text-galaxy-300">
                  Happening every week in Discord, Community Nights are a cornerstone of the Sleepagotchi ecosystem, offering exciting opportunities for point earning and community engagement. These events take place every Wednesday at 13:00 UTC and are designed to reward both active participation and consistent attendance.
                </p>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-semibold text-galaxy-100 mb-2">Event Structure</h4>
                  <ul className="space-y-2">
                    <li className="text-galaxy-300">• Location: Discord's <a href="https://discord.com/channels/961446120364605540/1002181904520462388" className="text-purple-400 hover:text-purple-300">📍・events-room channel</a></li>
                    <li className="text-galaxy-300">• Time: Every Wednesday at 13:00 UTC</li>
                    <li className="text-galaxy-300">• Theme Announcement: 1 hour before event in events-room</li>
                    <li className="text-galaxy-300">• Participation: Open to all @Echoes members</li>
                  </ul>
                </div>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-semibold text-galaxy-100 mb-2">Point Earning Opportunities</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    <li className="text-galaxy-300">
                      <span className="font-semibold">Base Attendance Reward</span> 
                      • Guaranteed 15 points just for showing up and interacting on a message when prompted, simply being present counts
                    </li>
                    <li className="text-galaxy-300">
                      <span className="font-semibold">Activity Participation</span>
                      <ul className="ml-6 mt-2 space-y-1">
                        <li>• Quizzes with varying themes</li>
                        <li>• Interactive community games</li>
                        <li>• Special announcements and alpha drops</li>
                        <li>• Additional points for game and quiz winners</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-semibold text-galaxy-100 mb-2">Star Streak System</h4>
                  <p className="text-galaxy-300">Every week you join, you increase your attendance streak and multiply your rewards:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="text-galaxy-300">• Maximum of 10 stars (10 attendance in a row) achievable</li>
                    <li className="text-galaxy-300">• Each star adds +1 to your base attendance points</li>
                    <li className="text-galaxy-300">• Stars apply to both community night and flash event rewards</li>
                  </ul>

                  <div className="mt-4">
                    <p className="text-galaxy-100 font-semibold">Example Reward Calculation:</p>
                    <ul className="space-y-2 mt-2">
                      <li className="text-galaxy-300">• Base attendance: 15 points</li>
                      <li className="text-galaxy-300">• With 5 stars: 20 points (15 base + 5 from stars)</li>
                      <li className="text-galaxy-300">• Stars also boost flash event earnings throughout the week</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <p className="text-purple-400">💡 Pro Tip:</p>
                  <p className="text-galaxy-300">
                    Even if you're not confident about winning quizzes or games, regular attendance is key. The star system ensures that consistent participants earn increasingly better rewards over time. Some games like Rumble are completely random, it's always worth to try!
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-galaxy-100 mb-4">Flash Events Strategy Guide</h3>
                <p className="text-galaxy-300">
                  Flash events provide exciting opportunities for bonus point earnings through spontaneous community engagement. Understanding how to capitalize on these events is crucial for maximizing your overall point accumulation.
                </p>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-semibold text-galaxy-100 mb-2">Event Timing and Participation</h4>
                  <p className="text-galaxy-300">Flash events typically occur:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="text-galaxy-300">• 2-3 times per week</li>
                    <li className="text-galaxy-300">• Between 5-8pm UK time (or when the moderator is free really)</li>
                    <li className="text-galaxy-300">• With @everyone notifications for start times</li>
                    <li className="text-galaxy-300">• It generally occurs in the <a href="https://discord.com/channels/961446120364605540/961446120364605542" className="text-purple-400 hover:text-purple-300">general-chat</a> channel of the discord</li>
                  </ul>
                </div>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <h4 className="text-lg font-semibold text-galaxy-100 mb-2">Optimizing Flash Event Rewards</h4>
                  <p className="text-galaxy-300">These events frequently feature Gartic games and offer:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="text-galaxy-300">• Base participation points for all players</li>
                    <li className="text-galaxy-300">• Enhanced rewards for top performers</li>
                    <li className="text-galaxy-300">• Varying reward distributions</li>
                    <li className="text-galaxy-300">• No entry barriers or level requirements</li>
                  </ul>
                </div>

                <div className="bg-galaxy-800/50 p-4 rounded-lg mt-4">
                  <p className="text-purple-400">💡 Pro Tip:</p>
                  <p className="text-galaxy-300">
                    Enable Discord notifications for the general chat channel to never miss a flash event announcement.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-galaxy-100 mb-4">Other Discord Points</h3>
                <p className="text-galaxy-300">
                  Keep an eye on the <a href="https://discord.com/channels/961446120364605540/1293704905420443668" className="text-purple-400 hover:text-purple-300">#🔔・twitter-engage</a> channel. A few interactions on the indicated tweets will bring you some extra points easily!
                </p>
              </div>
            </div>
          </section>

          {/* Legacy Benefits */}
          <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon mb-8">
            <h2 className="text-2xl font-bold text-galaxy-100 mb-4">V1 and V2 Player Benefits</h2>
            <p className="text-galaxy-300">Legacy players from previous versions of Sleepagotchi receive special consideration in the points system.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-galaxy-100">V1 Legacy Recognition</h3>
                <p className="text-galaxy-300">
                  While specific conversion ratios haven't been announced for V1 progress, there will be valuable rewards for V1 players (alpha and beta)
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-galaxy-100">V2 Progress Benefits</h3>
                <p className="text-galaxy-300">V2 players will see their previous achievements recognized through two primary metrics:</p>
                <div className="space-y-4 mt-4">
                  <div className="bg-galaxy-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-galaxy-100">Day Streak Recognition</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="text-galaxy-300">• Total accumulated day streaks will factor into point calculations</li>
                      <li className="text-galaxy-300">• Precise conversion rates to be announced</li>
                    </ul>
                  </div>
                  <div className="bg-galaxy-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-galaxy-100">Room Achievement Benefits</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="text-galaxy-300">• Number of rooms opened will be considered</li>
                      <li className="text-galaxy-300">• Additional point allocations based on progress with conversion rates to be announced</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-8 border border-galaxy-700/50 shadow-neon">
            <h2 className="text-2xl font-bold text-galaxy-100 mb-4">Conclusion: Maximizing Your PLAY2AIRDROP Rewards</h2>
            <div className="prose prose-invert">
              <p className="text-galaxy-300">
                Your dedication to playing Sleepagotchi LITE directly impacts your airdrop allocation. With the snapshot scheduled for Q1 2025, you have a clear timeframe to accumulate as many points as possible. Remember: every point earned until the snapshot is an investment in your future token rewards. Here's your strategy for maximizing your airdrop:
              </p>
              <div className="mt-6 space-y-4">
                <div className="bg-galaxy-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-galaxy-100">1. Discord Daily Engagement</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="text-galaxy-300">• Consistent point accumulation through daily claims</li>
                    <li className="text-galaxy-300">• Active Discord participation for additional rewards</li>
                    <li className="text-galaxy-300">• Regular community event participation</li>
                  </ul>
                </div>
                <div className="bg-galaxy-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-galaxy-100">2. Strategic Gameplay</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="text-galaxy-300">• Balanced approach to hero collection and gold farming</li>
                    <li className="text-galaxy-300">• Daily Claim</li>
                    <li className="text-galaxy-300">• Active clan involvement for bonus opportunities</li>
                  </ul>
                </div>
                <div className="bg-galaxy-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-galaxy-100">3. Long-term Optimization</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="text-galaxy-300">• Progress through Discord ranks for higher daily rewards</li>
                    <li className="text-galaxy-300">• Develop sustainable farming routines until snapshot</li>
                  </ul>
                </div>
              </div>
              <p className="text-galaxy-300 mt-6">
                Remember, PLAY2AIRDROP rewards active and consistent players. The more you play and the more points you earn before the snapshot in Q1 2025, the larger your token allocation will be at TGE. Focus on building sustainable gaming habits and maintaining consistent engagement across all point-earning methods.
              </p>
              <p className="text-galaxy-300 mt-4">
                Stay tuned for updates to this guide as new features and earning opportunities are announced, including the specific snapshot date when it's revealed. Happy farming, and may your dedication be rewarded with a generous airdrop!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}