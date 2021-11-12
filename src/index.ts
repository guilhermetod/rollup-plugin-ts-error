import { MyInterface } from "./my-interface";

export function getData(): MyInterface {
  return {
    shouldBeBundled: true,
  }
}
