import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";
import { DotTasks } from "./DotTasks"
import { TargetTask } from "./TargetTask.js";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.
Empirica.gameInit(game => {
  game.players.forEach((player, i) => {
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
    player.set("score", 0);
  });

  const round = game.addRound({});

  Object.keys(DotTasks).forEach(taskName => {
    const task = DotTasks[taskName];
    round.addStage({
      data: {
        taskName: taskName,
        questionText: task.questionText,
        imagePath: task.path,
        playingGame: task.playingGame,
      },
      name: taskName,
      displayName: taskName,
      durationInSeconds: 120
    });
  })

  const round2 = game.addRound({});
  Object.keys(TargetTask).forEach(taskName => {
    const task = TargetTask[taskName];
    round2.addStage({
      data: {
        taskName: taskName,
        questionText: task.questionText,
        imagePath: task.path,
        playingGame: task.playingGame,
        finalQuestion: true,
      },
      name: taskName,
      displayName: taskName,
      durationInSeconds: 240
    });
  })
});
