function createLog(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  return messageContainer;
}

const stage = document.querySelector('.pane .stage');
const logsContainer = document.querySelector('.logs');
let counter = 0;
let sideCounter = 0;

stage.addEventListener('mouseover', function () {
  const log = createLog('Mouseul este pe scena');
  counter = counter + 1;
  sideCounter = sideCounter + 1;

  const counterLog = createLog(
    `Mouseul a fost pe scena de ${counter} ori. A trcut peste latura a-${sideCounter}-a oara`,
  );
  logsContainer.append(log);
  logsContainer.append(counterLog);
});

stage.addEventListener('mouseout', function () {
  sideCounter = sideCounter + 1;

  const log = createLog(
    `Mouseul Nu este pe scena! A trcut peste latura a-${sideCounter}-a oara`,
  );

  logsContainer.append(log);
});
