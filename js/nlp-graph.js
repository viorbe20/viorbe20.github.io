//source: https://www.amcharts.com/demos/sentence-cloud/
console.log("nlp-graph.js loaded");
am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("nlp-graph");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  // Add series
  // https://www.amcharts.com/docs/v5/charts/word-cloud/
  var series = root.container.children.push(
    am5wc.WordCloud.new(root, {
      maxCount: 100,
      minWordLength: 2,
      minFontSize: am5.percent(6),
      maxFontSize: am5.percent(8),
      angles: [0],
    })
  );

  var colorSet = am5.ColorSet.new(root, { step: 1 });

  // Configure labels
  series.labels.template.setAll({
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Courier New",
  });

  series.labels.template.setup = function (label) {
    label.set(
      "background",
      am5.RoundedRectangle.new(root, { fillOpacity: 1, fill: colorSet.next() })
    );
  };

  series.data.setAll([
    { category: "spaCy", value: 2.2 },
    { category: "deep learning", value: 2.3 },
    { category: "Bag of Words (BoW)", value: 2.4},
    { category: "neuroscience", value: 2.1 },
    { category: "psycholinguistics", value: 2.1 },
    { category: "sociolinguistics", value: 2.1 },
    { category: "computational linguistics", value: 2.1 },
    { category: "natural language processing", value: 2 },
    { category: "linguistics", value: 2.5 },
    { category: "corpus", value: 2.1 },
    { category: "learning models", value: 2.1 },
    { category: "Tranformers", value: 2.1},
    { category: "Named Entity Recognition", value: 2.3 },
    { category: "grammar", value: 2.2 },
    { category: "phonetics", value: 2.1 },
    { category: "syntax", value: 2.3 },
    { category: "morphology", value: 2.1 },
    { category: "stemming", value: 2.1 },
    { category: "semantics", value: 2.1 },
    { category: "pragmatics", value: 2.1 },
    { category: "NLTK (Natural Language Toolkit)", value: 2.1 },
    { category: "cognitive science", value: 2.1 },
    { category: "neurolinguistics", value: 2.1 },
    { category: "language acquisition", value: 2.1 },
    { category: "language production", value: 2.1 },
    { category: "language development", value: 2.1 },
    { category: "language evolution", value: 2.1 },
    { category: "POS tagging", value: 2.5 },
  ]);
}); // end am5.ready()
