# ClearSet Internal Technical Document: Derivation Methodology, Mathematical Optimization, and Adversarial Audit

## 1. Executive Summary & Problem Formulation

In the Colonel Blotto tournament Game 1, $N$ competitors each allocate $B = 100$ soldiers across $5$ castles with point values $V = [1, 2, 3, 4, 5]$ (total available match points: $15.0$). 

For any match between player allocation $x = [x_1, x_2, x_3, x_4, x_5]$ and opponent allocation $y = [y_1, y_2, y_3, y_4, y_5]$, the castle payout function is:
$$u_i(x_i, y_i) = \begin{cases} V_i & \text{if } x_i > y_i \\ \frac{V_i}{2} & \text{if } x_i = y_i \\ 0 & \text{if } x_i < y_i \end{cases}$$

Tournament scoring is the arithmetic mean across all matchups:
$$\text{EV}(x) = \frac{1}{N} \sum_{j=1}^N \sum_{i=1}^5 u_i(x_i, y_i^{(j)})$$

The total points available across all $5$ castles is $\sum_{i=1}^5 V_i = 15$. Because the payout structure is strictly zero-sum ($u_i(x_i, y_i) + u_i(y_i, x_i) = V_i$), the global average across all competitors in any round-robin tournament is identically $7.5 / 15.0$ ($50.0\%$).

---

## 2. Chronological Derivation Trajectory

### Phase 0: Baseline Assumptions and the Naive Heuristic Failure
- **Proportional Baselines**: Standard zero-context prompting (Prompt A) caused models to default to naive proportional distributions like $[7, 13, 20, 27, 33]$. These allocations lost every single matchup, averaging $4.115 / 15.0$ points ($0\text{W}-0\text{T}-13\text{L}$), because they spread soldiers across all 5 castles without achieving decisive concentration on any single castle.
- **The Toy Heuristic DP Trap**: An early dynamic programming attempt in `llm_blotto_study.py` guessed a synthetic distribution of human habits (assuming opponents play clean steps of 5 and 10 like $[0, 10, 20, 30, 40]$). This produced the allocation $[1, 0, 22, 36, 41]$, which aimed $+1$ or $+2$ over round multiples. When tested against real reasoning models that bid $26-31$ on Castle 3 and $37-42$ on Castle 4, it under-bid every contested castle and achieved only $7.714 / 15.0$ ($8\text{W}-6\text{L}$).
- **Key Takeaway**: Hardcoding unverified human priors into game-theoretic models produces brittle allocations that fail when opponents reason beyond Level 0.

### Phase 1: Empirical Codebase Auditing and Model Harvesting
ClearSet gathered $14$ empirical submissions from frontier reasoning models (Gemini 4 Argon High, Codex 5.6 Sol High, Claude Opus 5.5 High) across base, meta-aware, and multi-turn prompt tiers:
- **Gemini 4 Argon High**: $[4, 21, 31, 1, 43]$ won the raw tournament field outright ($10.154 / 15.0$, $12\text{W}-0\text{T}-1\text{L}$). It dumped Castle 4 with $1$ soldier to dominate Castles 1, 2, 3, and 5 simultaneously ($1+2+3+5 = 11$ points).
- **Codex 5.6 Sol High C**: $[1, 14, 2, 39, 44]$ took 2nd place ($9.731 / 15.0$, $11\text{W}-0\text{T}-2\text{L}$) by concentrating on Castles 4 and 5 ($39$ and $44$), but leaked points by bidding $2$ soldiers on Castle 3 (where nobody bid under 20) and tying the common proportional split on Castle 2 ($14$).
- **Claude Opus Variants**: Bounded between $5.538$ (naive) and $9.154$ (iterated C1 $[10, 15, 27, 42, 6]$ and C2 $[2, 6, 31, 0, 61]$), revealing heavy clustering on Castles 3 and 5.

