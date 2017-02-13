// Generated by CoffeeScript 1.12.2
(function() {
  var blsd, commonWindowDecoration, form, gtranslate, multitran, offset, screen, screenCenterX, source, transcription, wordLength;

  blsd = require("blessed");

  commonWindowDecoration = {
    border: {
      type: "line",
      fg: "green"
    }
  };

  screen = blsd.screen({
    title: "translater v.0.0.1"
  });

  screenCenterX = Math.ceil(screen.width / 2);

  form = blsd.form({
    height: 3,
    border: commonWindowDecoration.border
  });

  source = blsd.textbox({
    padding: {
      left: screenCenterX
    }
  });

  transcription = blsd.box({
    top: 3,
    height: 3,
    border: commonWindowDecoration.border
  });

  gtranslate = blsd.box({
    top: 6,
    width: "40%",
    border: commonWindowDecoration.border
  });

  multitran = blsd.box({
    top: 6,
    right: 0,
    width: "60%",
    border: commonWindowDecoration.border
  });

  screen.append(form);

  screen.append(transcription);

  screen.append(gtranslate);

  screen.append(multitran);

  form.append(source);

  screen.render();

  screen.key(["C-c", "q"], function() {
    return process.exit(0);
  });

  offset = 0;

  wordLength = 0;

  source.on("keypress", function(ch) {
    if (ch != null) {
      if (ch.charCodeAt() === 13) {

      } else if (ch.charCodeAt() === 127) {
        if (wordLength) {
          --wordLength;
        }
      } else {
        ++wordLength;
      }
    }
    offset = screenCenterX - parseInt(wordLength / 2);
    source.padding.left = offset;
    return screen.render();
  });

  screen.key("space", function() {
    wordLength = 0;
    source.clearValue();
    source.padding.left = screenCenterX;
    source.readInput();
    return screen.render();
  });

  screen.key("e", function() {
    source.readInput();
    return screen.render();
  });

}).call(this);