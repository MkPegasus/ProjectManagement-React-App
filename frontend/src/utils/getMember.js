import { members } from "../data/data";

/* Method to find a given member from an id */
export function getMember(id) {
  return members.find((member) => member.id === id);
}