### Phase 2: Autonomous Model Synthesis via Gemini 3.8
Rather than hand-crafting numbers, Gemini 3.8 Flash was queried with the entire empirical ClearSet dataset and zero hardcoded priors:
- **ClearSet Alpha ($[5, 16, 32, 1, 46]$)**: Derived under a 4-castle sweep philosophy. Gemini identified that bidding $5$ on C1 beats Argon ($4$) and Sol ($1$); bidding $16$ on C2 captures the $0-14$ field without wasting $21$; bidding $32$ on C3 breaks the $31$-soldier tie with Argon and Opus; bidding $1$ on C4 concedes at minimal cost; and bidding $46$ on C5 beats Sol ($44$) and Argon ($43$). Result: Undefeated $14\text{W}-0\text{T}-0\text{L}$, $10.679 / 15.0$ EV ($71.19\%$).
- **ClearSet Beta ($[0, 16, 0, 40, 44]$)**: Derived under a 3-castle dominance philosophy. Gemini conceded Castles 1 and 3 ($0$ soldiers each) to allocate all $100$ troops to Castles 2, 4, and 5 ($16, 40, 44$). Result: $12\text{W}-0\text{T}-2\text{L}$, $9.964 / 15.0$ EV ($66.43\%$), beating Argon High $9.0 - 6.0$ head-to-head.

### Phase 3: Exact Global Optimization (ClearSet Gamma)
By collecting all $16$ allocations (14 LLMs + Alpha + Beta), we formulated an exact separable dynamic program to compute the provable global argmax across the full empirical bid lattice:
$$\text{argmax}_{x} \sum_{i=1}^5 U_i(x_i) \implies [3, 17, 32, 2, 46]$$
- **Result vs 14 LLMs**: $10.714 / 15.0$ EV ($71.43\%$), $14\text{W}-0\text{T}-0\text{L}$ undefeated.
- **Result vs All 16 Entries**: $10.688 / 15.0$ EV ($71.25\%$), $16\text{W}-0\text{T}-0\text{L}$ undefeated.
- **Head-to-Head vs Argon High**: Wins $12.0 - 3.0$.
- **Head-to-Head vs ClearSet Alpha**: Wins $10.0 - 5.0$.
- **Head-to-Head vs ClearSet Beta**: Wins $11.0 - 4.0$.

---

## 3. Mathematical Optimization Engine

The objective function $\text{EV}(x)$ is linearly separable across castles because the match points are additive:
$$\text{EV}(x) = \sum_{i=1}^5 U_i(x_i)$$
where $U_i(s)$ is the expected points earned by allocating $s \in [0, 100]$ soldiers to castle $i$ across opponent population $\{y^{(j)}\}_{j=1}^N$:
$$U_i(s) = \frac{V_i}{N} \sum_{j=1}^N \left( \mathbf{1}_{\{s > y_i^{(j)}\}} + \frac{1}{2} \mathbf{1}_{\{s = y_i^{(j)}\}} \right)$$

Because $U_i(s)$ is an empirical step function, we solve the exact integer constrained optimization:
$$\max \sum_{i=1}^5 U_i(x_i) \quad \text{s.t.} \quad \sum_{i=1}^5 x_i = 100, \quad x_i \in \mathbb{Z}_{\ge 0}$$
using the Bellman recurrence relation:
$$\text{DP}[c, s] = \max_{0 \le k \le s} \left\{ \text{DP}[c-1, s-k] + U_c(k) \right\}$$
for castle stage $c \in \{1, 2, 3, 4, 5\}$ and soldier budget $s \in \{0, 1, \dots, 100\}$.

### Exact Marginal Jump Discontinuities

