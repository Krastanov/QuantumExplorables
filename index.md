---
title: Off-resonant Drive of an Optical Cavity for Coupling with a Mechanical Resonator
keywords: acoustomechanis
---

<script src="./rough/rough.js"></script>
<script src="./rough/rough-viz.js"></script>
<script src="./rough/rough-notation.js"></script>
<script src="./rough/roughhelpers.js"></script>
<style>
@font-face {
  font-family: 'Indie Flower';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/indieflower/v12/m8JVjfNVeKWVnh3QMuKkFcZVaUuH.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>


::: intro-box
A common "linearization" trick is used to turn the $\hat{a}^\dagger\hat{a}(\hat{b}^\dagger+\hat{b})$ optomechanical interaction into a $\hat{a}^\dagger\hat{b}$ beamsplitter. Great many works[@aspelmeyer2014cavity;@kippenberg2018tut] cover this approach.

The universe is governed by Schrödinger's equation and Stefan should not be trusted to competently do a Markov approximation in order to convert it to Liouville's, so let us try the most obtuse way to do this linearization, sticking only to Schrödinger's equation.

A more practical excuse for this exercise is that some fun optimal control tricks might be possible when one uses shaped pulses for the laser drive (to be discussed below), which would benefit from obtusely barebones treatment, but frankly, it is just fun to see how far we can push this problem while using only undergrad-level quantum mechanics.
:::

$$
\definecolor{B}{RGB}{79,120,166}
\definecolor{A}{RGB}{224,87,89}
\definecolor{E}{RGB}{241,141,47}
\definecolor{G}{RGB}{89,160,80}
$$

<style>
.B {color: rgb(79,120,166)}
.A {color: rgb(224,87,89)}
.E {color: rgb(241,141,47)}
.G {color: rgb(89,160,80)}
</style>

The system of interest is governed by the Hamiltonian
$$
\hat{H}\frac{1}{\hbar}
=
{\color{A} \omega_a \hat{a}^\dagger \hat{a}}
+ \left( {\color{E} \varepsilon^*e^{-i\omega_lt}\hat{a} + \mathrm{H.c.}} \right)
+ {\color{B} \omega_b \hat{b}^\dagger \hat{b}}
+ {\color{G} Gx_\textrm{zpm}\hat{a}^\dagger\hat{a}\left(\hat{b}^\dagger+\hat{b}\right)},
$$
which is made of:

- <span class="A">the Hilbert space of an optical resonator $\hat{a}$ at frequency $\omega_a$;</span>
- <span class="E">a classical external drive on the optical cavity at frequency $\omega_l$ and amplitude $\varepsilon$;</span>
- note: <span class="E">$\omega_l$</span> and <span class="A">$\omega_a$</span> are many linewidths apart and we will write $\Delta = \omega_a - \omega_l$;
- <span class="B">the Hilbert space of a mechanical resonator $\hat{b}$ at frequency $\omega_b$;</span>
- <span class="G">a parametric coupling between the optical cavity and the mechanical resonator, due to the $Gx$ frequency shift caused by a mirror displacement of $x=x_\mathrm{zpm}\left\langle\hat{b}^\dagger+\hat{b}\right\rangle$.</span> ZPM stands for "zero point motion" and typically $x_\mathrm{zpm}=\sqrt{\frac{\hbar}{2m\omega_b}}$.

_TODO: canvas figure of spectrum_

The Hamiltonian as seen above is in the "Lab" frame of reference, or in the language of perturbation theory, it is in the Schrödinger pricture.

## Laser frame (first change of frame)

We will go in the reference frame of $\hat{H}' = \omega_l \hat{a}^\dagger\hat{a}$, i.e., we will be rotating at the laser frequency (**not** the cavity frequency). In other words, we will **not** be writing a dynamical equation for the ket $\mid\psi\rangle$ described in the lab frame, rather it will be for $$\mid \psi_1\rangle = e^{i\frac{\hat{H}'t}{\hbar}}\mid\psi\rangle.$$ This is frequently refered to "using the interaction (or Dirac) picture" in perturbation theory, but we are not doing it for the sake of performing perturbations, rather because the dynamics are simpler in this reference frame.

