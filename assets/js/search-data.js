// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-my-first-paper-prunecd-contrasting-pruned-self-model-to-improve-decoding-factuality-has-been-accepted-to-emnlp-2025-main-conference",
          title: 'My first paper “PruneCD: Contrasting Pruned Self Model to Improve Decoding Factuality” has...',
          description: "",
          section: "News",},{id: "news-our-paper-stabilizing-direct-training-of-spiking-neural-networks-membrane-potential-initialization-and-threshold-robust-surrogate-gradient-has-been-accepted-to-wacv-2026",
          title: 'Our paper “Stabilizing Direct Training of Spiking Neural Networks: Membrane Potential Initialization and...',
          description: "",
          section: "News",},{id: "news-our-paper-loopcd-loop-wise-contrastive-decoding-for-improving-reasoning-in-looped-language-models-has-been-accepted-to-emnlp-2026-main-conference",
          title: 'Our paper “LoopCD: Loop-wise Contrastive Decoding for Improving Reasoning in Looped Language Models”...',
          description: "",
          section: "News",},{id: "news-our-paper-robust-and-efficient-continual-model-merging-via-global-singular-subspace-separation-and-restoration-has-been-accepted-to-neurips-2026",
          title: 'Our paper “Robust and Efficient Continual Model Merging via Global Singular Subspace Separation...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%68%79%75%34%31%38@%70%6F%73%74%65%63%68.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hoeng4", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/byeongho-yu-3940a51aa", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yubho__", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