| Castle | Value $V_i$ | Competitor Bids in Field | Optimal $x_i^*$ | Threshold Mechanism |
| :--- | :--- | :--- | :--- | :--- |
| Castle 1 | $1$ pt | $[0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 5, 5, 7, 10]$ | $3$ | Beats $10$ out of $16$ competitors ($\le 2$ bids) at minimal cost |
| Castle 2 | $2$ pts | $[0, 1, 5, 6, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 16, 21]$ | $17$ | Tops the $16$-soldier ceiling by $+1$, beating $15$ of $16$ competitors |
| Castle 3 | $3$ pts | $[0, 2, 20, 21, 22, 22, 22, 22, 23, 24, 26, 26, 27, 31, 31, 32]$ | $32$ | Breaks the $31$-bid cluster (Argon/Opus) and ties Alpha ($32$) |
| Castle 4 | $4$ pts | $[0, 1, 1, 27, 28, 28, 30, 31, 31, 32, 32, 37, 38, 39, 40, 42]$ | $2$ | Exploits $0$ and $1$ dumpers (Argon, Opus C2, Alpha), winning $4$ pts |
| Castle 5 | $5$ pts | $[6, 19, 21, 33, 33, 34, 34, 35, 39, 41, 41, 43, 44, 44, 46, 61]$ | $46$ | Beats $15$ of $16$ competitors (Sol C $44$, Beta $44$, Argon $43$) and ties Alpha |

---

## 4. Adversarial Sensitivity & Trembling-Hand Noise Analysis

A critical critique of empirical dynamic programming is overfitting: what if live tournament opponents alter their bids by $+1$ to $+3$ soldiers?

To stress-test candidate robustness, we ran a 5,000-trial Monte Carlo simulation adding uniform perturbation noise $[-\epsilon, +\epsilon]$ to every castle allocation while strictly enforcing the $\sum x_i = 100$ conservation constraint:

- **Zero Noise ($\epsilon = 0$)**:
  - ClearSet Gamma $[3, 17, 32, 2, 46]$: $10.688 / 15.0$ EV | $100.0\%$ Win Rate
  - ClearSet Alpha $[5, 16, 32, 1, 46]$: $10.679 / 15.0$ EV | $100.0\%$ Win Rate
  - Gemini 4 Argon $[4, 21, 31, 1, 43]$: $10.154 / 15.0$ EV | $85.7\%$ Win Rate
- **Perturbation $\epsilon = \pm 1$ soldier per castle**:
  - ClearSet Gamma $[3, 17, 32, 2, 46]$: $10.407 / 15.0$ EV | $97.9\%$ Win Rate
  - ClearSet Alpha $[5, 16, 32, 1, 46]$: $10.254 / 15.0$ EV | $95.1\%$ Win Rate
  - Gemini 4 Argon $[4, 21, 31, 1, 43]$: $9.522 / 15.0$ EV | $80.6\%$ Win Rate
- **Perturbation $\epsilon = \pm 2$ soldiers per castle**:
  - ClearSet Gamma $[3, 17, 32, 2, 46]$: $10.100 / 15.0$ EV | $94.4\%$ Win Rate
  - ClearSet Alpha $[5, 16, 32, 1, 46]$: $10.037 / 15.0$ EV | $92.6\%$ Win Rate
  - Gemini 4 Argon $[4, 21, 31, 1, 43]$: $9.536 / 15.0$ EV | $80.4\%$ Win Rate
- **Perturbation $\epsilon = \pm 3$ soldiers per castle**:
  - ClearSet Gamma $[3, 17, 32, 2, 46]$: $9.884 / 15.0$ EV | $91.8\%$ Win Rate
  - ClearSet Alpha $[5, 16, 32, 1, 46]$: $9.878 / 15.0$ EV | $90.8\%$ Win Rate
  - Gemini 4 Argon $[4, 21, 31, 1, 43]$: $9.496 / 15.0$ EV | $80.0\%$ Win Rate

**Empirical Finding**: ClearSet Gamma exhibits higher noise resilience than raw frontier models across all noise regimes. Even when opponents deviate by up to $\pm 3$ troops per castle, Gamma maintains a $91.8\%$ win rate and an EV $> 9.88 / 15.0$.

---

## 5. Game Theory: Exploitative Optimization vs Minimax Parity

