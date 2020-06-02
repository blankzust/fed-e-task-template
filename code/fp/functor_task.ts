import { task } from "folktale"

function readFile(path: string) {
  return new task(({ resolve, reject }) => {
    fs.readFile()
  })
}