# Final Tournament Submissions & Decision Guide

- **Game 1**: For the full 25-model empirical benchmark and dynamic programming solver, see [[blotto]].
- **Game 2**: For the full 30-model 4-player pod combinatorial benchmark and cross-validation, see [[blotto2]].
- **PDF**: For the QSI Labs leaderboard reverse-engineering study, see [`1794189896498.pdf`](file:///home/arika/D/media/blotto_game/1794189896498.pdf).

This executive document summarizes the final submission recommendations for Game 1 and Game 2, analyzing how applicant pool composition alters the optimal troop allocation.

---

# 1. Recommended Submissions at a Glance

### Game 1 (Two-Player Head-to-Head, 15 Castle Points Max)
- **Primary**: ClearSet Gamma `[3, 17, 32, 2, 46]` ($10.200 / 15.0$ EV, $23\text{W}-1\text{T}-1\text{L}$ against 25 frontier LLMs; $10.409 / 15.0$ EV against balanced applicant pools).
- **Macro**: ClearSet Beta `[0, 16, 0, 40, 44]` ($10.777 / 15.0$ EV against balanced applicant pools; $10.716 / 15.0$ EV in 4,000-agent tournaments).
- **Raw**: Gemini 4 Argon High A3 `[3, 21, 31, 2, 43]` ($9.396 / 15.0$ EV, $21\text{W}-0\text{T}-3\text{L}$).

### Game 2 (Four-Player Random Pods, 9.0 Payout Points Max)
- **Primary**: ClearSet Gamma `[3, 28, 0, 0, 69]` ($7.849 / 9.0$ EV, $77.0\%$ 1st, $23.0\%$ 2nd, $0.0\%$ 3rd, $0.0\%$ 4th across all 4,060 pods).
- **Fortress**: ClearSet Beta `[0, 30, 0, 0, 70]` ($7.704 / 9.0$ EV, $74.1\%$ 1st, $25.9\%$ 2nd, $0.0\%$ 3rd, $0.0\%$ 4th; immune to 69 counters).
- **Raw**: Gemini 4 Argon High B1 `[0, 32, 0, 0, 68]` ($7.894 / 9.0$ EV in the 30-model pool, $77.9\%$ 1st, $22.1\%$ 2nd, $0.0\%$ 3rd/4th).

---

# 2. Field Analysis: Mathematically Smart Humans Using a Little AI

When considering an opponent pool with a high percentage of mathematically smart applicants (such as STEM students, competitive programmers, or quantitative applicants) who may consult an LLM for initial ideas, two behavioral dynamics emerge:

### What Smart Humans with Lightweight AI Do
- **Rejection**: Smart humans immediately reject naive round spreads (`[0, 10, 20, 30, 40]`) and proportional divisions (`[7, 13, 20, 27, 33]`).
- **Asymmetry**: They recognize that Castle 1 (1 pt) and Castle 2 (2 pts) have low points-per-soldier payoffs compared to Castles 3, 4, and 5.
- **Consultation**: When they prompt ChatGPT or Claude with the basic rules, the model typically suggests abandoning Castle 1 or 2 and splitting troops across Castles 3, 4, and 5 (e.g. Prompt A or B outputs like `[1, 11, 21, 31, 36]` or `[0, 21, 31, 42, 6]`).
- **Tweaking**: The human applicant does not submit the raw AI output verbatim. Instead, they add small integer buffers to beat expected round numbers, typically bidding $24-32$ on Castle 3, $32-45$ on Castle 4, and $38-48$ on Castle 5.
- **Evidence**: On Sequoia's live leaderboard of 4,784 applicants documented by QSI Labs in [[blotto]], the crowd intensely contested Castle 4 with bids between 40 and 48 troops, leading to QSI's optimal probe allocation of `[4, 6, 35, 48, 7]`.

---

# 3. Game 1 Decision: Gamma vs Beta under Human Mixtures

In Game 1, tournament scoring is linearly additive across all 5 castles ($S(a) = \sum_{c=1}^5 c [F_c(a_c - 1) + 0.5 P_c(a_c)]$).

- **Gamma**: `[3, 17, 32, 2, 46]` is designed for a field dominated by frontier reasoning models. Because frontier LLMs frequently dump Castle 4 to stack Castle 5 ($43-61$ troops), Gamma steals Castle 4 with just 2 soldiers while locking Castles 2, 3, and 5.
- **Beta**: `[0, 16, 0, 40, 44]` is mathematically superior if the field has more mathematically smart humans. Smart humans rarely dump Castle 4; they bid between $30$ and $36$ soldiers on Castle 4. Beta completely surrenders Castles 1 and 3 ($x_1 = 0, x_3 = 0$) to allocate $40$ soldiers to Castle 4 (clearing the human $30-36$ cluster) and $44$ soldiers to Castle 5 (clearing the human $35-41$ cluster), while putting $16$ on Castle 2 to sweep low bids. This guarantees winning Castles 2, 4, and 5 ($2 + 4 + 5 = 11$ points).
- **Simulation**: In our empirical simulations across 4,000 synthetic applicants:
  - In Regime B (Balanced Applicant Pool with 25% level-1 threshold beaters and 20% strategic zeros), ClearSet Beta scores $10.777 / 15.0$ EV, outperforming Gamma `[3, 17, 32, 2, 46]` ($10.409 / 15.0$ EV).
  - In Regime C (50% level-1 threshold beaters), ClearSet Beta scores $10.771 / 15.0$ EV, again outperforming Gamma ($10.679 / 15.0$ EV).

---

# 4. Game 2 Decision: Why Gamma and Beta Hold in 4-Player Pods

Game 2 eliminates linearity of expectation. Your payoff depends strictly on your finish within a 4-player pod ($9.0, 4.0, 2.0, 0.0$ pts).

- **Threshold**: Mathematically smart humans realize that $p \ge 8$ castle points guarantees sole 1st place ($9.0$ payout points). They gravitate toward the only two 2-castle bundles that reach 8 points: $[3, 5] = 8$ pts or $[4, 5] = 9$ pts.
- **Clustering**: In our 30-model empirical benchmark, smart models cluster around $[0, 0, 37, 0, 63]$ (`Sol High B1`), $[0, 0, 41, 0, 59]$ (`Flash 3.8 High C3`), or $[0, 0, 0, 50, 50]$. Humans using AI will land in this exact range ($50-65$ soldiers on Castle 5).
- **Counter**: ClearSet Gamma `[3, 28, 0, 0, 69]` and ClearSet Beta `[0, 30, 0, 0, 70]` both exploit this clustering:
  - Committing $69$ or $70$ soldiers to Castle 5 overpowers virtually every smart human split (humans rarely commit $\ge 69$ troops to one castle unless going all-in).
  - Winning Castle 5 secures a 5-point floor in every pod.
  - Committing $28$ or $30$ soldiers to Castle 2 captures Castle 2 in over $72\%$ of pods because smart opponents abandon Castles 1 and 2 to fight over Castles 3, 4, and 5.
  - Together, winning Castles 2 and 5 gives 7 castle points, ensuring you never finish 3rd or 4th. In Gamma, the 3 soldiers on Castle 1 capture Castle 1 against zero-dumpers ($28.1\%$ of pods), pushing total points to $1 + 2 + 5 = 8$ for an outright 1st-place finish.

---

# 5. Final Decision Matrix

| Opponent Pool Expectation | Game 1 Recommended Submission | Game 2 Recommended Submission | Strategic Rationale |
| :--- | :--- | :--- | :--- |
| Heavy Frontier AI (Argon, Opus, Sol, Fabel) | `[3, 17, 32, 2, 46]` (ClearSet Gamma) | `[3, 28, 0, 0, 69]` (ClearSet Gamma) | Exploits AI tendency to dump Castle 4 in Game 1; clears the 68 Castle 5 ceiling in Game 2. |
| Mathematically Smart Humans + Lightweight AI | `[0, 16, 0, 40, 44]` (ClearSet Beta) | `[3, 28, 0, 0, 69]` (ClearSet Gamma) | Beats human $30-36$ cluster on Castle 4 in Game 1; maintains Castle 5 dominance in Game 2. |
| Maximum Conservative Immunity to 69 Counters | `[3, 17, 32, 2, 46]` (ClearSet Gamma) | `[0, 30, 0, 0, 70]` (ClearSet Beta) | Gamma preserves 5-pt buffer on C5 in Game 1; Beta immunizes against anyone else bidding 69 in Game 2. |
| Unassisted Raw Frontier Model Winner | `[3, 21, 31, 2, 43]` (Argon High A3) | `[0, 32, 0, 0, 68]` (Argon High B1) | Pure unassisted model baseline winners across the empirical benchmark. |
