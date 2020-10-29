import "trace";
import "clarify";

import cluster from "cluster";
import * as main from "./main";
import * as worker from "./worker";

const run = (): void => {
  cluster.isWorker ? worker.run() : main.run();
};

run();