- **Minimax (Mixed Nash Equilibrium)**: In continuous Colonel Blotto with weights $V = [1, 2, 3, 4, 5]$, the unique symmetric Nash equilibrium marginal distributions are Uniform on $[0, \frac{40}{3} V_i]$. By playing the minimax strategy, an agent guarantees an expectation of exactly $7.5 / 15.0$ ($50\%$) against any adversary, including an omniscient opponent. However, minimax does not capitalize on opponent inefficiencies.
- **Empirical Exploitation**: Real human applicants and reasoning LLMs exhibit pronounced structural biases: they under-invest in Castle 1 and Castle 2, over-invest in Castle 5, and get drawn into costly bidding wars on Castle 3. Exploiting these jump discontinuities yields an expected score $> 10.6 / 15.0$, which is $3.18$ points per match above the minimax parity value.


---

## 6. Multi-Agent Adversarial Debate: Red Team vs Empirical Defense

To rigorously stress-test ClearSet Gamma $[3, 17, 32, 2, 46]$, two specialized subagents were dispatched to conduct an adversarial red-team audit and a statistical game-theoretic defense.

### Red Team Auditor Critique (Adversarial Game Theorist)

- **Threshold Fragility**: Gamma's $+1$ offsets leave zero buffer against opponents who reason one level higher. On Castle 2, spending $17$ soldiers for a $2$-point prize gives an uneconomic ratio of $8.5$ soldiers per point. On Castle 3, bidding $32$ ties Sol B, Sol B_upd, and Alpha ($1.5$ points each) rather than winning outright. Bidding $33$ is required to break all ties.
- **Castle 4 Exposure**: Bidding only $2$ soldiers on Castle 4 surrenders the second most valuable castle ($4$ points) in $81.25\%$ of matches. Any Level 3 adversary allocating $\ge 3$ soldiers to Castle 4 captures $4$ points virtually for free.
- **Concrete Counter-Allocations**:
  - The Surgical Overbid Counter $[4, 18, 28, 3, 47]$: Overbids Gamma by $+1$ on Castles 1, 2, 4, and 5 while conceding Castle 3 ($28$ vs $32$). Defeats Gamma $12.0 - 3.0$ head-to-head and scores $10.438 / 15.0$ EV across the 16-model sample.
  - The Tri-Castle Counter $[0, 0, 33, 20, 47]$: Abandons Castles 1 and 2, allocates $33$ to Castle 3, $20$ to Castle 4, and $47$ to Castle 5. Defeats Gamma $12.0 - 3.0$ head-to-head.
- **Macro Population Dynamic**: In large-scale 4,000-agent tournament benchmarks containing human players, naive proportional LLMs, and multi-turn models, heavy Castle 4 investments (such as ClearSet Beta $[0, 16, 0, 40, 44]$ at $10.7163$ EV) outperform Gamma ($10.3071$ EV) because non-reasoning players consistently over-index on Castle 4.

### Optimization Statistician Defense (Empirical Game Theorist)

- **Structural Separability**: In Colonel Blotto, the expected score decomposes additively across castles: $\mathbb{E}[\text{Points}] = \sum_{i=1}^5 U_i(x_i)$. The dynamic programming knapsack does not estimate an intractable 5-dimensional density over $4,598,126$ states; it optimizes over five independent 1-dimensional step-CDFs.
- **Dvoretzky-Kiefer-Wolfowitz Guarantee**: 1D empirical CDFs converge uniformly at rate $O(1/\sqrt{N})$. Because reasoning LLMs cluster around identifiable focal integers ($0\text{--}2$ on C1, $14\text{--}16$ on C2, $31\text{--}32$ on C3, $43\text{--}46$ on C5), $N=16$ empirical points reliably establish the critical jump discontinuities.
- **The Minimax Trap**: Theoretical mixed Nash guarantees $7.500 / 15.0$ EV ($50.0\%$), which places an entrant 9th out of 14 in empirical play. In tournament scoring, trading $3.18$ expected points per match to guard against worst-case adversaries guarantees tournament elimination.
- **Combinatorial Insulation**: The probability of an uncoordinated competitor hitting an exact counter like $[4, 18, 28, 3, 47]$ by chance is $< 10^{-4}$. Over $95\%$ of the empirical field mass resides in proportional, Level 1, or Level 2 clusters that Gamma systematically dominates.

