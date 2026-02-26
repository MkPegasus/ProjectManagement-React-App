import { members } from "../data/data";

/* function to find a given member from an id */
export function getMember(id) {
  return members.find((member) => member.id === id);
}
