#!/usr/bin/env node
import {CliCore} from "@tsed/cli-core";
import {config} from "../config";
import {GenerateSwaggerCmd} from "./commands/GenerateSwaggerCmd";

CliCore.bootstrap({
  ...config,
  commands: [
    GenerateSwaggerCmd
  ]
}).catch(console.error);