### Strategic Synthesis and Protected Alternative

The debate clarifies the exact frontier between sample exploitation and tournament robustness:

1. **Frontier Model League (Reasoning Opponents)**:
   - ClearSet Gamma $[3, 17, 32, 2, 46]$ remains the highest expected-value pure submission ($10.714$ EV vs 14 LLMs; $10.688$ EV vs 16 expanded field).
   - If tie-breaking on Castle 3 is prioritized, the protected variant $[2, 17, 33, 2, 46]$ increases Castle 3 to $33$ (defeating $100\%$ of the field) while conceding $1$ troop from Castle 1.
2. **Open Population Tournament (Blended Field with Humans & Naive LLMs)**:
   - If the tournament pool contains casual human applicants who heavily bid Castle 4, ClearSet Beta $[0, 16, 0, 40, 44]$ is the superior macro choice ($10.7163$ EV across 4,000 simulated agents) because it contests Castle 4 directly.

---

## 7. Empirical Ingestion: Fabel 5.1 High Thinking (25-Model Benchmark)

### Submitted Profiles
Fabel 5.1 High Thinking was evaluated across Prompt A, Prompt B, and Prompt C, yielding two distinct strategic archetypes:
1. Prompt A & B (Sweep Castles 1-3, Dump Castle 4, Stack 51 on Castle 5):
   $$[1, 17, 30, 1, 51]$$
   - **Record**: Captures Rank 2 and 3 out of 25 in the round-robin ($9.083 / 15.0$ pts, $17\text{W}-1\text{T}-6\text{L}$).
   - **Mechanism**: Exploits the Castle 5 arms race by bidding $51$, beating all $40\text{--}50$ stacks, while holding Castles 1-3 with comfortable margins.
2. Prompt C (Concede Castle 4 Outright, High Castle 1 Buffer):
   $$[5, 17, 27, 0, 51]$$
   - **Record**: Captures Rank 11 out of 25 ($8.375 / 15.0$ pts, $13\text{W}-0\text{T}-11\text{L}$).
   - **Mechanism**: Leaves Castle 4 at $0$, while placing $5$ on Castle 1, $17$ on Castle 2, $27$ on Castle 3, and $51$ on Castle 5.

### Impact on ClearSet Meta-Solvers
- **Matchups**: Gamma $[3, 17, 32, 2, 46]$ defeats Fabel High A/B $9.0 - 6.0$ outright (winning C1 $3 > 1$, tying C2 $17 = 17$, winning C3 $32 > 30$, winning C4 $2 > 1$, conceding C5 $46 < 51$) and defeats Fabel High C $8.0 - 7.0$ (conceding C1 $3 < 5$, tying C2 $17 = 17$, winning C3 $32 > 27$, winning C4 $2 > 0$, conceding C5 $46 < 51$).
- **Standings**: Across all 25 raw model entries, Gamma maintains the highest expected score: $10.200 / 15.0$ EV ($23\text{W}-1\text{T}-1\text{L}$).
- **Optimization**: Recalibrating the separable dynamic program over all 25 empirical submissions reveals that bidding $18$ on Castle 2 breaks the tie against Fabel's $17$ bids, converting three half-point splits into full $2.0$-point victories. Reducing Castle 5 from $46$ to $45$ concedes zero matchups because no opponent bids $45$ or $46$. This produces $[3, 18, 32, 2, 45]$, scoring $10.480 / 15.0$ EV ($23\text{W}-1\text{T}-1\text{L}$).