::: further-reading :
**[Interaction picture](https://en.wikipedia.org/wiki/Interaction_picture):** If a ket $\mid\psi\rangle$ is governed by Schrödinger's equation under a Hamiltonian $\hat{H}$, then the time-evolved ket $\mid\psi_1\rangle=e^{i\frac{\hat{H}'t}{\hbar}}\mid\psi\rangle$, will be governed by $\hat{H}_1=e^{i\frac{\hat{H}'t}{\hbar}}\hat{H}e^{-i\frac{\hat{H}'t}{\hbar}} - \hat{H}'$. Obervables also need to be rewriten as $\langle\hat{O}\rangle=\langle\psi\mid\hat{O}\mid\psi\rangle=\langle\psi_1\mid\hat{O}_1\mid\psi_1\rangle$ implies $\hat{O}_1=e^{i\frac{\hat{H}'t}{\hbar}}\hat{O}e^{-i\frac{\hat{H}'t}{\hbar}}$
:::

::: warning :
When performing "change of reference frame" (a.k.a. "Dirac picture" or "interaction picture") calculations some people prefer ["active" transformations](https://en.m.wikipedia.org/wiki/Active_and_passive_transformation) (i.e., renaming the the operators and keeping explicit track of the lab frame), while others prefer the ["passive" transformations](https://en.m.wikipedia.org/wiki/Active_and_passive_transformation) (i.e., using the same letters to describe the newly transformed operator, but denoting clearly the new reference frame). This can cause confusion when different expectations are put on the notation. Here, each time a new ket "basis" is being used, we will denote that explicitly, but we are not changing the operators we are using, we are changing the frame in which these operators are applied.
:::

::: further-reading :
**[BCH formula and the adjoint endomorphism lemma](https://en.wikipedia.org/wiki/Baker%E2%80%93Campbell%E2%80%93Hausdorff_formula#An_important_lemma_and_its_application_to_a_special_case_of_the_Baker%E2%80%93Campbell%E2%80%93Hausdorff_formula):** Using the interaction picture rarely leads to anything pleasant unless you also use $e^\hat{X}\hat{Y}e^{-\hat{X}} = \hat{Y} + \left[\hat{X},\hat{Y}\right] + \frac{1}{2!}\left[\hat{X},\left[\hat{X},\hat{Y}\right]\right] + \dots$. The higher-order terms usually die-off thanks to commutation.
:::

The transformation to the reference frame of $\hat{H}'$ leads to the new Hamiltonian:
$$
\hat{H}_1\frac{1}{\hbar}
=
{\color{A} \Delta \hat{a}^\dagger \hat{a}}
+ \left( {\color{E} \varepsilon^*\hat{a} + \mathrm{H.c.}} \right)
+ {\color{B} \omega_b \hat{b}^\dagger \hat{b}}
+ {\color{G} Gx_\textrm{zpm}\hat{a}^\dagger\hat{a}\left(\hat{b}^\dagger+\hat{b}\right)},
$$
in which we do not have any time-depenent terms and the "frequency" of the "cavity" is much lower.

We can toy a bit with the optical part of this Hamiltonian and see that the ground state (one of the steady states) is relatively easy to depict in this frame. It is simply the coherent state $\mid\alpha\rangle$, where $$\alpha=-\frac{\varepsilon}{\Delta}.$$

There are a couple of ways to see this, e.g.

- Solve $0=\left[\hat{H}_1,\mid\alpha\rangle\langle\alpha\mid\right]$.
- Draw a Wigner diagram with the flow lines of a coherent state experiencing translation due to ${\color{B} \omega_b \hat{b}^\dagger \hat{b}}$ and rotation due to ${\color{A} \Delta \hat{a}^\dagger \hat{a}}$, and find where they cancel each other.
- Go to the Displaced frame in which it is easy to set up ladder operators after canceling out the displacement. This is the "correct" way to do it. As a bonus, this is also what you need to do in order to get the linearized-optomechanical coupling.

## Displaced frame (second change of frame)

This is a simpler transformation than the one we previously employed (it does not raise to the level of sophistication of the interaction picture method). We perform this constant (time independent) transformation:
$$\mid \psi_2\rangle = \hat{D}(-\alpha) \mid\psi_1\rangle = e^{-\alpha\hat{a}^\dagger+\alpha^*\hat{a}}\mid\psi_1\rangle.$$
This state obeys Schrodinger's equation with the Hamiltonian
$$
\hat{H}_2\frac{1}{\hbar}
=
{\color{A} \Delta \hat{a}^\dagger \hat{a}}
+ {\color{E} 0 }
+ {\color{B} \omega_b \hat{b}^\dagger \hat{b}}
+ {\color{G} Gx_\textrm{zpm}\left(\alpha\hat{a}^\dagger\hat{b} + \mathrm{H.c.}\right)}
+ {\color{G} Gx_\textrm{zpm}|\alpha|^2\left(\hat{b}^\dagger + \hat{b}\right)}
+ \mathrm{const.},
$$

Note that:

- As far as the optical cavity is concerned, this is exact;
- However, in the interaction term with the mechanical resonator, we have now neglected terms weaker than linear in $\alpha$;
- There is now a persistent constant drive on the mechanical oscillator.

We will not concern ourselves with the mechanical osciallator for a while, rather we will focus only on the eigenstates of the optical cavity, look at them in the three frames we have considered up to now, and study their interaction with (and decay into) the environment.

## Steady state solutions

$\hat{H}_2$ has the following eigenstates:

+----------------------------+
|   Displaced Frame          |
+:==========================:+
| $\mid 0 \rangle$           |
+----------------------------+
| $\mid 1 \rangle$           |
+----------------------------+
| $\mid 2 \rangle$           |
+----------------------------+
| $\dots$                    |
+----------------------------+

From this we can find the steady states in the Laser frame ($\mid \psi_2\rangle = \hat{D}(-\alpha) \mid\psi_1\rangle$) and in the Lab frame ($\mid \psi_1\rangle = e^{i\omega_l \hat{a}^\dagger\hat{a}t}\mid\psi\rangle$). In general


+--------------------------------+-----------------------------------------------+-----------------------------------------------------------------+
|   Displaced Frame              |   Laser Frame                                 |   Lab Frame                                                     |
+:==============================:+:=============================================:+:===============================================================:+
| $\mid  0 \rangle$              | $\mid \alpha \rangle$                         | $\mid e^{-i\omega_l t}\alpha \rangle$                           |
+--------------------------------+-----------------------------------------------+-----------------------------------------------------------------+
| $e^{-i\Delta t}\mid 1 \rangle$ | $e^{-i\Delta t}\hat{D}(\alpha)\mid 1 \rangle$ | $e^{-i\omega_a t}\hat{D}(e^{-i\omega_l t}\alpha)\mid 1 \rangle$ |
+--------------------------------+-----------------------------------------------+-----------------------------------------------------------------+
| $e^{-i2\Delta t}\mid 2\rangle$ | $e^{-i2\Delta t}\hat{D}(\alpha)\mid 2\rangle$ | $e^{-i2\omega_a t}\hat{D}(e^{-i\omega_l t}\alpha)\mid 2\rangle$ |
+--------------------------------+-----------------------------------------------+-----------------------------------------------------------------+
| $\dots$                        | $\dots$                                       | $\dots$                                                         |
+--------------------------------+-----------------------------------------------+-----------------------------------------------------------------+

The states in the Lab frame are "simply" rapidly rotating displaced number states. They do have many of the same properties as ordinary number states (_TODO reference_). Of particular interest is that they couple to the environment in the same way that ordinary number states do.

It is instructive to also see what an arbitrary initial coherent state $\mid\beta\rangle$ would look like:

+------------------------------------+-----------------------------------------------+-----------------------------------------------------------------+
|   Displaced Frame                  |   Laser Frame                                 |   Lab Frame                                                     |
+:==================================:+:=============================================:+:===============================================================:+
| $\mid e^{-i\Delta t}\beta \rangle$ | $\mid \alpha + e^{-i\Delta t}\beta \rangle$   | $\mid e^{-i\omega_l t}\alpha + e^{-i\omega_a t}\beta \rangle$   |
+------------------------------------+-----------------------------------------------+-----------------------------------------------------------------+

Below you can see an interactive visualization of this state in each frame.

<figure>
<canvas id="disframecoh" width=200 height=200></canvas> <!--TODO Hardcoded assumption-->
<canvas id="lasframecoh" width=200 height=200></canvas>
<canvas id="labframecoh" width=200 height=200></canvas>
<label><h4>The Detuning $\Delta$</h4><span>zero</span><input type="range" min=0 max=1 step=0.02 value=0.5 id="framecohdelta"><span>large</span></label>
<label><h4>The Drive $\varepsilon$</h4><span>zero</span><input type="range" min=0 max=1 step=0.02 value=1 id="framecoheps"><span>large</span></label>
<label><h4>The Resonant Amplitude $\beta$</h4><span>zero</span><input type="range" min=0 max=1 step=0.02 value=0.5 id="framecohbeta"><span>large</span></label>
<figcaption>The evolution in phase space of a coherent state of amplitude $\beta$ injected into the cavity (e.g., by transduction from the mechanical resonator).</figcaption>
</figure>
<script>
const fullcircle = Math.PI * 2;
const labframecoh = prepcanvas('labframecoh');
const lasframecoh = prepcanvas('lasframecoh');
const disframecoh = prepcanvas('disframecoh');
const t0 = (new Date())/1000;
const framecohstate = {delta: 1, epsilon: 1, phi1: 0, phi2: 0, lastt: t0, beta: 1};
const framecohdelta = document.getElementById('framecohdelta');
const framecoheps = document.getElementById('framecoheps');
const framecohbeta = document.getElementById('framecohbeta');
framecohdelta.addEventListener('input', function (e){framecohstate.delta=parseFloat(e.target.value);});
framecoheps.addEventListener('input', function (e){framecohstate.epsilon=parseFloat(e.target.value);});
framecohbeta.addEventListener('input', function (e){framecohstate.beta=parseFloat(e.target.value);});
framecohstate.delta=parseFloat(framecohdelta.value);
framecohstate.epsilon=parseFloat(framecoheps.value);
framecohstate.beta=parseFloat(framecohbeta.value);

function draw_labframecoh() {
  const c = labframecoh.c;
  const rc = labframecoh.r;
  const c1 = lasframecoh.c;
  const rc1 = lasframecoh.r;
  const c2 = disframecoh.c;
  const rc2 = disframecoh.r;
  const r = 10;
  const x0 = 100;
  const y0 = 100; // TODO hardcoded assumption
  const alpha = (0.01+framecohstate.epsilon)/(0.001+framecohstate.delta)*20;
  const beta = framecohstate.beta*40;
  const d = framecohstate.delta;
  const w_a = 3;
  var t = (new Date())/1000; // TODO better way necessary
  framecohstate.phi1 += (w_a-d)*(t-framecohstate.lastt);
  framecohstate.phi2 += d*(t-framecohstate.lastt);
  framecohstate.lastt = t;
  c.clearRect(0,0,200,200); // TODO hardcoded assumption
  c.fillText('Lab Frame', 100, 15); // TODO better way necessary
  c.save();
  c.translate(x0,y0); // TODO hardcoded assumption
  c.rotate(framecohstate.phi1);
  rc.line(0,0,alpha,0,{stroke:'#999999', roughness:0});
  c.font = '10px';
  if (alpha>30) { c.fillText('α',alpha/2,-4); }
  c.translate(alpha,0);
  c.rotate(framecohstate.phi2);
  if (beta>30) { c.fillText('β',beta/2,-4); }
  rc.line(0,0,beta,0,{stroke:'#999999', roughness:0});
  rc.circle(beta,0,r,{roughness:3});
  c.restore();
  
  c1.clearRect(0,0,200,200);
  c1.fillText('Laser Frame', 100, 15); // TODO better way necessary
  c1.save();
  c1.translate(x0,y0);
  rc1.line(0,0,alpha,0,{stroke:'#999999', roughness:0});
  c1.translate(alpha,0);
  c1.rotate(framecohstate.phi2);
  rc1.line(0,0,beta,0,{stroke:'#999999', roughness:0});
  rc1.circle(beta,0,r,{roughness:3});
  c1.restore();
  
  c2.clearRect(0,0,200,200);
  c2.fillText('Displaced Frame', 100, 15); // TODO better way necessary
  c2.save();
  c2.translate(x0,y0);
  c2.rotate(framecohstate.phi2);
  rc2.line(0,0,beta,0,{stroke:'#999999', roughness:0});
  rc2.circle(beta,0,r,{roughness:3});
  c2.restore();

  requestAnimationFrame(draw_labframecoh);
}
requestAnimationFrame(draw_labframecoh);
</script>

::: warning :
One of the main sources of confusion when confronted with these solutions is the habit of saying that number states are eigenstates in the Lab frame.
This would be true, only if there is no drive in the lab frame. In other words, number states are **not** eigenstates of a **driven** harmonic oscillator.
On the contrary:

- If the drive is constant, then the eigenstates are **displaced** number states;
- If the drive is oscillatory, then we have not derived any eigenstates (only the phase of an eigenstate is supposed to change with time), but at least we have the general semiclassical state corresponding to such a system in the last column of the table above.
:::

::: further-reading :
In the classical limit this result is unsurprising. Consider a driven harmonic oscillator $$\ddot{x}=-\omega_0^2 x+\varepsilon \sin{\omega_\textrm{d}t}.$$
The solution to this ODE is
$$x = \beta \sin(\omega_0 t + \phi) + \alpha\sin(\omega_d t),$$
where $\beta$ and $\phi$ depend on initial conditions
and $\alpha$ depends on the drive amplitude and detuning.
We can compare this to the expectation value of the operator $\hat{x}\propto\hat{a}+\hat{a}^\dagger$ under the state $\mid e^{-i\omega_l t}\alpha + e^{-i\omega_a t}\beta \rangle$.
$$\langle \hat{x} \rangle = \mathcal{Re}\left(e^{-i\omega_l t}\alpha + e^{-i\omega_a t}\beta\right),$$
which is virtually the same result.
:::

## Decay into the environment

Phenomenologically, we would expect the $\omega_l$ classical light sent into the cavity to leak out also at $\omega_l$ (conservation of energy). However, if the displaced frame has some non-vacuum state, we would expect that state to also leak out, but as $\omega_a$ photons. How can we see this behavior from the fundamental equations above?

The most bare-bones approach would be to employ Fermi's golden rule (or more generally, perturbation theory where we introduce weak coupling to the continuum of electromagnetic modes of the environment).

### Decay from undriven cavity (a primer to Fermi's golden rule)

To set the stage, we would first consider a simpler problem: the decay of an undriven cavity weakly coupled to the continuum. The Hamiltonian of this system is $$\hat{H}\frac{1}{\hbar}=\omega \hat{a}^\dagger\hat{a} + \sum_k \left(\omega_k\hat{w}^\dagger\hat{w}+\gamma \hat{a}\hat{w}_k^\dagger+\gamma \hat{a}^\dagger\hat{w}_k\right),$$
where $w_k$ is the k-th mode of the environment.
At $\gamma=0$ the eigenstates are the Fock states. We would like to learn the rate at which $|1\rangle$ decays into $|0\rangle$ when the perturbation $\gamma$ is turned on. The ket $|n,m_k\rangle$ will be used to denote $n$ photons in the cavity, $m$ photons in the k-th environmental mode, and zero photons in all other environmental modes. An unperturbed state $|n,m_k\rangle$ evolves in time as $e^{i(n\omega+m\omega_k t)}|n,m_k\rangle$

_TODO: finish the discussion of the decay, derive the Lindblad master equation_

## References

_TODO: prettier formatting for references_
