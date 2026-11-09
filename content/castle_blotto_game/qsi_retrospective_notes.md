# QSI Labs Technical Retrospective: Reverse-Engineering a Blotto Field (Document 1794189896498)

- **Source Document**: [`1794189896498.pdf`](file:///home/arika/D/gh/sequoiacap-pokebot/1794189896498.pdf) (symlinked to `/home/arika/D/media/blotto_game/1794189896498.pdf`)
- **Author**: QSI Labs (Technical Retrospective: Methods / Optimization)
- **Tournament**: Sequoia Capital "No Limit" Castle Challenge (Game 1: Head-to-Head Colonel Blotto)
- **Field Size**: 3,200 to 4,784 live entries (Oct 31 - Nov 3, 2026)
- **Observed Peak Rank**: Rank 3 / 4,153 entries (9.100 / 15.0 pts, re-test 9.094)
- **Last Saved Score**: 9.213 / 15.0 pts (Rank 7 / 4,784 on Nov 3, 11:21 PM PST board; leader was 9.220, a 0.007 pt gap)
- **Best Tested Allocation**: `[4, 6, 35, 48, 7]`

---

## 1. Core Mathematical Framework

### Leaderboard Scores as Linear Functionals
For any integer troop allocation $a = (a_1, a_2, a_3, a_4, a_5)$ with $\sum_{c=1}^5 a_c = 100$, against a random opponent allocation $X \sim P$, the expected score decomposes cleanly by linearity of expectation:

$$
S(a) = \sum_{c=1}^5 c \left[ F_c(a_c - 1) + \frac{1}{2} P_c(a_c) \right]
$$

where $F_c(k) = \Pr(X_c \le k)$ and $P_c(k) = \Pr(X_c = k)$. 

Critically, **no independence assumption across castles is required**. Every leaderboard score is an exact scalar projection (a known linear functional) of the 5 marginal CDFs.

### Inverse Linear Programming with Column Generation
Rather than assuming a single static field, QSI formulated an inverse LP over mixture weights $w_x$ on full legal allocations $x \in \mathcal{A}$ ($\binom{104}{4} = 4,598,126$ legal splits):

$$
\min_{w, s} \sum_j s_j \quad \text{subject to} \quad \left| \sum_{x \in \mathcal{A}} A_{jx} w_x - r_j \right| \le \epsilon_j + s_j, \quad w_x \ge 0, \quad \sum_{x \in \mathcal{A}} w_x = 1
$$

where $A_{jx}$ is the payoff kernel between probe $j$ and column $x$, $r_j$ is the observed score, $\epsilon_j$ is the rounding/slack tolerance, and $s_j$ are non-negative residuals.

To solve the 4.6M-column LP efficiently:
- Dual prices from the restricted master problem define the marginal values of troops on each castle.
- Pricing subproblem uses **exact dynamic programming** over the 100-soldier budget in $O(5 \times 100^2)$ time:
  $$
  D_c(b) = \max_{0 \le k \le b} \{ D_{c-1}(b - k) + v_c(k) \}
  $$
- Generates negative reduced-cost columns until convergence.

---

## 2. Active Experimentation & Minimax Regret Reduction (MMR)

Submissions were selected as system-identification probes rather than greedy hill-climbing:
- Candidate probes $q$ were evaluated by their ability to shrink feasible field uncertainty.
- Regret for allocation $a$ under field $p \in \mathcal{P}$:
  $$
  R(a, p) = \max_{b \in \mathcal{A}} S_p(b) - S_p(a)
  $$
- Probes were scored by expected reduction in Minimax Regret:
  $$
  \text{MMR}(\mathcal{P}) = \min_a \max_{p \in \mathcal{P}} R(a, p)
  $$
- Submission #71 (`[4, 6, 35, 48, 7]`) delivered an estimated regret reduction of 0.052 while offering top-decile downside protection, resulting in an immediate 9.100 score (Rank 3 / 3,585).

---

## 3. Dynamic Field Tracking & Population Drift

QSI documented severe non-stationarity in the Sequoia leaderboard:
- Large participant arrival waves: 3,479 to 3,585 in one refresh, later jumping from 3,745 to 4,127.
- A sudden purge of 500 bot/duplicate IDs (4,139 dropping to 3,643 entries).
- Solution: A 6-component non-stationary mixture model $p_t = \sum_h \alpha_{t,h} p_h$, where each measurement only constrains the mixture active at its timestamp.
- Anchor re-tests (`[6, 6, 35, 46, 7]`) were used to recalibrate drift (scoring 9.124 before the wave and 9.083 after).

---

## 4. Empirical Evaluation vs ClearSet Benchmarks

### Game 1 Head-to-Head Performance vs 25 Empirical LLM Field
- `QSI Best [4, 6, 35, 48, 7]`:
  - Mean Score: $8.800 / 15.0$ ($58.7\%$)
  - Record: 19W-1T-5L vs 25 LLMs
  - Head-to-Head vs `ClearSet Gamma [3, 17, 32, 2, 46]`: QSI wins 8.0 - 7.0 (QSI wins C1: 4>3, C3: 35>32, C4: 48>2; Gamma wins C2: 17>6, C5: 46>7).
- `QSI Retest [6, 6, 35, 46, 7]`:
  - Mean Score: $8.920 / 15.0$ ($59.5\%$)
  - Record: 21W-0T-4L vs 25 LLMs
  - Head-to-Head vs `ClearSet Gamma`: QSI wins 8.0 - 7.0.

### Game 2 Four-Way Pod Battle Performance
- In the 4-player pod game ($\binom{29}{3} = 3,654$ pods against 30 LLMs):
  - `QSI Best [4, 6, 35, 48, 7]`:
    - Mean Payout: $5.298 / 9.0$ ($58.9\%$)
    - Finishes: $36.9\%$ 1st, $43.8\%$ 2nd, $11.3\%$ 3rd, $8.0\%$ 4th
    - Analysis: Heavily penalized in Game 2 because $x_5 = 7$ completely concedes the 5-point castle, leaving it dependent on winning Castles 3 and 4 ($3 + 4 = 7$ pts), which fails against pods where opponents lock $3 + 5 = 8$ or $4 + 5 = 9$ pts.
